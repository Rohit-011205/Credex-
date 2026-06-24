"use client";

import { useEffect, useRef } from "react";

const BRANDS = [
  { name: "Merino Laminates", style: "font-black tracking-widest text-xs" },
  { name: "Häfele", style: "font-bold tracking-wider text-sm italic" },
  { name: "CenturyPly", style: "font-black tracking-widest text-xs" },
  { name: "ecco", style: "font-black tracking-widest text-base lowercase" },
  { name: "Philips hue", style: "font-semibold tracking-wide text-xs" },
];

const PROCESS_STEPS = [
  { number: "01", label: "2D Floor Plan Upload" },
  { number: "02", label: "3D Digital Twin Generated" },
  { number: "03", label: "Design in Metaverse" },
  { number: "04", label: "Real-time Cost Optimization" },
  { number: "05", label: "Manufacturing Ready" },
  { number: "06", label: "Execute & Enjoy" },
];

export default function Hero() {
  const heroRef = useRef(null);

  // Subtle parallax on mouse move for the right panel
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 8;
      const y = (clientY / height - 0.5) * 8;
      const panel = hero.querySelector("#hero-right-panel");
      if (panel) {
        panel.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
      }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#0e0b0b] overflow-hidden flex flex-col"
    >
      {/* Background texture / gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-left warm glow */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#8b1a1a]/20 rounded-full blur-[120px]" />
        {/* Bottom-right gold glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c9a84c]/10 rounded-full blur-[100px]" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full flex-1 flex flex-col justify-center pt-24 pb-0 lg:pt-28">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-7">

            {/* Eyebrow */}
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c9a84c]">
              Powered by iDecorwala
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-extrabold leading-[1.08] tracking-tight text-white">
              The Operating
              <br />
              System for
              <br />
              <span className="text-[#c9a84c]">Living Spaces</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm lg:text-[15px] text-gray-400 leading-relaxed max-w-md">
              Spacefold is the world's first AI-powered spatial commerce platform
              that lets anyone design, visualize, optimize, manufacture and execute
              their dream home — all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-1">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-[#8b1a1a] hover:bg-[#a02020] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 transition-colors duration-200"
              >
                Experience Spacefold
                <span className="text-sm" aria-hidden="true">→</span>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#c9a84c]/60 text-white hover:text-[#c9a84c] text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 transition-all duration-200"
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">▶</span>
                Watch Demo
              </a>
            </div>

            {/* Trusted By Brands */}
            <div className="mt-2 pt-6 border-t border-white/10">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
                Trusted by Leading Brands
              </p>
              <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                {BRANDS.map((brand) => (
                  <span
                    key={brand.name}
                    className={`${brand.style} text-white/60 hover:text-[#c9a84c] transition-colors duration-200 cursor-default uppercase`}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div
            id="hero-right-panel"
            className="flex flex-col gap-4 transition-transform duration-200 ease-out"
          >
            {/* 3D Visual Space Card */}
            <div className="relative border border-[#c9a84c]/25 overflow-hidden aspect-[4/3]">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c9a84c]/60 z-20" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c9a84c]/60 z-20" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c9a84c]/60 z-20" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c9a84c]/60 z-20" />

              {/* Background room image */}
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=80"
                alt="Luxury interior room"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark overlay so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b0b]/90 via-[#0e0b0b]/40 to-[#0e0b0b]/20 z-10" />

              {/* 3D cube icon + label */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="text-[#c9a84c] opacity-90 drop-shadow-lg"
                >
                  <path
                    d="M24 4L44 15V33L24 44L4 33V15L24 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M24 4L24 44M4 15L44 15M4 33L44 33"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />
                </svg>
                <div className="text-center">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#c9a84c] drop-shadow">
                    3D Scroll Experience
                  </p>
                  <p className="text-[9px] tracking-widest text-white/60 mt-1 uppercase">
                    ( 3D Visual Space )
                  </p>
                </div>
              </div>

              {/* Animated scan line */}
              <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent z-20 animate-[scanline_4s_ease-in-out_infinite]" />
            </div>

            {/* IDDA Card */}
            <div className="bg-[#111]/80 border border-[#c9a84c]/20 px-5 py-4 flex items-center gap-4">
              {/* IDDA orb */}
              <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8b1a1a] to-[#c9a84c] flex items-center justify-center shadow-lg shadow-[#8b1a1a]/50">
                <span className="text-[10px] font-black tracking-wider text-white">IDDA</span>
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full border border-[#c9a84c]/40 animate-ping opacity-30" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9a84c]">
                  IDDA – iDecorwala
                </p>
                <p className="text-[10px] tracking-widest uppercase text-white/50 mt-0.5">
                  Digital Design Assistant
                </p>
              </div>
              {/* Sparkle icon */}
              <div className="ml-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#c9a84c]/60">
                  <path d="M12 2L13.5 9H21L15 13.5L17 21L12 17L7 21L9 13.5L3 9H10.5L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── PROCESS STEPS STRIP ── */}
        <div className="mt-12 lg:mt-16 border-t border-white/10 pt-8 pb-10">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 lg:gap-0 lg:flex lg:items-start lg:justify-between">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-2 relative">
                {/* Connector line (hidden on mobile) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-3 left-[calc(50%+18px)] right-[calc(-50%+18px)] h-px bg-gradient-to-r from-[#c9a84c]/40 to-[#c9a84c]/10" />
                )}
                {/* Icon circle */}
                <div className="w-8 h-8 rounded-full border border-[#c9a84c]/40 flex items-center justify-center bg-[#1a1410] relative z-10">
                  <span className="text-[9px] font-bold text-[#c9a84c]">{step.number}</span>
                </div>
                <p className="text-[10px] text-gray-400 leading-tight max-w-[80px]">{step.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scanline keyframe */}
      <style jsx>{`
        @keyframes scanline {
          0%   { top: 10%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}