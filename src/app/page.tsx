import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MissionVision } from "@/components/sections/MissionVision";
import { Values } from "@/components/sections/Values";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Activities } from "@/components/sections/Activities";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Impact } from "@/components/sections/Impact";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Values />
        <Problem />
        <Solution />
        <Activities />
        <HowItWorks />
        <Impact />
        <Gallery />
        <Team />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
