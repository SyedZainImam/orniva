import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";

async function getSettings() {
  try {
    return await client.fetch(settingsQuery) || {};
  } catch {
    return {};
  }
}

export const metadata: Metadata = {
  title: "Orniva — Where Elegance Adorns You",
  description:
    "Orniva is a premium jewellery brand dedicated to crafting elegant pieces for every generation. Discover bangles, necklaces, earrings, rings and more.",
  keywords: ["jewellery", "orniva", "bangles", "necklaces", "earrings", "rings", "elegant jewellery"],
  openGraph: {
    title: "Orniva — Where Elegance Adorns You",
    description: "Premium jewellery crafted with elegance for every generation.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-text">
        <Providers settings={settings}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
