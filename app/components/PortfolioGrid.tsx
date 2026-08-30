"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, PortfolioItem, CategoryType } from "../data/portfolioData";
import PortfolioModal from "./PortfolioModal";

interface PortfolioGridProps {
  isPreview?: boolean;
}

export default function PortfolioGrid({ isPreview = false }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | CategoryType>("all");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { key: "all", label: "All Work" },
    { key: "cover-art", label: "Cover Art" },
    { key: "illustration", label: "Illustrations" },
    { key: "logo", label: "Logos & Branding" },
  ];

  const coverArtItems = portfolioItems.filter((item) => item.category === "cover-art");
  const illustrationItems = portfolioItems.filter((item) => item.category === "illustration");
  const logoItems = portfolioItems.filter((item) => item.category === "logo");

  // Curated preview items for homepage (8 items across categories)
  const previewItems = [
    coverArtItems[0], // Soul & Rhythm
    coverArtItems[1], // Golden Hour
    illustrationItems[1], // Alien Abduction
    illustrationItems[5], // Spider Thug
    logoItems[2], // Cayo Drip
    coverArtItems[9], // Khaid NWW
    illustrationItems[3], // Gang Study
    logoItems[4], // King Elvis
  ].filter(Boolean);

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio-section py-[72px] bg-[var(--ink)] text-[var(--paper)]">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head text-center mb-10">
          <div className="eyebrow font-mono text-xs text-[var(--yellow)] tracking-[0.12em] uppercase mb-[18px] inline-flex items-center gap-[10px] before:content-[''] before:w-5 before:h-[2px] before:bg-[var(--yellow)] after:content-[''] after:w-5 after:h-[2px] after:bg-[var(--yellow)]">
            {isPreview ? "Selected Works Preview" : "Complete Artwork Archive"}
          </div>
          <h2 className="text-[clamp(36px,6vw,56px)] font-anton uppercase text-[var(--paper)]">
            {isPreview ? "Recent Highlights" : "Visual Catalog"}
          </h2>
          <p className="max-w-[54ch] mx-auto text-[var(--muted)] text-[16px] mt-3">
            {isPreview
              ? "A preview selection of cover art, comic illustrations, and brand marks. Click any artwork for a high-res preview or view the full archive below."
              : "Explore all 33 cover art commissions, character studies, and logo designs. Filter by category or click any piece to inspect details."}
          </p>
        </div>

        {/* Filter Tabs (only shown on Full Portfolio view) */}
        {!isPreview && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key as "all" | CategoryType)}
                  className={`font-mono text-xs uppercase tracking-wider px-5 py-3 border-2 transition-all duration-150 ${
                    isActive
                      ? "bg-[var(--red)] border-[var(--red)] text-[var(--paper)] font-bold shadow-[4px_4px_0_var(--paper)]"
                      : "bg-transparent border-[var(--paper-2)] text-[var(--paper-2)] hover:border-[var(--paper)] hover:text-[var(--paper)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Grid Display */}
        {isPreview ? (
          /* Homepage Preview Mode (8 Curated Items) */
          <div>
            <div className="grid grid-cols-2 min-[640px]:grid-cols-4 gap-4 md:gap-5 mb-12">
              {previewItems.map((item) => (
                <PortfolioTile
                  key={item.id}
                  item={item}
                  onClick={() => setActiveModalItem(item)}
                />
              ))}
            </div>

            {/* View Full Portfolio CTA */}
            <div className="text-center pt-4 border-t-2 border-dashed border-[var(--paper-2)]/30">
              <Link
                href="/portfolio"
                className="stamp-btn inline-flex items-center gap-3 text-lg py-4 px-8"
              >
                VIEW FULL PORTFOLIO ARCHIVE (33 PIECES) →
              </Link>
            </div>
          </div>
        ) : selectedCategory === "all" ? (
          /* Full Archive - Sectioned View */
          <div className="space-y-16">
            {/* Section 1: Cover Art */}
            <div>
              <div className="flex items-center gap-4 mb-6 border-b-2 border-dashed border-[var(--paper-2)]/30 pb-3">
                <span className="font-mono text-xs text-[var(--red)] uppercase tracking-widest font-bold">
                  SECTION 01
                </span>
                <h3 className="font-anton text-2xl text-[var(--paper)] uppercase">
                  Cover Art ({coverArtItems.length})
                </h3>
              </div>
              <div className="grid grid-cols-2 min-[640px]:grid-cols-3 min-[1024px]:grid-cols-4 gap-4 md:gap-5">
                {coverArtItems.map((item) => (
                  <PortfolioTile
                    key={item.id}
                    item={item}
                    onClick={() => setActiveModalItem(item)}
                  />
                ))}
              </div>
            </div>

            {/* Section 2: Illustrations */}
            <div>
              <div className="flex items-center gap-4 mb-6 border-b-2 border-dashed border-[var(--paper-2)]/30 pb-3">
                <span className="font-mono text-xs text-[var(--yellow)] uppercase tracking-widest font-bold">
                  SECTION 02
                </span>
                <h3 className="font-anton text-2xl text-[var(--paper)] uppercase">
                  Illustrations &amp; Comic Art ({illustrationItems.length})
                </h3>
              </div>
              <div className="grid grid-cols-2 min-[640px]:grid-cols-3 min-[1024px]:grid-cols-4 gap-4 md:gap-5">
                {illustrationItems.map((item) => (
                  <PortfolioTile
                    key={item.id}
                    item={item}
                    onClick={() => setActiveModalItem(item)}
                  />
                ))}
              </div>
            </div>

            {/* Section 3: Logos */}
            <div>
              <div className="flex items-center gap-4 mb-6 border-b-2 border-dashed border-[var(--paper-2)]/30 pb-3">
                <span className="font-mono text-xs text-[var(--cyan)] uppercase tracking-widest font-bold">
                  SECTION 03
                </span>
                <h3 className="font-anton text-2xl text-[var(--paper)] uppercase">
                  Logos &amp; Brand Marks ({logoItems.length})
                </h3>
              </div>
              <div className="grid grid-cols-2 min-[640px]:grid-cols-3 min-[1024px]:grid-cols-4 gap-4 md:gap-5">
                {logoItems.map((item) => (
                  <PortfolioTile
                    key={item.id}
                    item={item}
                    onClick={() => setActiveModalItem(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Full Archive - Filtered View */
          <div className="grid grid-cols-2 min-[640px]:grid-cols-3 min-[1024px]:grid-cols-4 gap-4 md:gap-5">
            {filteredItems.map((item) => (
              <PortfolioTile
                key={item.id}
                item={item}
                onClick={() => setActiveModalItem(item)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <PortfolioModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </section>
  );
}

function PortfolioTile({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square overflow-hidden bg-[var(--paper-2)] border-2 border-[var(--paper-2)]/20 hover:border-[var(--yellow)] cursor-pointer transition-all duration-200 shadow-md"
    >
      <Image
        src={item.imageSrc}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover block transition-transform duration-300 group-hover:scale-108"
      />
      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-end">
        <span className="font-mono text-[10px] text-[var(--yellow)] uppercase tracking-wider font-bold">
          {item.categoryLabel}
        </span>
        <h4 className="font-anton text-lg text-[var(--paper)] leading-tight uppercase">
          {item.title}
        </h4>
      </div>
    </div>
  );
}
