import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Courses from '@/components/sections/Courses';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <main className="w-full">
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}
