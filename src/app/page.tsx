import Nav from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedGridPattern from "@/components/ui/Animated-beam";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="bg-gradient-to-br md:from-gray-900 md:via-gray-800 from-gray-800 via-gray-900 to-gray-950">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
