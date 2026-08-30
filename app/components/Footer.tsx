import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] border-t-2 border-[var(--paper-2)] py-10 color-[var(--paper-2)]">
      <div className="wrap flex flex-col items-center text-center gap-[10px]">
        <div className="foot-brand font-anton text-[28px] tracking-[0.04em] text-[var(--paper)]">
          JHAY SANYAY
        </div>
        <div className="foot-sub font-mono text-[12px] text-[var(--muted)] uppercase">
          Visual Artist &amp; Illustrator · Nigeria
        </div>
        <div className="foot-links flex gap-[20px] font-mono text-[12px] mt-[10px]">
          <Link href="/portfolio" className="text-[var(--yellow)] hover:underline">
            Portfolio
          </Link>
          <Link href="/blog" className="text-[var(--yellow)] hover:underline">
            Guides &amp; Blog
          </Link>
          <a
            href="https://linktr.ee/jhaysanyay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--yellow)] hover:underline"
          >
            Linktree ↗
          </a>
          <a href="/#order" className="text-[var(--yellow)] hover:underline">
            Job Ticket
          </a>
        </div>
        <div className="text-[10px] text-[var(--muted)] mt-[20px] tracking-wider uppercase">
          designed by <a href="https://www.instagram.com/buildwithclinton/" target="_blank" rel="noopener noreferrer" className="text-[var(--paper)] hover:text-[var(--yellow)] hover:underline transition-colors">buildwithclinton</a>
        </div>
      </div>
    </footer>
  );
}
