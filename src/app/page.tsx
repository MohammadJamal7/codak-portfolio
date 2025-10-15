import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="courses">
          <Testimonials />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}
