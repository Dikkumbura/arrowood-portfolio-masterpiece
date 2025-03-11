
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessGrid from "@/components/BusinessGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll to sections when clicking on navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Preload critical resources
  useEffect(() => {
    // Preload fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BusinessGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
