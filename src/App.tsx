import React, { useState, useEffect } from 'react';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Demand from './components/Demand';
import PriceTimeline from './components/Pracing';
import { Menu, X } from 'lucide-react';

// Navigation component
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle section tracking
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });

      // Handle navbar background
      const scrolled = window.scrollY > 400;
      setHasScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white backdrop-blur-scm  shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-[1240px] mx-auto w-[90%] py-[27px] flex items-center justify-between relative'>
        <a href="">
          <img src="/logo.svg" width={55} alt="" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:block max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              {['colibri', 'pricing', 'Our process', 'portfolio',  'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-3 py-2 rounded-md text-[20px] transition-colors font-lalezar ${
                    activeSection === section
                      ? 'cf-gradient-span'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-secondary hover:text-primary p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md mt-2 py-4 lg:hidden">
            <div className="flex flex-col items-center space-y-4">
              {['colibri', 'pricing', 'Our process', 'portfolio',  'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-3 py-2 rounded-md text-[20px] transition-colors font-lalezar w-full text-center ${
                    activeSection === section
                      ? 'cf-gradient-span'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Demand Component */}
        <div className="hidden lg:block">
          <Demand/>
        </div>
      </div>
    </nav>
  );
};

// Main App component
function App() {

  return (
    <div className="App">
      <Navbar />
      <section id="colibri">
        <Hero />
      </section>
      {/* <section id="presentation">
        <Presentation />
      </section> */}
      <section id="pricing">
        <PriceTimeline/>
      </section>
      <section id="Our process">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
  
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;