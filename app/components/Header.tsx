"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-40 bg-[var(--ink)] border-b-2 border-[var(--paper-2)] text-[var(--paper)] py-4"
    >
      <div className="wrap flex flex-wrap justify-between items-center gap-4">
        <Link
          href="/"
          className="font-anton text-2xl tracking-wider text-[var(--paper)] hover:text-[var(--yellow)] transition-colors relative group"
        >
          JHAY <span className="text-[var(--red)] font-bold">·</span> SANYAY
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6 font-mono text-xs text-[var(--paper-2)] tracking-widest uppercase">
          <Link href="/portfolio" className="text-[var(--paper)] hover:text-[var(--yellow)] font-bold transition-colors">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-[var(--yellow)] transition-colors">
            Guides
          </Link>
          <Link href="/#prices" className="hover:text-[var(--yellow)] transition-colors">
            Prices
          </Link>
          <Link
            href="/#order"
            className="text-[var(--yellow)] border border-[var(--yellow)] px-3 py-1 hover:bg-[var(--yellow)] hover:text-[var(--ink)] transition-all duration-300 active:scale-95"
          >
            Book Ticket
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
