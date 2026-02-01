import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { OutcomeMetrics } from "@/components/sections/OutcomeMetrics";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { HowIWork } from "@/components/sections/HowIWork";
import { IdealFit } from "@/components/sections/IdealFit";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SHOW_PROCESS_SECTION } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <OutcomeMetrics />
        <CaseStudies />
        <Services />
        {SHOW_PROCESS_SECTION && <HowIWork />}
        <About />
        <IdealFit />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
