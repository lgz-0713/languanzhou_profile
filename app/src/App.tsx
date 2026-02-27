import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Research } from './sections/Research';
import { Publications } from './sections/Publications';
import { Experience } from './sections/Experience';
import { Awards } from './sections/Awards';
import { Contact } from './sections/Contact';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Publications />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
