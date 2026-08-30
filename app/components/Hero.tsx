import ContactSheet from "./ContactSheet";

export default function Hero() {
  return (
    <section className="hero pt-16 pb-14 bg-[var(--paper)] color-[var(--ink)]">
      <div className="wrap grid grid-cols-1 min-[820px]:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="eyebrow font-mono text-xs text-[var(--red)] tracking-[0.12em] uppercase mb-[18px] flex items-center gap-[10px] before:content-[''] before:w-5 before:h-[2px] before:bg-[var(--red)] before:inline-block">
            Now booking commissions
          </div>
          <h1 className="text-[clamp(48px,8vw,84px)] leading-[0.92] text-[var(--ink)] font-anton uppercase">
            Give your<br />
            release <em className="not-italic text-[var(--red)]">a face.</em>
          </h1>
          <p className="mt-[22px] max-w-[46ch] text-[var(--muted)] text-[17px]">
            Cover art, logos and comic pages for artists and brands who want the
            visual to hit as hard as the work does. Fill out the job ticket
            below — I&apos;ll reply with a quote inside 48 hours.
          </p>
          <div className="hero-cta mt-8 flex gap-[14px] flex-wrap">
            <a
              href="#order"
              className="btn btn-solid !border-[var(--red)] !text-[var(--paper)] hover:!bg-[var(--paper)] hover:!text-[var(--red)] hover:!border-[var(--ink)]"
            >
              Fill Out Job Ticket
            </a>
            <a
              href="#portfolio"
              className="btn !border-[var(--ink)] !text-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--paper)]"
            >
              See Work
            </a>
            <a
              href="#prices"
              className="btn !border-[var(--ink)] !text-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--paper)]"
            >
              See Prices
            </a>
          </div>
        </div>
        <div>
          <ContactSheet />
        </div>
      </div>
    </section>
  );
}
