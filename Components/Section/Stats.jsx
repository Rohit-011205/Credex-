"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 90,
    suffix: "%",
    label: "Faster Design Creation",
    color: "text-[#c9a84c]",
  },
  {
    value: 25,
    suffix: "%",
    label: "Average Cost Optimization",
    color: "text-[#c9a84c]",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Products & Materials at Your Fingertips",
    color: "text-[#c9a84c]",
  },
  {
    value: 100,
    suffix: "%",
    label: "Manufacturing Ready Outputs",
    color: "text-[#c9a84c]",
  },
  {
    value: 1,
    suffix: "",
    label: "Platform · Design to Execution End-to-End",
    color: "text-white",
    prefix: "",
    highlight: "1 Platform",
  },
];

function formatNumber(val) {
  if (val >= 10000) return val.toLocaleString();
  return val;
}

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, index, animate }) {
  const count = useCountUp(stat.value, 1600 + index * 100, animate);
  const display = animate ? formatNumber(count) : 0;

  return (
    <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left px-6 py-8 lg:py-10 group">
      {/* Vertical divider — hidden for last item on desktop */}
      <div className="hidden lg:block absolute right-0 top-8 bottom-8 w-px bg-white/10 last:hidden" />

      {/* Number */}
      <div className="flex items-end gap-1 leading-none mb-3">
        {stat.prefix && (
          <span className="text-4xl xl:text-5xl font-black text-[#c9a84c]">
            {stat.prefix}
          </span>
        )}
        <span
          className={`text-5xl xl:text-6xl font-black tabular-nums tracking-tight ${stat.color}`}
        >
          {display}
        </span>
        <span
          className={`text-3xl xl:text-4xl font-black mb-1 ${stat.color}`}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-[11px] xl:text-xs text-gray-400 leading-relaxed max-w-[140px] font-medium tracking-wide">
        {stat.label}
      </p>

      {/* Hover gold underline */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/40 transition-all duration-300" />
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0807] border-t border-b border-white/10 overflow-hidden"
    >
      {/* Subtle gold glow center */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-32 bg-[#c9a84c]/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-white/10">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}