import { useState } from "react";
import { motion } from "motion/react";
import { CONTACT } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setIsLoading(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    background: "#1a1a1a",
    border: "1px solid #212121",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#f2f2f2",
    fontSize: "14px",
    fontFamily: "'Sora', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 0",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial green glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(34,212,114,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-sm:px-6 relative z-10 text-center"
        style={{ maxWidth: "800px", margin: "0 auto", padding: "0 64px" }}
      >
        {/* CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: "48px" }}
        >
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "#f2f2f2",
              marginBottom: "16px",
            }}
          >
            Let's build something.
          </h2>

          <p
            style={{
              color: "#22d472",
              fontSize: "11px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.1em",
              marginBottom: "32px",
            }}
          >
            Currently available · 2–3 project slots open
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" })
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
                fontFamily: "'Sora', sans-serif",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#18a355")}
              onMouseLeave={(e) => (e.target.style.background = "#22d472")}
            >
              Start a conversation →
            </button>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{
                color: "#6b6b6b",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#f2f2f2")}
              onMouseLeave={(e) => (e.target.style.color = "#6b6b6b")}
            >
              Or email me
            </a>
          </div>

          <p
            style={{
              color: "#6b6b6b",
              fontSize: "11px",
              fontFamily: "'JetBrains Mono', monospace",
              marginTop: "20px",
            }}
          >
            Avg. response time: 24h · Based in Pakistan · Open to remote work
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            background: "#121212",
            border: "1px solid #212121",
            borderRadius: "12px",
            padding: "32px",
            textAlign: "left",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ color: "#22d472", fontSize: "48px", lineHeight: 1 }}>✓</div>
              <p
                style={{
                  color: "#f2f2f2",
                  fontWeight: 600,
                  marginTop: "12px",
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                Message sent! I'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    style={{
                      display: "block",
                      color: "#6b6b6b",
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono', monospace",
                      marginBottom: "8px",
                    }}
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="form-input"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      color: "#6b6b6b",
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono', monospace",
                      marginBottom: "8px",
                    }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="form-input"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "#6b6b6b",
                    fontSize: "11px",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="form-input"
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  background: isLoading ? "#6b6b6b" : "#22d472",
                  color: "#0a0a0a",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "13px 24px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  fontFamily: "'Sora', sans-serif",
                  transition: "background 0.2s",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) e.target.style.background = "#18a355";
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) e.target.style.background = "#22d472";
                }}
              >
                {isLoading ? "Sending..." : "Send message →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
