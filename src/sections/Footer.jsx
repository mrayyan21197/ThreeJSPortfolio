import { Github, Linkedin, Mail } from "lucide-react";
import { mySocials } from "../constants";

const getIcon = (name) => {
  switch (name.toLowerCase()) {
    case "github":
      return <Github style={{ width: "16px", height: "16px" }} />;
    case "linkedin":
      return <Linkedin style={{ width: "16px", height: "16px" }} />;
    case "email":
      return <Mail style={{ width: "16px", height: "16px" }} />;
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid #212121",
        padding: "40px 0 24px",
      }}
    >
      <div
        className="max-sm:px-6"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          {/* Left: branding */}
          <div>
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                color: "#f2f2f2",
                letterSpacing: "-0.02em",
              }}
            >
              Rayyan
            </div>
            <div
              style={{
                color: "#6b6b6b",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                marginTop: "2px",
              }}
            >
              Full-Stack Developer
            </div>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-5">
            {mySocials.map((social) => {
              const icon = getIcon(social.name);
              if (!icon) return null;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  style={{
                    color: "#6b6b6b",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#22d472")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b6b")}
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{ borderTop: "1px solid #212121", paddingTop: "20px" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            style={{
              color: "#6b6b6b",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
            }}
          >
            © 2025 Rayyan. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms & Conditions", "Privacy Policy"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  color: "#6b6b6b",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f2f2f2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b6b")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
