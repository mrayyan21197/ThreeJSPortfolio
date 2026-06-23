import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    quote:
      "Rayyan delivered an exceptional product — clean code, fast turnaround, and a real eye for UX. Would work with him again in a heartbeat.",
    name: "Jack Thompson",
    role: "Tech Lead, StartupCo",
  },
  {
    quote:
      "I've worked with a lot of developers, but Rayyan's attention to detail and problem-solving ability sets him apart. He took our idea and made it real.",
    name: "Sarah Chen",
    role: "Product Manager, Digital Agency",
  },
  {
    quote:
      "Reliable, communicative, and technically excellent. Rayyan built our automation system and it's been running flawlessly ever since. Highly recommend.",
    name: "Michael Ross",
    role: "CEO, TechVentures",
  },
];

const Testimonials = () => {
  return (
    <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
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
          From clients & teams.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
              style={{
                background: "#121212",
                border: "1px solid #212121",
                borderTop: "2px solid #22d472",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  color: "#6b6b6b",
                  fontSize: "14px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.75,
                  flexGrow: 1,
                }}
              >
                "{t.quote}"
              </p>
              <div>
                <div
                  style={{
                    color: "#f2f2f2",
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    color: "#6b6b6b",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    marginTop: "2px",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
