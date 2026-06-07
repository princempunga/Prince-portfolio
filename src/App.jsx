import React, { useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import Toast from './components/Toast';

const SECTIONS = ['home', 'about', 'services', 'portfolio', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prevSection, setPrevSection] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [toast, setToast] = useState(null); // { message, type: 'success'|'error'|'loading' }

  // Initialise EmailJS once
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // ----- Scroll Reveal Observer -----
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // observer.unobserve(entry.target); // Optional: if we only want it to animate once
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    // We wait briefly to ensure all components are fully painted
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-fade, .animate-card');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // ----- Mobile: highlight nav on scroll -----
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1200) return;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ----- Desktop nav click -----
  const navigateTo = useCallback((sectionId) => {
    if (window.innerWidth < 1200) {
      // Mobile: smooth-scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setIsMobileNavOpen(false);
    } else {
      // Desktop: overlay switching with back-section animation
      setPrevSection(activeSection);
      setActiveSection(sectionId);
    }
  }, [activeSection]);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  // Toast helpers
  const showToast = (message, type) => setToast({ message, type });
  const hideToast = () => setToast(null);

  return (
    <div className="main-container">
      <Sidebar
        activeSection={activeSection}
        isMobileNavOpen={isMobileNavOpen}
        toggleMobileNav={toggleMobileNav}
        navigateTo={navigateTo}
      />

      <div className={`main-content ${isMobileNavOpen ? 'open' : ''}`}>
        <Home        activeSection={activeSection} prevSection={prevSection} />
        <About       activeSection={activeSection} prevSection={prevSection} />
        <Services    activeSection={activeSection} prevSection={prevSection} />
        <Portfolio   activeSection={activeSection} prevSection={prevSection} />
        <Contact     activeSection={activeSection} prevSection={prevSection}
                     showToast={showToast} navigateTo={navigateTo} />
      </div>

      <ThemeSwitcher />
      {toast && <Toast message={toast.message} type={toast.type} onHide={hideToast} />}
    </div>
  );
}

export default App;
