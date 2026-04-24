import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { policyPageQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

const pageTitles: Record<string, string> = {
  "privacy-policy": "Privacy Policy",
  "shipping-and-return-policy": "Shipping & Return Policy",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const page = await client.fetch(policyPageQuery, { slug });
    if (page) return { title: `${page.title} — Orniva` };
  } catch {}
  return { title: `${pageTitles[slug] || "Policy"} — Orniva` };
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;

  let page = null;
  try {
    page = await client.fetch(policyPageQuery, { slug });
  } catch {}

  const title = page?.title || pageTitles[slug] || "Policy";

  return (
    <>
      <section className="bg-bg-card border-b border-border py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-3">{title}</h1>
          {page?.lastUpdated && (
            <p className="text-text-faint text-xs">Last updated: {new Date(page.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          )}
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[800px] mx-auto">
        {page?.content ? (
          <div className="prose-orniva">
            <PortableText value={page.content} />
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-faint text-sm mb-4">This page content is managed through the CMS.</p>
            <p className="text-text-faint text-xs">Please add a Policy Page in the <Link href="/studio" className="text-gold hover:underline">Sanity Studio</Link> with the slug: <code className="text-gold bg-bg-elevated px-2 py-1">{slug}</code></p>
          </div>
        )}
      </section>
    </>
  );
}
