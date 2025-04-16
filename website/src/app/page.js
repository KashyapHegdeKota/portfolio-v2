import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero /> {/* Renders the About/Introduction section */}
      <Projects /> {/* Renders the Projects section */}
      <Contact /> {/* Renders the Contact section */}
    </>
  );
}
