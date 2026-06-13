import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        {/* <TrustedBy /> */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CaseStudies />
        {/* <Certifications /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
