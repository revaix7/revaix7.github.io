import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
