"use client";

import { createContext, useContext, type ReactNode } from "react";

export interface SiteSettings {
  title?: string;
  tagline?: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
  whatsappNumber?: string;
  address?: string;
  workingHours?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  paymentMethods?: Array<{ name: string; details: string }>;
  checkoutMessage?: string;
  freeShippingThreshold?: number;
  currencies?: Array<{ code: string; symbol: string; rate: number }>;
}

const SettingsContext = createContext<SiteSettings>({});

export function SettingsProvider({ children, settings }: { children: ReactNode; settings: SiteSettings }) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
