import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
