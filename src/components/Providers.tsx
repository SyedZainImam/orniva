"use client";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { SettingsProvider, type SiteSettings } from "@/context/SettingsContext";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
  settings: SiteSettings;
}

export default function Providers({ children, settings }: ProvidersProps) {
  return (
    <SessionProvider>
      <SettingsProvider settings={settings}>
        <CurrencyProvider cmsCurrencies={settings.currencies}>
          <CartProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </CartProvider>
        </CurrencyProvider>
      </SettingsProvider>
    </SessionProvider>
  );
}
