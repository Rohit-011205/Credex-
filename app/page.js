import Image from "next/image";
import Hero from "@/Components/Section/Hero";
import Stats from "@/Components/Section/Stats";
import Comparison from "@/Components/Section/Comparison";
import HowItWorks from "@/Components/Section/HowItWorks";
import IDDA from "@/Components/Section/IDDA";
import Ecosystem from "@/Components/Section/Ecosystem";
import CTA from "@/Components/Section/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Comparison />
      <HowItWorks />
      <IDDA />
      <Ecosystem />
      <CTA />
    </main>
  );
}