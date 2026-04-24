import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";
import ContactPageClient from "@/components/ContactPageClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact Us — Orniva",
  description: "Get in touch with Orniva. We'd love to hear from you.",
};

export default async function ContactPage() {
  let settings = null;
  try {
    settings = await client.fetch(settingsQuery);
  } catch {}

  return <ContactPageClient settings={settings} />;
}
