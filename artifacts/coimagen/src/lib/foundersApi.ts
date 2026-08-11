import { useEffect, useState } from "react";
import { DIAGNOSIS_API_BASE } from "@/lib/diagnosisApi";

export interface FounderCount {
  count: number;
  max: number;
}

/** Live "X of MAX founders" count from coimagen-os — no auth, count+max only. */
export function useFounderCount(): FounderCount | null {
  const [state, setState] = useState<FounderCount | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${DIAGNOSIS_API_BASE}/api/public/founders/count`)
      .then(async (res) => {
        if (cancelled || !res.ok) return;
        const json = (await res.json()) as FounderCount;
        setState(json);
      })
      .catch(() => { /* stays null — callers treat null as "unknown", never a fake count */ });
    return () => { cancelled = true; };
  }, []);

  return state;
}
