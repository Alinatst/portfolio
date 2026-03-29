import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SectionDots from '@/components/ui/SectionDots';
import FallingLeaves from "@/components/ui/FallingLeaves";


export default function Home() {
  return (
    <main className="relative">
      <FallingLeaves />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <SectionDots />
      <ScrollToTop />
    </main>
  );
}