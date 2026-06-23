import { motion } from "motion/react";

const techPills = ["React", "Node.js", ".NET", "MongoDB", "Azure"];

const TerminalBlock = () => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    style={{ filter: "drop-shadow(0 0 40px rgba(34,212,114,0.15))" }}
  >
    <div
      style={{
        background: "#121212",
        border: "1px solid #212121",
        borderRadius: "8px",
        padding: "20px 24px",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "13px",
        lineHeight: "1.9",
      }}
    >
      <span style={{ color: "#6b6b6b" }}>{"// building the future"}</span>
      <br />
      <span style={{ color: "#22d472" }}>const</span>{" "}
      <span style={{ color: "#f2f2f2" }}>rayyan</span>{" "}
      <span style={{ color: "#f2f2f2" }}>{"= {"}</span>
      <br />
      <span style={{ color: "#f2f2f2" }}>{"  role: ["}</span>
      <span style={{ color: "#22d472" }}>"Full-Stack Dev"</span>
      <span style={{ color: "#f2f2f2" }}>,{" "}</span>
      <span style={{ color: "#22d472" }}>"Data Engineer"</span>
      <span style={{ color: "#f2f2f2" }}>],</span>
      <br />
      <span style={{ color: "#f2f2f2" }}>{"  stack: {"}</span>
      <br />
      <span style={{ color: "#f2f2f2" }}>{"    web: ["}</span>
      <span style={{ color: "#22d472" }}>"React"</span>
      <span style={{ color: "#f2f2f2" }}>, </span>
      <span style={{ color: "#22d472" }}>".NET"</span>
      <span style={{ color: "#f2f2f2" }}>, </span>
      <span style={{ color: "#22d472" }}>"Node"</span>
      <span style={{ color: "#f2f2f2" }}>],</span>
      <br />
      <span style={{ color: "#f2f2f2" }}>{"    data: ["}</span>
      <span style={{ color: "#22d472" }}>"Azure"</span>
      <span style={{ color: "#f2f2f2" }}>, </span>
      <span style={{ color: "#22d472" }}>"Python"</span>
      <span style={{ color: "#f2f2f2" }}>, </span>
      <span style={{ color: "#22d472" }}>"Spark"</span>
      <span style={{ color: "#f2f2f2" }}>],</span>
      <br />
      <span style={{ color: "#f2f2f2" }}>{"    ai: ["}</span>
      <span style={{ color: "#22d472" }}>"OpenAI"</span>
      <span style={{ color: "#f2f2f2" }}>, </span>
      <span style={{ color: "#22d472" }}>"n8n"</span>
      <span style={{ color: "#f2f2f2" }}>],</span>
      <br />
      <span style={{ color: "#f2f2f2" }}>{"  },"}</span>
      <br />
      <span style={{ color: "#f2f2f2" }}>{"  open: "}</span>
      <span style={{ color: "#22d472" }}>true</span>
      <br />
      <span style={{ color: "#f2f2f2" }}>{"}"}</span>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#0a0a0a",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      <div
        className="w-full"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: content */}
          <div className="flex flex-col gap-7">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span
                className="text-green text-[11px] font-mono tracking-widest"
              >
                AVAILABLE FOR OPPORTUNITIES · 2026
              </span>
              <span className="animate-blink text-green font-mono leading-none">|</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(48px, 6.5vw, 84px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
                color: "#f2f2f2",
              }}
            >
              Building apps
              <br />
              people actually{" "}
              <span style={{ color: "#22d472" }}>use.</span>
              <span className="animate-blink text-green ml-1 font-mono">|</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                color: "#6b6b6b",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "400px",
              }}
            >
              Full-stack developer specialising in React, Node.js, and .NET.
              Fast, accessible, and built to scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <button
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "#22d472",
                  color: "#0a0a0a",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "12px 24px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  fontFamily: "'Sora', sans-serif",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#18a355")}
                onMouseLeave={(e) => (e.target.style.background = "#22d472")}
              >
                View projects →
              </button>
              <a
                href="/resume/MuhammadRayyan-FullStack.pdf"
                download="MuhammadRayyan-FullStack.pdf"
                style={{
                  color: "#f2f2f2",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "12px 24px",
                  borderRadius: "6px",
                  border: "1px solid #212121",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                  fontFamily: "'Sora', sans-serif",
                }}
                onMouseEnter={(e) => (e.target.style.borderColor = "#22d472")}
                onMouseLeave={(e) => (e.target.style.borderColor = "#212121")}
              >
                Download CV
              </a>
            </motion.div>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {techPills.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: "#121212",
                    border: "1px solid #212121",
                    color: "#22d472",
                    fontSize: "10px",
                    fontFamily: "'JetBrains Mono', monospace",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal code block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[85%] sm:max-w-sm lg:max-w-none">
              <TerminalBlock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
