import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { policyPageQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const page = await client.fetch(policyPageQuery, { slug });
    return {
      title: page ? `${page.title} — Orniva` : "Policy — Orniva",
    };
  } catch {
    return { title: "Policy — Orniva" };
  }
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;

  let page = null;
  try {
    page = await client.fetch(policyPageQuery, { slug });
  } catch {}

  if (!page) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-text mb-4">Page Not Found</h1>
          <p className="text-text-faint mb-6">This policy page hasn&apos;t been created yet. Please add it in the CMS.</p>
          <Link href="/" className="inline-block bg-gold hover:bg-gold-dark text-bg font-heading text-[11px] tracking-[0.2em] uppercase px-8 py-3 transition-colors">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-bg-card border-b border-border py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-3">{page.title}</h1>
          {page.lastUpdated && (
            <p className="text-text-faint text-xs">Last updated: {new Date(page.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          )}
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-8 max-w-[800px] mx-auto">
        <div className="prose-orniva">
          <PortableText value={page.content} />
        </div>
      </section>
    </>
  );
}
