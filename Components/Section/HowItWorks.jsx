"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Upload Floor Plan",
    description: "Upload PDF, CAD or images. We convert it into a 3D digital twin instantly.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Architectural floor plan",
  },
  {
    number: "02",
    title: "Enter Your Space",
    description: "Walk through your future home in an immersive 3D metaverse.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Luxury living room interior",
  },
  {
    number: "03",
    title: "Design Through Play",
    description: "Drag, drop & customize thousands of real products, finishes & layouts.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Modern interior design",
  },
  {
    number: "04",
    title: "AI Optimizes in Real-Time",
    description: "IDDA calculates costs, BOM, BOQ & suggests better alternatives instantly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Data dashboard analytics",
  },
  {
    number: "05",
    title: "Manufacturing Ready",
    description: "Get production drawings, cut lists, CNC files & assembly instructions automatically.",
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Manufacturing technical drawings",
  },
  {
    number: "06",
    title: "Order & Execute",
    description: "Add entire home to cart, confirm & we take care of the rest—on time, with transparency.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Beautiful finished home interior",
  },
];

function useInView(threshold = 0.1) {
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

function StepCard({ step, index, inView }) {
  return (
    <div
      className={`group relative bg-[#f5f0e8] hover:bg-white flex flex-col overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
    >
      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={step.image}
          alt={step.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

        {/* Number badge */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#1a0f0a] flex items-center justify-center shadow-md">
          <span className="text-[10px] font-black tracking-wider text-[#c9a84c]">
            {step.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <h3 className="text-[14px] font-bold text-[#8b1a1a] leading-snug group-hover:text-[#6b1010] transition-colors duration-200">
          {step.title}
        </h3>
        <p className="text-[12px] text-[#4a3728]/80 leading-relaxed flex-1">
          {step.description}
        </p>

        {/* Arrow */}
        <div className="flex justify-end pt-2 mt-auto">
          <span className="text-[#c9a84c] text-base group-hover:translate-x-1 transition-transform duration-200 inline-block">
            →
          </span>
        </div>
      </div>

      {/* Bottom red line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8b1a1a] to-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

export default function HowItWorks() {
  const [headingRef, headingInView] = useInView(0.3);
  const [gridRef, gridInView] = useInView(0.05);

  return (
    <section className="relative bg-[#ede8df] py-20 lg:py-28 overflow-hidden">

      {/* Subtle warm texture overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8e0d0] via-[#ede8df] to-[#e5ddd0]" />
        {/* Very faint top/bottom dark fade to blend with dark sections */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0e0b0b]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0807]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
            How Spacefold Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a0f0a] leading-tight tracking-tight">
            From Floor Plan to Finished Home.{" "}
            <span className="text-[#8b1a1a]">Seamlessly.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
        >
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} inView={gridInView} />
          ))}
        </div>

      </div>
    </section>
  );
}