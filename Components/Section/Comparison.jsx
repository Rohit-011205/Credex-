"use client";

import { useEffect, useRef, useState } from "react";

const OLD_WAY = [
  "Multiple vendors & disconnected workflows",
  "Weeks of back & forth for designs",
  "Unclear pricing & hidden markups",
  "Rework, delays & budget overruns",
  "High dependency on designers & contractors",
];

const NEW_WAY = [
  "AI-powered platform for everyone",
  "Instant 3D visualization & real-time pricing",
  "Transparent BOM, BOQ & cost optimization",
  "Manufacturing-ready drawings in minutes",
  "One-click execution with complete control",
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Comparison() {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0e0b0b] py-20 lg:py-28 overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#8b1a1a]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#c9a84c]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* Top layout — headline left, cards right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Headline ── */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c9a84c]">
              An Industry Long Overdue for Change
            </p>

            <h2 className="text-4xl lg:text-5xl xl:text-[3.2rem] font-extrabold leading-[1.1] text-white tracking-tight">
              Fragmented.
              <br />
              Opaque.
              <br />
              Unpredictable.
              <br />
              <span className="text-[#c9a84c]">Until Now.</span>
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              The interior design industry is still stuck in the past —
              slow, unorganized and filled with uncertainty.
            </p>

            {/* Decorative gold rule */}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-12 h-px bg-[#c9a84c]" />
              <div className="w-3 h-px bg-[#c9a84c]/40" />
            </div>
          </div>

          {/* ── RIGHT: Comparison Cards ── */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-4">

            {/* Old Way */}
            <div
              className={`flex-1 bg-[#120d0d] border border-white/10 p-6 flex flex-col gap-5 transition-all duration-700 delay-150 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Card header */}
              <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#8b1a1a]" />
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9a84c]">
                  The Old Way
                </p>
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-4">
                {OLD_WAY.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      inView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: inView ? `${200 + i * 80}ms` : "0ms" }}
                  >
                    {/* X icon */}
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border border-[#8b1a1a]/60 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 1L7 7M7 1L1 7" stroke="#8b1a1a" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <p className="text-[12px] text-gray-400 leading-snug">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow divider — desktop horizontal, hidden on small */}
            <div className="hidden sm:flex flex-col items-center justify-center px-1">
              <div className="w-8 h-8 rounded-full bg-[#8b1a1a] flex items-center justify-center shadow-lg shadow-[#8b1a1a]/40">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Spacefold Way */}
            <div
              className={`flex-1 bg-[#0f1208] border border-[#c9a84c]/25 p-6 flex flex-col gap-5 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Card header */}
              <div className="flex items-center gap-2 pb-4 border-b border-[#c9a84c]/20">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9a84c]">
                  The Spacefold Way
                </p>
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-4">
                {NEW_WAY.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      inView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: inView ? `${350 + i * 80}ms` : "0ms" }}
                  >
                    {/* Check icon */}
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border border-[#c9a84c]/60 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4L3 6L7 2" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <p className="text-[12px] text-gray-300 leading-snug">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}