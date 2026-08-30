"use client";

import { motion, Variants } from "framer-motion";

const pricingItems = [
  {
    name: "Single Cover Art",
    turnaround: "3–5 days",
    price: "₦60,000 / $80",
    desc: "One track, full concept + 2 revisions. High-res final deliverable.",
  },
  {
    name: "EP / Album Art",
    turnaround: "7–10 days",
    price: "₦80,000 / $100",
    desc: "Front cover, back/tracklist, plus social media promo crop variants.",
  },
  {
    name: "Logo / Brand Mark",
    turnaround: "5–7 days",
    price: "₦45,000 / $60",
    desc: "Primary mark, 2 initial concepts, source files + usage guide.",
  },
  {
    name: "Comic Page",
    turnaround: "per page · 4–6 days",
    price: "₦80,000 / $100",
    desc: "Full layout, pencil line art, flat colors and panel lettering.",
  },
  {
    name: "Motion / Animated Cover",
    turnaround: "7–14 days",
    price: "₦60,000 / $80",
    desc: "Looping animated MP4/GIF version of a still cover for Spotify Canvas & IG.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function PricingSection() {
  return (
    <section id="prices" className="ticket-section py-[72px] bg-[var(--paper)] text-[var(--ink)] overflow-hidden">
      <div className="wrap">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="section-head mb-10"
        >
          <div className="eyebrow font-mono text-xs text-[var(--red)] tracking-[0.12em] uppercase mb-[18px] flex items-center gap-[10px] before:content-[''] before:w-5 before:h-[2px] before:bg-[var(--red)] before:inline-block">
            Rates &amp; Specs
          </div>
          <h2 className="text-[clamp(32px,5vw,48px)] font-anton uppercase text-[var(--ink)]">
            Commission Menu
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="price-list border-t-2 border-dashed border-[var(--muted)]"
        >
          {pricingItems.map((item, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="price-row grid grid-cols-[1fr_auto_auto] max-[600px]:grid-cols-1 gap-[18px] max-[600px]:gap-[6px] items-baseline py-5 border-b-2 border-dashed border-[var(--muted)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors duration-300 px-4 -mx-4 rounded-sm"
            >
              <div className="name font-anton text-[20px] uppercase">
                {item.name}
              </div>
              <div className="turnaround font-mono text-[12px] text-[var(--muted)] uppercase group-hover:text-[var(--paper-2)]">
                {item.turnaround}
              </div>
              <div className="price font-mono text-[18px] font-bold text-[var(--red)] whitespace-nowrap">
                {item.price}
              </div>
              <div className="desc text-[14px] text-[var(--muted)] col-span-1 mt-1 min-[601px]:col-span-3 group-hover:text-[var(--paper)]">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
