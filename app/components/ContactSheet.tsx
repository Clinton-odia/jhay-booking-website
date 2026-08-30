import Image from "next/image";

const frames = [
  { id: 1, src: "/images/cover-01.jpg", alt: "Frame 01 - Cover Art" },
  { id: 2, src: "/images/cover-02.jpg", alt: "Frame 02 - Illustration" },
  { id: 3, src: "/images/cover-03.jpg", alt: "Frame 03 - Cover Art" },
  { id: 4, src: "/images/cover-04.jpg", alt: "Frame 04 - Cover Art" },
  { id: 5, src: "/images/cover-05.jpg", alt: "Frame 05 - Cover Art" },
  { id: 6, src: "/images/cover-06.jpg", alt: "Frame 06 - Logo Concept" },
  { id: 7, src: "/images/cover-07.jpg", alt: "Frame 07 - Cover Art" },
  { id: 8, src: "/images/cover-08.jpg", alt: "Frame 08 - Cover Art" },
  { id: 9, src: "/images/cover-09.jpg", alt: "Frame 09 - Cover Art" },
];

export default function ContactSheet() {
  return (
    <div className="sheet relative bg-[var(--paper)] p-5 border-2 border-[var(--ink)] rotate-[1.2deg] shadow-[10px_10px_0_var(--red)]">
      <div className="sheet-label font-mono text-[10px] text-[var(--ink)] uppercase tracking-[0.08em] mb-[10px] flex justify-between">
        <span>CONTACT SHEET</span>
        <span>09 FRAMES</span>
      </div>
      <div className="tiles grid grid-cols-3 gap-2">
        {frames.map((frame) => (
          <div
            key={frame.id}
            className="relative aspect-square w-full h-full overflow-hidden bg-[var(--paper-2)] border border-[var(--ink)]/10"
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              fill
              sizes="(max-width: 820px) 33vw, 20vw"
              className="tile object-cover grayscale-[15%] contrast-[105%] hover:grayscale-0 hover:contrast-[110%] transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
