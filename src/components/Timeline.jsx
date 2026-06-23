import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const cardStyle = {
  background: "#121212",
  border: "1px solid #212121",
  borderRadius: "12px",
  padding: "24px",
};

const techChip = (tech) => (
  <span
    key={tech}
    style={{
      background: "rgba(34,212,114,0.08)",
      border: "1px solid rgba(34,212,114,0.2)",
      color: "#22d472",
      fontSize: "10px",
      fontFamily: "'JetBrains Mono', monospace",
      padding: "3px 10px",
      borderRadius: "4px",
    }}
  >
    {tech}
  </span>
);

const PromotedEntry = ({ data }) => (
  <div style={{ marginTop: "20px", paddingLeft: "24px", position: "relative" }}>
    {/* Connector line */}
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        bottom: "0",
        width: "1px",
        background: "linear-gradient(to bottom, rgba(34,212,114,0.4), transparent)",
      }}
    />

    {/* Label */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "12px",
      }}
    >
      <span
        style={{
          color: "#6b6b6b",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        ↑ Promoted from
      </span>
    </div>

    {/* Sub-card */}
    <div
      style={{
        background: "#0a0a0a",
        border: "1px solid #212121",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      {/* Role + year */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
        <span
          style={{
            color: "#f2f2f2",
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "-0.01em",
          }}
        >
          {data.role}
        </span>
        <span
          style={{
            color: "#6b6b6b",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
          }}
        >
          {data.year}
        </span>
      </div>

      <p
        style={{
          color: "#6b6b6b",
          fontSize: "13px",
          lineHeight: 1.75,
          marginBottom: "16px",
        }}
      >
        {data.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {data.technologies?.map(techChip)}
      </div>
    </div>
  </div>
);

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
    layoutEffect: false,
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <div
      className="max-sm:px-6"
      style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}
      ref={containerRef}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(36px, 5vw, 60px)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: "#f2f2f2",
          marginBottom: "48px",
        }}
      >
        Work Experience.
      </motion.h2>

      <div ref={ref} style={{ position: "relative", paddingBottom: "80px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start"
            style={{ paddingTop: index === 0 ? "12px" : "56px", gap: "48px" }}
          >
            {/* Left sticky: date/role — desktop only */}
            <div
              className="sticky hidden md:flex flex-col"
              style={{ top: "140px", width: "200px", minWidth: "200px", zIndex: 40 }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-22px",
                  top: "4px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#22d472",
                  boxShadow: "0 0 10px rgba(34,212,114,0.5)",
                }}
              />
              <div style={{ paddingLeft: "8px" }}>
                <div
                  style={{
                    color: "#6b6b6b",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    marginBottom: "6px",
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    color: "#f2f2f2",
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    letterSpacing: "-0.02em",
                    marginBottom: "4px",
                  }}
                >
                  {item.role}
                </div>
                <div
                  style={{
                    color: "#22d472",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                  }}
                >
                  {item.company}
                </div>
                {item.location && (
                  <div
                    style={{
                      color: "#6b6b6b",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      marginTop: "2px",
                    }}
                  >
                    {item.location}
                  </div>
                )}
              </div>
            </div>

            {/* Right: content card */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Mobile header */}
              <div className="md:hidden" style={{ marginBottom: "16px" }}>
                <div style={{ color: "#6b6b6b", fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", marginBottom: "4px" }}>
                  {item.year}
                </div>
                <div style={{ color: "#f2f2f2", fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.02em" }}>
                  {item.role}
                </div>
                <div style={{ color: "#22d472", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px" }}>
                  {item.company}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={cardStyle}
              >
                <p style={{ color: "#6b6b6b", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
                  {item.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {item.technologies?.map(techChip)}
                </div>
              </motion.div>

              {/* Promoted-from sub-entry */}
              {item.promotedFrom && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <PromotedEntry data={item.promotedFrom} />
                </motion.div>
              )}
            </div>
          </div>
        ))}

        {/* Timeline vertical line */}
        <div
          style={{
            position: "absolute",
            left: "1px",
            top: 0,
            width: "1px",
            height: `${height}px`,
            background: "#212121",
          }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, #22d472, rgba(34,212,114,0.1))",
              width: "1px",
              borderRadius: "1px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
