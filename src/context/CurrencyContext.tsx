"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface CurrencyOption {
  code: string;
  symbol: string;
  rate: number;
}

interface CurrencyContextType {
  currency: string;
  symbol: string;
  setCurrency: (code: string) => void;
  convert: (priceCAD: number) => number;
  format: (priceCAD: number) => string;
  currencies: CurrencyOption[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Base currency is CAD. Rates = how much of target currency per 1 CAD.
const DEFAULT_CURRENCIES: CurrencyOption[] = [
  { code: "CAD", symbol: "C$", rate: 1 },
  { code: "USD", symbol: "$", rate: 0.73 },
  { code: "PKR", symbol: "Rs.", rate: 204 },
  { code: "EUR", symbol: "€", rate: 0.67 },
  { code: "GBP", symbol: "£", rate: 0.57 },
];

export function CurrencyProvider({ children, cmsCurrencies }: { children: ReactNode; cmsCurrencies?: CurrencyOption[] }) {
  const allCurrencies: CurrencyOption[] = [
    { code: "CAD", symbol: "C$", rate: 1 },
    ...(cmsCurrencies && cmsCurrencies.length > 0 ? cmsCurrencies : DEFAULT_CURRENCIES.slice(1)),
  ];

  const [currency, setCurrencyState] = useState("CAD");

  useEffect(() => {
    const saved = localStorage.getItem("orniva-currency");
    if (saved && allCurrencies.find((c) => c.code === saved)) {
      setCurrencyState(saved);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setCurrency = useCallback((code: string) => {
    setCurrencyState(code);
    localStorage.setItem("orniva-currency", code);
  }, []);

  const current = allCurrencies.find((c) => c.code === currency) || allCurrencies[0];

  const convert = useCallback((priceCAD: number) => {
    return Math.round(priceCAD * current.rate * 100) / 100;
  }, [current.rate]);

  const format = useCallback((priceCAD: number) => {
    const converted = priceCAD * current.rate;
    if (current.code === "CAD") {
      return `C$${converted.toFixed(2)}`;
    }
    if (current.code === "PKR") {
      return `Rs. ${Math.round(converted).toLocaleString()}`;
    }
    return `${current.symbol}${converted.toFixed(2)}`;
  }, [current]);

  return (
    <CurrencyContext.Provider value={{ currency, symbol: current.symbol, setCurrency, convert, format, currencies: allCurrencies }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
