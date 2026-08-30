import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { JourneyMap } from "./components/journey/JourneyMap";
import { ProjectShowcase } from "./components/projects/ProjectShowcase";
import { Expertise } from "./components/sections/Expertise";
import { CareerSnapshot } from "./components/sections/CareerSnapshot";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-[var(--bg)]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <JourneyMap />
        <ProjectShowcase />
        <Expertise />
        <CareerSnapshot />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
