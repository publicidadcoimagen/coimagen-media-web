import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

declare global {
  interface Window {
    turnstile?: {
      render(container: HTMLElement, options: Record<string, unknown>): string;
      reset(widgetId: string): void;
      remove(widgetId: string): void;
    };
  }
}

export interface TurnstileWidgetHandle {
  reset(): void;
}

interface TurnstileWidgetProps {
  siteKey: string;
  language: "es" | "en";
  onToken(token: string | null): void;
}

// Cloudflare's script is only ever added from an effect, i.e. in the
// browser: the prerendered HTML (scripts/prerender.mjs) never contains it,
// so crawlers and the SEO snapshot are unaffected.
function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("turnstile script failed")));
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      script.remove();
      reject(new Error("turnstile script failed"));
    };
    document.head.appendChild(script);
  });
}

// Same widget as the portal login in coimagen-os, adapted to the public
// site: the token is single-use, so the caller resets it after every failed
// submission; reset() also clears the token the parent holds.
export const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(function TurnstileWidget(
  { siteKey, language, onToken },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useImperativeHandle(ref, () => ({
    reset() {
      onTokenRef.current(null);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
  }));

  useEffect(() => {
    if (!containerRef.current) return;
    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          language,
          theme: "dark",
          callback: (token: string) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(null),
          "error-callback": () => onTokenRef.current(null),
        });
      })
      .catch(() => onTokenRef.current(null));

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [siteKey, language]);

  return <div ref={containerRef} className="min-h-[65px]" />;
});
