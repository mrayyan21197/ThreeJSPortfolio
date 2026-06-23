import React, { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Experiences = lazy(() => import("./sections/Experiences"));
const GitHub = lazy(() => import("./sections/GitHub"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const SectionLoader = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 0",
      background: "#0a0a0a",
    }}
  >
    <span
      style={{
        color: "#22d472",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.1em",
      }}
    >
      loading...
    </span>
  </div>
);

const App = () => {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TechStack />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Experiences />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <GitHub />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
