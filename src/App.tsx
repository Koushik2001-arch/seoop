import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
