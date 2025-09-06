import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Loader from "./components/Loader";

// Lazy load components for better performance
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import('./sections/Footer'));

const App = () => {
  useEffect(() => {
    // Enhanced smooth scrolling with performance optimizations
    const smoothScrollTo = (target, duration = 1000) => {
      const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
      if (!targetElement) return;

      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.offsetTop - 80; // Account for navbar height
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutCubic = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      };

      requestAnimationFrame(animation);
    };

    // Add smooth scrolling to all anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(target);
      }
    };

    // Add event listeners
    document.addEventListener('click', handleSmoothScroll);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Experiences />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Footer/>
      </Suspense>
    </div>
  );
};

export default React.memo(App); 