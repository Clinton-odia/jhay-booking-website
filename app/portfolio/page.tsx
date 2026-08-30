import Header from "../components/Header";
import PortfolioGrid from "../components/PortfolioGrid";
import JobTicketForm from "../components/JobTicketForm";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--ink)]">
      <Header />
      
      {/* Portfolio Top Bar */}
      <section className="bg-[var(--paper)] py-8 border-b-2 border-[var(--ink)]">
        <div className="wrap flex justify-between items-center flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs text-[var(--red)] font-bold uppercase tracking-widest">
              Full Artwork Archive
            </span>
            <h1 className="font-anton text-4xl uppercase text-[var(--ink)]">
              Portfolio &amp; Showcase
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

      <PortfolioGrid />
      <JobTicketForm />
      <Footer />
    </main>
  );
}
