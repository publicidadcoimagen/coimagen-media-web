import { useEffect, useState } from "react";
import { PAYPAL_CLIENT_ID } from "./facturaApi";

// Minimal shape of what this codebase actually calls on window.paypal —
// the PayPal JS SDK has no first-party/well-maintained TS types for the
// Buttons component, so this is intentionally hand-typed to just the
// surface used here rather than pulling in a third-party @types package.
interface PaypalButtonsActions {
  order: { capture: () => Promise<unknown> };
}
interface PaypalButtonsInstance {
  render: (container: HTMLElement) => void;
  close: () => void;
}
interface PaypalNamespace {
  Buttons: (config: {
    createOrder: () => Promise<string>;
    onApprove: (data: { orderID: string }, actions: PaypalButtonsActions) => Promise<void>;
    onError?: (err: unknown) => void;
    style?: Record<string, string>;
  }) => PaypalButtonsInstance;
}

declare global {
  interface Window {
    paypal?: PaypalNamespace;
  }
}

// Loads the PayPal JS SDK script once per currency (the SDK fixes its
// currency at load time — a page showing a USD cuota and a page showing an
// MXN cuota need separate script instances, hence keying the cache by
// currency rather than loading it unconditionally once).
const loadedByCurrency = new Map<string, Promise<void>>();

function loadScript(currency: string): Promise<void> {
  const cached = loadedByCurrency.get(currency);
  if (cached) return cached;

  const promise = new Promise<void>((resolve, reject) => {
    if (!PAYPAL_CLIENT_ID) {
      reject(new Error("VITE_PAYPAL_CLIENT_ID no está configurada"));
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(PAYPAL_CLIENT_ID)}&currency=${encodeURIComponent(currency)}`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No se pudo cargar el SDK de PayPal"));
    document.body.appendChild(script);
  });

  loadedByCurrency.set(currency, promise);
  return promise;
}

export function usePaypalSdk(currency: string): { loaded: boolean; error: string | null } {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);
    setError(null);
    loadScript(currency)
      .then(() => { if (!cancelled) setLoaded(true); })
      .catch((err) => { if (!cancelled) setError(err instanceof Error ? err.message : "Error cargando PayPal"); });
    return () => {
      cancelled = true;
    };
  }, [currency]);

  return { loaded, error };
}
