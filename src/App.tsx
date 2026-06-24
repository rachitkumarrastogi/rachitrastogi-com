import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { JourneyMap } from "./components/JourneyMap";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Expertise } from "./components/Expertise";
import { CareerSnapshot } from "./components/CareerSnapshot";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
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
