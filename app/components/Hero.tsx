"use client";

import { motion, Variants } from "framer-motion";
import ContactSheet from "./ContactSheet";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function Hero() {
  return (
    <section className="hero pt-16 pb-14 bg-[var(--paper)] color-[var(--ink)] overflow-hidden">
      <div className="wrap grid grid-cols-1 min-[820px]:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="eyebrow font-mono text-xs text-[var(--red)] tracking-[0.12em] uppercase mb-[18px] flex items-center gap-[10px] before:content-[''] before:w-5 before:h-[2px] before:bg-[var(--red)] before:inline-block">
            Now booking commissions
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-[clamp(48px,8vw,84px)] leading-[0.92] text-[var(--ink)] font-anton uppercase">
            Give your<br />
            release <em className="not-italic text-[var(--red)] inline-block">a face.</em>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-[22px] max-w-[46ch] text-[var(--muted)] text-[17px]">
            Cover art, logos and comic pages for artists and brands who want the
            visual to hit as hard as the work does. Fill out the job ticket
            below — I&apos;ll reply with a quote inside 48 hours.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-cta mt-8 flex gap-[14px] flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#order"
              className="btn btn-solid !border-[var(--red)] !text-[var(--paper)] hover:!bg-[var(--paper)] hover:!text-[var(--red)] hover:!border-[var(--ink)] shadow-[4px_4px_0_var(--ink)] hover:shadow-none transition-shadow"
            >
              Fill Out Job Ticket
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="btn !border-[var(--ink)] !text-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--paper)]"
            >
              See Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#prices"
              className="btn !border-[var(--ink)] !text-[var(--ink)] hover:!bg-[var(--ink)] hover:!text-[var(--paper)]"
            >
              See Prices
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <ContactSheet />
        </motion.div>
      </div>
    </section>
  );
}
