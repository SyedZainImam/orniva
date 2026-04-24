"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductImageGalleryProps {
  images?: Array<{ asset?: { _ref: string } }>;
  title: string;
  badge?: string;
  badgeLabel: string;
  badgeClass: string;
}

export default function ProductImageGallery({ images, title, badge, badgeLabel, badgeClass }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const hasImages = images && images.length > 0 && images[0]?.asset;

  return (
    <>
      <div className="aspect-square bg-bg-card border border-border relative overflow-hidden mb-3">
        {hasImages ? (
          <Image
            src={urlFor(images[selectedIndex]).width(800).height(800).url()}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full border border-border flex items-center justify-center mx-auto mb-3">
                <span className="text-gold text-4xl font-heading">{title[0]}</span>
              </div>
              <span className="text-text-faint text-[10px] tracking-[0.15em] uppercase">Product Image</span>
            </div>
          </div>
        )}

        {badge && (
          <div className={`absolute top-4 left-4 px-3 py-1.5 text-[10px] font-semibold tracking-wider uppercase ${badgeClass}`}>
            {badgeLabel}
          </div>
        )}
      </div>

      {hasImages && images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`aspect-square relative overflow-hidden border transition-colors ${
                i === selectedIndex ? "border-gold" : "border-border hover:border-gold/30"
              }`}
            >
              {img.asset && (
                <Image
                  src={urlFor(img).width(200).height(200).url()}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              )}
            </button>
          ))}
        </div>
      )}

      {(!hasImages || images.length <= 1) && (
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-bg-card border border-border" />
          ))}
        </div>
      )}
    </>
  );
}
