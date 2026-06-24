"use client";

import { useEffect, useRef, useState } from "react";

const AUDIENCES = [
  {
    tag: "For Homeowners",
    description:
      "Design your dream home yourself with complete control and transparency.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M4 14L16 4L28 14V28H20V20H12V28H4V14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "#c9a84c",
  },
  {
    tag: "For Interior Designers",
    description:
      "Get 10X productivity and deliver more projects with AI superpowers.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 28C6 22.477 10.477 18 16 18C21.523 18 26 22.477 26 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 8L24 10L28 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "#c9a84c",
  },
  {
    tag: "For Manufacturers",
    description:
      "Receive accurate, error-free manufacturing data and scale production.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 10V7C10 5.343 11.343 4 13 4H19C20.657 4 22 5.343 22 7V10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 18H28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    accent: "#c9a84c",
  },
  {
    tag: "For Brands & Suppliers",
    description:
      "Showcase your products in immersive experiences and drive demand.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M4 8H28V24H4V8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H28M12 12V24"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
        <circle cx="8" cy="10" r="1" fill="currentColor" />
        <path
          d="M17 17L20 20L26 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    accent: "#c9a84c",
  },
  {
    tag: "For Builders & Developers",
    description:
      "Offer a digital design journey that delights buyers and drives sales.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="12" width="16" height="16" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 16L16 6L28 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 28V20H19V28"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    accent: "#c9a84c",
  },
];

function useInView(threshold = 0.15) {
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

export default function Ecosystem() {
  const [headingRef, headingInView] = useInView(0.3);
  const [cardsRef, cardsInView] = useInView(0.1);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative min-h-screen bg-[#0a0807] flex flex-col justify-center py-24 overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b1a1a]/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c]/6 rounded-full blur-[110px]" />
        {/* Diagonal lines texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
            A Connected Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Built for{" "}
            <span className="text-[#c9a84c]">Everyone</span>{" "}
            in the Value Chain
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3"
        >
          {AUDIENCES.map((audience, i) => (
            <div
              key={audience.tag}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(0)}
              className={`group relative flex flex-col gap-5 p-6 lg:p-7 border cursor-default
                transition-all duration-500 overflow-hidden
                ${activeCard === i
                  ? "border-[#c9a84c]/50 bg-[#1a1208] -translate-y-2 shadow-2xl shadow-[#c9a84c]/10"
                  : "border-white/10 bg-[#110e0e] translate-y-0"
                }
                ${cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{
                transitionDelay: cardsInView ? `${i * 100}ms` : "0ms",
              }}
            >
              {/* Top gold line on active */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transition-opacity duration-300 ${
                  activeCard === i ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center border transition-all duration-300 ${
                  activeCard === i
                    ? "border-[#c9a84c]/50 bg-[#c9a84c]/10 text-[#c9a84c]"
                    : "border-white/10 bg-[#1a1410]/50 text-[#c9a84c]/60"
                }`}
              >
                {audience.icon}
              </div>

              {/* Tag */}
              <div>
                <p
                  className={`text-[10px] font-bold tracking-[0.22em] uppercase mb-2 transition-colors duration-300 ${
                    activeCard === i ? "text-[#c9a84c]" : "text-[#c9a84c]/60"
                  }`}
                >
                  {audience.tag}
                </p>
                <p className="text-[12px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {audience.description}
                </p>
              </div>

              {/* Arrow — appears on hover */}
              <div
                className={`mt-auto transition-all duration-300 ${
                  activeCard === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
              >
                <span className="text-[#c9a84c] text-lg">→</span>
              </div>

              {/* Background glow on active */}
              {activeCard === i && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#c9a84c]/5 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom connector dots */}
        <div
          className={`flex items-center justify-center gap-3 mt-14 transition-all duration-700 delay-500 ${
            cardsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {AUDIENCES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              className={`transition-all duration-300 rounded-full ${
                activeCard === i
                  ? "w-8 h-2 bg-[#c9a84c]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`View ${AUDIENCES[i].tag}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}