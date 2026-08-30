"use client";

import { useEffect } from "react";
import Image from "next/image";
import { PortfolioItem } from "../data/portfolioData";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleBookStyle = () => {
    onClose();
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink)]/90 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-[var(--paper)] text-[var(--ink)] border-2 border-[var(--ink)] max-w-4xl w-full p-6 md:p-8 shadow-[12px_12px_0_var(--red)] my-8 transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono font-bold text-xl w-10 h-10 bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--red)] transition-colors flex items-center justify-center"
          aria-label="Close Preview"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Container */}
          <div className="relative aspect-square w-full bg-[var(--paper-2)] border-2 border-[var(--ink)] overflow-hidden">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Details Container */}
          <div className="space-y-4">
            <div className="inline-block font-mono text-xs text-[var(--paper)] bg-[var(--red)] px-3 py-1 uppercase tracking-wider">
              {item.categoryLabel}
            </div>

            <h3 className="font-anton text-3xl md:text-4xl text-[var(--ink)] uppercase">
              {item.title}
            </h3>

            <p className="text-[var(--muted)] text-base font-sans leading-relaxed">
              {item.description}
            </p>

            <div className="pt-4 border-t border-dashed border-[var(--muted)]/40 space-y-3">
              <div className="font-mono text-xs text-[var(--muted)] uppercase">
                Recommended Service:{" "}
                <span className="font-bold text-[var(--ink)]">{item.serviceType}</span>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button onClick={handleBookStyle} className="stamp-btn text-base !py-3 !px-6">
                  BOOK THIS STYLE
                </button>
                <button
                  onClick={onClose}
                  className="btn !border-[var(--ink)] !text-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--paper)]"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
