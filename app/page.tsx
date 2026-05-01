import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import AIAutomation from '@/components/AIAutomation';
import Experience from '@/components/Experience';
import Upwork from '@/components/Upwork';
import Achievements from '@/components/Achievements';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIAutomation />
      <Experience />
      <Upwork />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
