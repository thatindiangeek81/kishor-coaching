"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const branches = [
  {
    index: "01",
    name: "Pioneer Branch",
    tag: "Est. First",
    year: "1999",
    era: "The Beginning",
    phone: "+91 70699 96002",
    address: "Ch-6, Vastunirman Society, Sector 22, Sector 29, Gandhinagar, Gujarat 382021",
    email: "kishorinstitute.sales@gmail.com",
    mapsUrl: "https://www.google.com/maps?q=Kishor+Institute+Pioneer+Branch+Gandhinagar",
    lat: 23.2371,
    lng: 72.6276,
  },
  {
    index: "02",
    name: "Pride Branch",
    tag: "Main Campus",
    year: "2008",
    era: "Growing Strong",
    phone: "+91 97272 76002",
    address: "210, Shalin Galleria Complex, Near G-1 Circle, R.T.O Circle Sector 4, Gandhinagar, Gujarat 382004",
    email: "kishorinstitute.sales@gmail.com",
    mapsUrl: "https://www.google.com/maps?q=Kishor+Institute+Pride+Branch+Gandhinagar",
    lat: 23.2033,
    lng: 72.6233,
  },
  {
    index: "03",
    name: "Prime Branch",
    tag: "Newest",
    year: "2019",
    era: "The Future",
    phone: "+91 70692 56002",
    address: "Pramukh Avenue, Kudasan, Gandhinagar",
    email: "kishorinstitute.sales@gmail.com",
    mapsUrl: "https://www.google.com/maps?q=Kishor+Institute+Prime+Branch+Gandhinagar",
    lat: 23.1848,
    lng: 72.6211,
  },
];

function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// Dynamically imported to avoid SSR issues with Leaflet
const BranchMap = dynamic(() => import("./BranchMap").then(m => ({ default: m.default })), { ssr: false });

function TimelineNode({
  branch, index, isActive, isLast, onClick, visible,
}: {
  branch: typeof branches[0]; index: number; isActive: boolean;
  isLast: boolean; onClick: () => void; visible: boolean;
}) {
  return (
    <div
      className={`flex gap-5 cursor-pointer transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7"}`}
      style={{ transitionDelay: `${0.2 + index * 0.18}s` }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center" style={{ width: 28, flexShrink: 0 }}>
        <div className={`relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
          isActive ? "bg-[#D94B1F] border-[#D94B1F] w-7 h-7 shadow-[0_0_0_5px_rgba(217,75,31,0.12)]" : "bg-white border-[#d4cfc8] w-5 h-5"
        }`}>
          {isActive && <span className="w-2 h-2 rounded-full bg-white block" />}
        </div>
        {!isLast && (
          <div className={`flex-1 w-px mt-1 transition-all duration-500 ${isActive ? "bg-gradient-to-b from-[#D94B1F] to-[#e8e5e0]" : "bg-[#e8e5e0]"}`}
            style={{ minHeight: 52 }} />
        )}
      </div>

      <div className={`pb-8 flex-1 rounded-xl transition-all duration-300 ${isActive ? "bg-[#fff8f6] border border-[#fdddd4] p-4" : "pt-0.5"}`}>
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`text-[11px] font-semibold tracking-wider ${isActive ? "text-[#D94B1F]" : "text-[#b0aba3]"}`}>{branch.year}</span>
          <span className={`text-[9px] font-medium tracking-widest uppercase px-1.5 py-0.5 rounded-full ${
            isActive ? "bg-[#fde8df] text-[#D94B1F]" : "bg-[#f0ede8] text-[#888580]"
          }`}>{branch.era}</span>
        </div>
        <h3 className={`text-[15px] font-medium leading-tight mb-0.5 transition-colors duration-200 ${isActive ? "text-[#1a1a18]" : "text-[#444240]"}`}>
          {branch.name}
        </h3>
        <p className="text-[12px] font-light text-[#888580]">{branch.tag}</p>

        <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: isActive ? 220 : 0 }}>
          <div className="mt-3 pt-3 border-t border-[#fdddd4] flex flex-col gap-2">
            <p className="text-[12px] text-[#888580] font-light leading-relaxed">{branch.address}</p>
            <div className="flex items-center gap-2 text-[12px] text-[#D94B1F] font-medium">
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 8.81 19.79 19.79 0 01.06 2.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {branch.phone}
            </div>
            <a
              href={branch.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white bg-[#D94B1F] px-3 py-1.5 rounded-md self-start hover:opacity-80 transition-opacity">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BranchesSection() {
  const { ref, visible } = useVisible(0.05);
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="py-16 md:py-28 px-5 md:px-12 bg-white border-t border-[#e8e5e0]" id="branches">

      <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#888580] mb-3">Our Branches</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1a1a18]">
            25 years across<br />Gandhinagar.
          </h2>
        </div>
        <p className="text-[14px] text-[#888580] max-w-[240px] sm:text-right leading-relaxed font-light">
          From one classroom in 1999 to 3 campuses — click any branch to explore.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-10 items-start">

        <div className="flex flex-col">
          <div className={`flex items-center gap-2 mb-8 text-[11px] text-[#b0aba3] font-medium tracking-widest uppercase transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
            <div className="w-4 h-px bg-[#D94B1F]" />
            Expansion Timeline
          </div>
          {branches.map((b, i) => (
            <TimelineNode key={i} branch={b} index={i} isActive={active === i}
              isLast={i === branches.length - 1} onClick={() => setActive(i)} visible={visible} />
          ))}
          <div className={`ml-9 mt-2 text-[11px] text-[#888580] font-light transition-all duration-700 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            <span className="text-[#1a1a18] font-medium">1999 → 2019</span>
            &ensp;·&ensp;3 campuses&ensp;·&ensp;23,500+ students
          </div>
        </div>

        {/* Map */}
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-300 lg:h-[520px] aspect-square lg:aspect-auto ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <BranchMap branches={branches} active={active} onPin={setActive} />
        </div>

      </div>
    </section>
  );
}

export default BranchesSection;