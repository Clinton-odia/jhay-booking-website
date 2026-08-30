import Image from "next/image";

const portfolioItems = [
  { id: 1, src: "/images/cover-01.jpg", alt: "Jhay Sanyay Cover Art Work 01" },
  { id: 2, src: "/images/cover-02.jpg", alt: "Jhay Sanyay Illustration Work 02" },
  { id: 3, src: "/images/cover-03.jpg", alt: "Jhay Sanyay Cover Art Work 03" },
  { id: 4, src: "/images/cover-04.jpg", alt: "Jhay Sanyay Cover Art Work 04" },
  { id: 5, src: "/images/cover-05.jpg", alt: "Jhay Sanyay Cover Art Work 05" },
  { id: 6, src: "/images/cover-06.jpg", alt: "Jhay Sanyay Logo Design Work 06" },
  { id: 7, src: "/images/cover-07.jpg", alt: "Jhay Sanyay Cover Art Work 07" },
  { id: 8, src: "/images/cover-08.jpg", alt: "Jhay Sanyay Cover Art Work 08" },
  { id: 9, src: "/images/cover-09.jpg", alt: "Jhay Sanyay Cover Art Work 09" },
  { id: 10, src: "/images/cover-10.jpg", alt: "Jhay Sanyay Cover Art Work 10" },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="portfolio-section py-[72px] bg-[var(--ink)]">
      <div className="wrap">
        <div className="portfolio-grid grid grid-cols-2 max-[760px]:grid-cols-2 min-[761px]:grid-cols-5 gap-[14px]">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group relative aspect-square overflow-hidden bg-[var(--paper-2)] border-2 border-transparent hover:border-[var(--yellow)] transition-colors duration-150"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 760px) 50vw, 20vw"
                className="object-cover block transition-transform duration-300 group-hover:scale-106"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
