export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--ink)] border-b-2 border-[var(--paper-2)]">
      <div className="wrap flex items-center justify-between py-4">
        <div className="font-anton text-[22px] tracking-[0.02em] text-[var(--paper)]">
          JHAY<span className="text-[var(--red)]">·</span>SANYAY
        </div>
        <div className="font-mono text-[11px] text-[var(--muted)] tracking-[0.08em] uppercase">
          Cover Art · Nigeria
        </div>
      </div>
    </header>
  );
}
