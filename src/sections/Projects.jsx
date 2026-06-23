import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { myProjects } from "../constants";

const FEATURED_IDS = [1, 2, 3];

const TECH_TAGS = {
  1: "MERN · TAILWIND · ANALYTICS",
  2: "REACT · NODE · N8N · AI",
  3: "ASP.NET · C# · SQL SERVER",
};

const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-80px" }}
    className="glow-card flex flex-col lg:flex-row gap-8"
    style={{
      background: "#121212",
      border: "1px solid #212121",
      borderRadius: "12px",
      padding: "32px",
    }}
  >
    {/* Left: info */}
    <div className="flex-1 flex flex-col gap-4 justify-center min-w-0">
      <span
        style={{
          color: "#22d472",
          fontSize: "10px",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.1em",
        }}
      >
        {TECH_TAGS[project.id] ||
          project.technologies.slice(0, 3).join(" · ").toUpperCase()}
      </span>

      <h3
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "22px",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#f2f2f2",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: "#6b6b6b",
          fontSize: "14px",
          lineHeight: 1.7,
          maxWidth: "480px",
        }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            style={{
              background: "#1a1a1a",
              border: "1px solid #212121",
              color: "#6b6b6b",
              fontSize: "10px",
              fontFamily: "'JetBrains Mono', monospace",
              padding: "3px 8px",
              borderRadius: "4px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 w-fit mt-1"
        style={{
          color: "#22d472",
          fontSize: "14px",
          fontWeight: 500,
          textDecoration: "none",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#18a355")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#22d472")}
      >
        View project <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>

    {/* Right: screenshot */}
    <div
      className="w-full lg:w-80 xl:w-96 flex-shrink-0 rounded-lg overflow-hidden"
      style={{ minHeight: "200px", background: "#1a1a1a" }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top"
        style={{ minHeight: "200px" }}
      />
    </div>
  </motion.div>
);

const SmallCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    viewport={{ once: true, margin: "-60px" }}
    className="glow-card flex flex-col gap-3 h-full"
    style={{
      background: "#121212",
      border: "1px solid #212121",
      borderRadius: "12px",
      padding: "24px",
    }}
  >
    <div
      className="w-full rounded-lg overflow-hidden flex-shrink-0"
      style={{ height: "140px", background: "#1a1a1a" }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top"
      />
    </div>

    <h4
      style={{
        color: "#f2f2f2",
        fontFamily: "'Sora', sans-serif",
        fontSize: "15px",
        fontWeight: 600,
        letterSpacing: "-0.01em",
      }}
    >
      {project.title}
    </h4>

    <p
      style={{
        color: "#6b6b6b",
        fontSize: "12px",
        lineHeight: 1.6,
      }}
      className="line-clamp-2"
    >
      {project.description}
    </p>

    <div className="flex flex-wrap gap-1.5 mt-auto">
      {project.technologies.slice(0, 3).map((tech) => (
        <span
          key={tech}
          style={{
            background: "#1a1a1a",
            border: "1px solid #212121",
            color: "#6b6b6b",
            fontSize: "9px",
            fontFamily: "'JetBrains Mono', monospace",
            padding: "2px 6px",
            borderRadius: "3px",
          }}
        >
          {tech}
        </span>
      ))}
    </div>

    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#22d472",
        fontSize: "12px",
        fontFamily: "'JetBrains Mono', monospace",
        textDecoration: "none",
        marginTop: "4px",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#18a355")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#22d472")}
    >
      View project →
    </a>
  </motion.div>
);

const Projects = () => {
  const featured = myProjects.filter((p) => FEATURED_IDS.includes(p.id));
  const rest = myProjects.filter((p) => !FEATURED_IDS.includes(p.id));

  return (
    <section id="work" style={{ padding: "100px 0", background: "#0a0a0a" }}>
      <div
        className="max-sm:px-6"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}
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
            marginBottom: "64px",
          }}
        >
          Projects.
        </motion.h2>

        {/* Featured full-width cards */}
        <div className="flex flex-col gap-6 mb-20">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects grid */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          style={{
            color: "#6b6b6b",
            fontSize: "10px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.12em",
            marginBottom: "24px",
          }}
        >
          MORE PROJECTS
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <SmallCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
