/**
 * USD → MXN conversion for the pricing page. Pure functions, no React —
 * the exchange rate is fetched at most once per calendar day and cached
 * in localStorage; every page view after that reads the cache.
 */

const FX_ENDPOINT = "https://api.frankfurter.dev/v1/latest?base=USD&symbols=MXN";
const RATE_CACHE_KEY = "coimagen_usd_mxn_rate_v1";
/** Used only if there's no cached rate at all and the live fetch also fails. */
export const FALLBACK_USD_TO_MXN_RATE = 17.5;

interface CachedRate {
  rate: number;
  fetchedOnDate: string; // YYYY-MM-DD
}

function todayDateString(): string {
  return new Date().toISOString().slice(0, 10);
}

function readCachedRate(): CachedRate | null {
  try {
    const raw = localStorage.getItem(RATE_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CachedRate>;
    if (typeof parsed.rate === "number" && typeof parsed.fetchedOnDate === "string") {
      return parsed as CachedRate;
    }
  } catch {
    // localStorage unavailable or corrupt cache — treat as no cache
  }
  return null;
}

function writeCachedRate(entry: CachedRate) {
  try {
    localStorage.setItem(RATE_CACHE_KEY, JSON.stringify(entry));
  } catch {
    // localStorage unavailable — rate just won't persist across visits
  }
}

/** Fetches today's USD→MXN rate, using a once-per-day cache. */
export async function getUsdToMxnRate(): Promise<number> {
  const today = todayDateString();
  const cached = readCachedRate();
  if (cached && cached.fetchedOnDate === today) return cached.rate;

  try {
    const res = await fetch(FX_ENDPOINT);
    if (!res.ok) throw new Error(`FX request failed: ${res.status}`);
    const data = (await res.json()) as { rates?: { MXN?: number } };
    const rate = data.rates?.MXN;
    if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
      throw new Error("Invalid FX response");
    }
    writeCachedRate({ rate, fetchedOnDate: today });
    return rate;
  } catch {
    // Prefer a stale cached rate over the hardcoded fallback.
    return cached?.rate ?? FALLBACK_USD_TO_MXN_RATE;
  }
}

/**
 * Rounds a whole-peso amount so it ends in 59 or 99 (Coimagen's pricing
 * convention), based on the tens digit ("decena") of the amount:
 *  - tens digit 5-9 → round to that hundred + 99
 *  - tens digit 0-4 → round to that hundred + 59
 *  - exact multiple of 100 → left unchanged
 */
export function roundToDecena(pesos: number): number {
  const hundreds = Math.floor(pesos / 100) * 100;
  const remainder = pesos - hundreds;
  if (remainder === 0) return hundreds;
  const tens = Math.floor(remainder / 10);
  return tens >= 5 ? hundreds + 99 : hundreds + 59;
}

/** Converts a USD price to a rounded, Coimagen-styled MXN price. */
export function convertUsdToMxn(usd: number, rate: number): number {
  return roundToDecena(Math.round(usd * rate));
}
