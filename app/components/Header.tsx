import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--ink)] border-b-2 border-[var(--paper-2)] text-[var(--paper)] py-4">
      <div className="wrap flex flex-wrap justify-between items-center gap-4">
        <Link href="/" className="font-anton text-2xl tracking-wider text-[var(--paper)] hover:text-[var(--yellow)] transition-colors">
          JHAY <span className="text-[var(--red)] font-bold">·</span> SANYAY
        </Link>
        
        <nav className="flex items-center gap-6 font-mono text-xs text-[var(--paper-2)] tracking-widest uppercase">
          <Link href="/#portfolio" className="hover:text-[var(--yellow)] transition-colors">
            Work
          </Link>
          <Link href="/#prices" className="hover:text-[var(--yellow)] transition-colors">
            Prices
          </Link>
          <Link
            href="/#order"
            className="text-[var(--yellow)] border border-[var(--yellow)] px-3 py-1 hover:bg-[var(--yellow)] hover:text-[var(--ink)] transition-colors"
          >
            Book Ticket
          </Link>
        </nav>
      </div>
    </header>
  );
}
