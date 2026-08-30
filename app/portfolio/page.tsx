import type { Metadata } from "next";
import Header from "../components/Header";
import PortfolioGrid from "../components/PortfolioGrid";
import JobTicketForm from "../components/JobTicketForm";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Artwork Portfolio (33 Pieces)",
  description:
    "Explore the complete 33-piece portfolio archive by Jhay Sanyay, featuring cover art, comic illustrations, character studies, and logo marks.",
  openGraph: {
    title: "Full Artwork Portfolio — Jhay Sanyay Studio",
    description:
      "Explore 33 custom cover art designs, comic panel studies, and brand marks by Jhay Sanyay.",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--ink)]">
      <Header />

      {/* Portfolio Top Bar */}
      <section className="bg-[var(--paper)] py-8 border-b-2 border-[var(--ink)]">
        <div className="wrap flex justify-between items-center flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs text-[var(--red)] font-bold uppercase tracking-widest">
              Full Artwork Archive (33 Pieces)
            </span>
            <h1 className="font-anton text-4xl uppercase text-[var(--ink)]">
              Complete Portfolio &amp; Showcase
            </h1>
          </div>
          <Link
            href="/"
            className="btn !border-[var(--ink)] !text-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--paper)]"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      <PortfolioGrid isPreview={false} />
      <JobTicketForm />
      <Footer />
    </main>
  );
}
