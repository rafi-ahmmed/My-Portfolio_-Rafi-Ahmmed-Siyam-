import About from '@/components/sections/About-Section/About';
import Contact from '@/components/sections/Contact-Section/Contact';
import Home from '@/components/sections/Home-Section/Home';
import Projects from '@/components/sections/Projects-Section/Projects';
import Skills from '@/components/sections/Skills-Section/Skills';

export default function HomePage() {
   return (
      <>
         <Home />
         <About />
         <Skills />
         <Projects />
         <Contact />
      </>
   );
}
