import { useRef } from "react";
import { motion, useInView } from "motion/react";

const STATS = [
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Projects Shipped" },
  { number: "3", label: "Internships" },
  { number: "Remote", label: "Friendly" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "96px 0", background: "#0a0a0a" }}
    >
      <div
        className="max-sm:px-6"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#f2f2f2",
                marginBottom: "32px",
              }}
            >
              About me.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <p style={{ color: "#6b6b6b", fontSize: "14px", lineHeight: 1.8 }}>
                I'm Rayyan — a full-stack developer and data engineer from Pakistan. I currently
                work at Folio3 where I design event-driven ETL pipelines, build serverless data
                workflows on Microsoft Azure, and contribute to AI/ML products powered by OpenAI
                and Gemini APIs. I move comfortably between a React frontend and an Azure Data
                Factory pipeline — whatever the problem needs.
              </p>
              <p style={{ color: "#6b6b6b", fontSize: "14px", lineHeight: 1.8 }}>
                On the web side, I've shipped production applications across the full stack using
                React, Node.js, .NET Core, and MongoDB. On the data side, I work with distributed
                processing via Apache Spark and Databricks, cloud orchestration on Azure, and
                automation pipelines using n8n and make.com. I care as much about clean data
                models as I do about clean UI — precision at every layer.
              </p>
              <p style={{ color: "#6b6b6b", fontSize: "14px", lineHeight: 1.8 }}>
                I've built everything from BOGO deal platforms and AI-powered HR systems to
                real-time medical imaging pipelines. If it involves moving data, building
                interfaces, or wiring up intelligent workflows — I'm in.
              </p>
            </motion.div>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2"
                  style={{
                    background: "#121212",
                    border: "1px solid #212121",
                    borderRadius: "8px",
                    padding: "8px 14px",
                  }}
                >
                  <span
                    style={{
                      color: "#22d472",
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    style={{
                      color: "#6b6b6b",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="glow-card w-full overflow-hidden"
              style={{
                maxWidth: "360px",
                border: "1px solid #212121",
                borderRadius: "12px",
                background: "#121212",
              }}
            >
              <img
                src="assets/coding-pov.png"
                alt="Rayyan at his desk"
                className="w-full object-cover"
                style={{ aspectRatio: "4/5", display: "block" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
