"use client";

import { useEffect, useRef, useState } from "react";

const CHECKLIST = [
  "Personalized Live Demo",
  "Explore Real Projects",
  "Understand Cost Benefits",
  "Get All Your Questions Answered",
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function CTA() {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0e0b0b] flex flex-col justify-center overflow-hidden py-24"
    >
      {/* Background — full bleed room image on right half */}
      <div className="pointer-events-none absolute inset-0">
        {/* Room image — right half only */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&auto=format&fit=crop&q=80"
            alt="Luxury living space with large windows"
            className="w-full h-full object-cover"
          />
          {/* Fade left edge into dark bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b0b] via-[#0e0b0b]/60 to-transparent" />
          {/* Fade top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0b0b]/60 via-transparent to-[#0e0b0b]/60" />
        </div>
        {/* Deep red left wash over everything */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#0e0b0b] via-[#0e0b0b]/95 to-transparent" />
        {/* Gold glow top-left */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#8b1a1a]/15 rounded-full blur-[120px]" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        {/* Decorative vertical gold line */}
        <div className="absolute top-0 bottom-0 left-[55%] w-px bg-gradient-to-b from-transparent via-[#c9a84c]/15 to-transparent hidden lg:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Headline ── */}
          <div
            className={`flex flex-col gap-8 transition-all duration-800 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Eyebrow */}
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c9a84c]">
              Ready to Experience the Future?
            </p>

            {/* Main headline */}
            <h2 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-white">
              Your Dream
              <br />
              Home is Just
              <br />
              <span className="text-[#c9a84c]">One Click</span>
              <br />
              Away.
            </h2>

            {/* Gold rule */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-[#c9a84c]" />
              <div className="w-4 h-px bg-[#c9a84c]/30" />
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {CHECKLIST.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: inView ? `${200 + i * 80}ms` : "0ms" }}
                >
                  {/* Check mark */}
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-[#c9a84c]/50 bg-[#c9a84c]/10 flex items-center justify-center">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path
                        d="M1.5 4.5L3.5 6.5L7.5 2.5"
                        stroke="#c9a84c"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: CTA Card ── */}
          <div
            className={`transition-all duration-800 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative border border-[#c9a84c]/25 bg-[#110d0d] p-8 lg:p-12 flex flex-col gap-8">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c9a84c]/60" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a84c]/60" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c9a84c]/60" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c9a84c]/60" />

              {/* Card heading */}
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c9a84c]/70">
                  Take the First Step
                </p>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                  See Spacefold in Action
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mt-1">
                  Book a personalized demo and experience the future of home
                  design — live, with a real project.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4">
                <a
                  href="#book-demo"
                  className="group relative inline-flex items-center justify-between gap-3 bg-[#8b1a1a] hover:bg-[#a02020] text-white px-7 py-4 transition-colors duration-200 overflow-hidden"
                >
                  {/* Shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  <span className="relative text-[11px] font-bold tracking-[0.18em] uppercase">
                    Book a Live Demo
                  </span>
                  <span className="relative text-base" aria-hidden="true">→</span>
                </a>

                <a
                  href="#talk-expert"
                  className="group inline-flex items-center justify-between gap-3 border border-white/20 hover:border-[#c9a84c]/50 bg-transparent hover:bg-[#c9a84c]/5 text-white px-7 py-4 transition-all duration-200"
                >
                  {/* Play icon */}
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full border border-white/30 group-hover:border-[#c9a84c]/60 flex items-center justify-center transition-colors duration-200">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3 2L8 5L3 8V2Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase group-hover:text-[#c9a84c] transition-colors duration-200">
                      Talk to an Expert
                    </span>
                  </span>
                  <span className="text-base text-white/40 group-hover:text-[#c9a84c] transition-colors duration-200" aria-hidden="true">→</span>
                </a>
              </div>

              {/* Trust note */}
              <p className="text-[11px] text-gray-500 text-center border-t border-white/10 pt-6">
                No commitment required · Free consultation · Results in minutes
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}