import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Technologies } from '@/components/sections/Technologies';
import { Services } from '@/components/sections/Services';
import { Differentials } from '@/components/sections/Differentials';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Services />
        <Differentials />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
