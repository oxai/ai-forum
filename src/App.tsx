import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { NetworkBackground } from '@/components/layout/NetworkBackground';
import { Apply } from '@/components/sections/Apply';
import { Faculty } from '@/components/sections/Faculty';
import { Hero } from '@/components/sections/Hero';
import { Introduction } from '@/components/sections/Introduction';
import { Itinerary } from '@/components/sections/Itinerary';
import { Pillars } from '@/components/sections/Pillars';
import { Program } from '@/components/sections/Program';
import { Registry } from '@/components/sections/Registry';
import { Sponsors } from '@/components/sections/Sponsors';

export default function App() {
  return (
    <div className="bg-rich-black min-h-screen text-white overflow-x-hidden font-mono relative">
      <NetworkBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Sponsors />
        <Introduction />
        <Pillars />
        <Program />
        <Registry />
        <Itinerary />
        <Faculty />
        <Apply />
        <Footer />
      </main>
    </div>
  );
}
