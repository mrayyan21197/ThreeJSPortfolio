import React, { Suspense, lazy } from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import Loader from "./components/Loader";

// Lazy load components for better performance
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import('./sections/Footer'));

const App = () => {
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