"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  {
    title: "Interior Designer",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 22L10 10L16 16L19 10L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Cost Consultant",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="4" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 13C9 11.343 10.343 10 12 10H13C14.657 10 16 11.343 16 13C16 14.657 14.657 16 13 16H12C10.343 16 9 17.343 9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 8V10M13 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Quantity Surveyor",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="5" y="3" width="16" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 8H17M9 12H17M9 16H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Procurement Planner",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 6H6L9 17H20L22 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="21" r="1.5" fill="currentColor" />
        <circle cx="19" cy="21" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Manufacturing Engineer",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 4V7M13 19V22M4 13H7M19 13H22M6.34 6.34L8.46 8.46M17.54 17.54L19.66 19.66M6.34 19.66L8.46 17.54M17.54 8.46L19.66 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Project Coordinator",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="6" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 6V4M17 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 11H22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 15L11 17L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
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

export default function IDDA() {
  const [sectionRef, inView] = useInView(0.1);
  const orbRef = useRef(null);

  // Slow continuous rotation on the orb rings
  useEffect(() => {
    let frame;
    let angle = 0;
    const animate = () => {
      angle += 0.2;
      if (orbRef.current) {
        const ring1 = orbRef.current.querySelector("#ring1");
        const ring2 = orbRef.current.querySelector("#ring2");
        if (ring1) ring1.style.transform = `rotate(${angle}deg)`;
        if (ring2) ring2.style.transform = `rotate(${-angle * 0.7}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0e0b0b] flex flex-col justify-center py-24 lg:py-0 overflow-hidden"
    >
      {/* Rich background — deep red left bleed */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#1a0808]/80 to-transparent" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#8b1a1a]/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-[#c9a84c]/8 rounded-full blur-[120px]" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">

          {/* ── LEFT: IDDA Orb ── */}
          <div
            className={`flex flex-col items-center lg:items-start gap-10 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Orb container */}
            <div
              ref={orbRef}
              className="relative w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b1a1a]/30 to-[#c9a84c]/10 blur-2xl" />

              {/* Rotating rings */}
              <div
                id="ring1"
                className="absolute inset-4 rounded-full border border-[#c9a84c]/20"
                style={{ transformOrigin: "center" }}
              />
              <div
                id="ring2"
                className="absolute inset-8 rounded-full border border-[#8b1a1a]/30"
                style={{ transformOrigin: "center" }}
              />

              {/* Orbit dots */}
              <div className="absolute inset-0 rounded-full">
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#c9a84c]/50"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateX(100px) translateY(-50%)`,
                    }}
                  />
                ))}
              </div>

              {/* Core orb */}
              <div className="relative z-10 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-[#8b1a1a] via-[#6b1414] to-[#3d0c0c] flex flex-col items-center justify-center shadow-2xl shadow-[#8b1a1a]/60 border border-[#c9a84c]/20">
                {/* Inner glow */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#c9a84c]/10 to-transparent" />
                <span className="relative text-xl lg:text-2xl font-black tracking-widest text-white">
                  IDDA
                </span>
                <span className="relative text-[8px] tracking-[0.2em] text-[#c9a84c]/70 uppercase mt-0.5">
                  AI Assistant
                </span>
                {/* Pulse rings */}
                <span className="absolute inset-0 rounded-full border border-[#c9a84c]/20 animate-ping" style={{ animationDuration: "3s" }} />
                <span className="absolute -inset-4 rounded-full border border-[#c9a84c]/10 animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
              </div>
            </div>

            {/* Tagline below orb */}
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#c9a84c]/60 text-center lg:text-left">
              Powered by IDDA
            </p>
          </div>

          {/* ── RIGHT: Content ── */}
          <div
            className={`flex flex-col gap-10 transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl lg:text-5xl xl:text-[3.2rem] font-extrabold leading-[1.1] text-white tracking-tight">
                Your AI Design Assistant,{" "}
                <span className="text-[#c9a84c]">Cost Consultant</span>{" "}
                &amp; Strategist
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                IDDA works like an entire team of experts — on your fingertips.
                It learns, analyzes and optimizes every decision to give you the
                best design, quality and value — every single time.
              </p>
            </div>

            {/* Role grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {ROLES.map((role, i) => (
                <div
                  key={role.title}
                  className={`group flex flex-col items-center text-center gap-3 p-5 border border-white/8 bg-[#130f0f] hover:border-[#c9a84c]/40 hover:bg-[#1a1410] transition-all duration-300 cursor-default ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: inView ? `${300 + i * 80}ms` : "0ms" }}
                >
                  <div className="text-[#c9a84c]/70 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {role.icon}
                  </div>
                  <p className="text-[11px] font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 leading-snug">
                    {role.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom statement */}
            <div className="flex items-start gap-4 pt-2 border-t border-white/10">
              <div className="w-1 h-12 bg-gradient-to-b from-[#c9a84c] to-[#c9a84c]/10 flex-shrink-0 mt-1" />
              <p className="text-sm text-gray-400 leading-relaxed">
                IDDA learns, analyzes and optimizes every decision to give you
                the{" "}
                <span className="text-white font-semibold">
                  best design, quality and value
                </span>{" "}
                — every single time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}