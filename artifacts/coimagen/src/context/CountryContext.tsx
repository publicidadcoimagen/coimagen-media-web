import { createContext, useContext, useState } from "react";
import type { Country } from "@/config/site";

interface CountryContextValue {
  country: Country;
  setCountry: (c: Country) => void;
}

const CountryContext = createContext<CountryContextValue | null>(null);

const COUNTRY_COOKIE_NAME = "coimagen-country";

/** Reads the country cookie set by middleware.ts from the visitor's IP. */
function readCountryCookie(): Country {
  if (typeof document === "undefined") return "usa";
  const match = document.cookie.match(new RegExp(`(?:^|; )${COUNTRY_COOKIE_NAME}=([^;]+)`));
  return match?.[1] === "mx" ? "mx" : "usa";
}

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState<Country>(readCountryCookie);
  return <CountryContext.Provider value={{ country, setCountry }}>{children}</CountryContext.Provider>;
}

export function useCountry() {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error("useCountry must be used within CountryProvider");
  return ctx;
}
