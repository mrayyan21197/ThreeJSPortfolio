import { motion } from "motion/react";
import { Star, Github } from "lucide-react";

const STATS = [
  { number: "20", label: "Stars Earned" },
  { number: "12", label: "Public Repos" },
  { number: "100", label: "Contributions This Year" },
];

const REPOS = [
  {
    name: "buyonegetone-platform",
    lang: "JavaScript",
    langColor: "#f7df1e",
    stars: 8,
    description:
      "Full-stack BOGO deals platform with analytics, admin dashboard, and business registration.",
  },
  {
    name: "hr-screening-system",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 5,
    description:
      "AI-powered HR system with n8n workflows, automated scoring, and Google API integration.",
  },
  {
    name: "portfolio",
    lang: "JavaScript",
    langColor: "#f7df1e",
    stars: 3,
    description:
      "Personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.",
  },
];

const GitHub = () => {
  return (
    <section style={{ padding: "60px 0", background: "#121212" }}>
      <div
        className="max-sm:px-6 text-center"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <Github style={{ width: "20px", height: "20px", color: "#22d472" }} />
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#f2f2f2",
            }}
          >
            Open source.
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glow-card"
              style={{
                background: "#1a1a1a",
                border: "1px solid #212121",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "40px",
                  fontWeight: 800,
                  color: "#22d472",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  color: "#6b6b6b",
                  fontSize: "10px",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Repo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {REPOS.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/mrayyan21197/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glow-card flex flex-col gap-3"
              style={{
                background: "#0a0a0a",
                border: "1px solid #212121",
                borderRadius: "12px",
                padding: "20px",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "#f2f2f2",
                  fontSize: "13px",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {repo.name}
              </span>
              <p
                style={{
                  color: "#6b6b6b",
                  fontSize: "12px",
                  lineHeight: 1.6,
                  flexGrow: 1,
                }}
              >
                {repo.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: repo.langColor,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      color: "#6b6b6b",
                      fontSize: "10px",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {repo.lang}
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <Star style={{ width: "12px", height: "12px", color: "#6b6b6b" }} />
                  <span
                    style={{
                      color: "#6b6b6b",
                      fontSize: "10px",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {repo.stars}
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHub;
