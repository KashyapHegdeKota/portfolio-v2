import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Projects />
      <ExperienceTimeline />
      <Contact />
    </>
  );
}
