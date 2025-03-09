import Hero from "@/components/ui/hero";
import Projects from "@/components/ui/projects.js";
import Technologies from "@/components/ui/technologies";
import Formation from "@/components/ui/formation";
import AboutMe from "@/components/ui/aboutMe";
import Contact from "@/components/ui/contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <Formation />
        <AboutMe />
        <Contact />
      </main>
    </>
  );
}
