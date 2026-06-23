import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ITEMS = [
  { type: "category", content: "// frontend" },
  { type: "tech", name: "React", icon: "assets/logos/react.svg" },
  { type: "sep", content: "→" },
  { type: "tech", name: "TypeScript" },
  { type: "sep", content: "·" },
  { type: "tech", name: "Angular" },
  { type: "sep", content: "·" },
  { type: "tech", name: "Next.js" },
  { type: "sep", content: "·" },
  { type: "tech", name: "Tailwind CSS", icon: "assets/logos/tailwindcss.svg" },
  { type: "sep", content: "·" },
  { type: "tech", name: "Vite", icon: "assets/logos/vitejs.svg" },
  { type: "divider" },
  { type: "category", content: "// backend" },
  { type: "tech", name: "Node.js" },
  { type: "sep", content: "→" },
  { type: "tech", name: ".NET Core", icon: "assets/logos/dotnetcore.svg" },
  { type: "sep", content: "·" },
  { type: "tech", name: "C#", icon: "assets/logos/csharp.svg" },
  { type: "sep", content: "·" },
  { type: "tech", name: "SQL Server", icon: "assets/logos/microsoftsqlserver.svg" },
  { type: "sep", content: "·" },
  { type: "tech", name: "MongoDB" },
  { type: "sep", content: "·" },
  { type: "tech", name: "Entity Framework", icon: "assets/logos/efcore.png" },
  { type: "divider" },
  { type: "category", content: "// tools & cloud" },
  { type: "tech", name: "Azure", icon: "assets/logos/azure.svg" },
  { type: "sep", content: "→" },
  { type: "tech", name: "Git", icon: "assets/logos/git.svg" },
  { type: "sep", content: "·" },
  { type: "tech", name: "n8n" },
  { type: "sep", content: "·" },
  { type: "tech", name: "make.com" },
  { type: "sep", content: "·" },
  { type: "tech", name: "Auth0", icon: "assets/logos/auth0.svg" },
  { type: "sep", content: "·" },
  { type: "tech", name: "Stripe", icon: "assets/logos/stripe.svg" },
  { type: "sep", content: "✦" },
];

const renderItem = (item, i) => {
  if (item.type === "tech") {
    return (
      <div
        key={i}
        style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}
      >
        {item.icon && (
          <img
            src={item.icon}
            alt={item.name}
            style={{ width: "28px", height: "28px", objectFit: "contain", flexShrink: 0 }}
          />
        )}
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 4.5vw, 58px)",
            color: "#f2f2f2",
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap",
          }}
        >
          {item.name}
        </span>
      </div>
    );
  }

  if (item.type === "sep") {
    return (
      <span
        key={i}
        style={{
          color: "#22d472",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 300,
          margin: "0 20px",
          flexShrink: 0,
          lineHeight: 1,
        }}
      >
        {item.content}
      </span>
    );
  }

  if (item.type === "category") {
    return (
      <span
        key={i}
        style={{
          color: "#6b6b6b",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.06em",
          marginRight: "40px",
          flexShrink: 0,
          alignSelf: "flex-end",
          paddingBottom: "10px",
        }}
      >
        {item.content}
      </span>
    );
  }

  if (item.type === "divider") {
    return (
      <span
        key={i}
        style={{
          color: "#212121",
          fontSize: "clamp(60px, 8vw, 100px)",
          fontWeight: 200,
          margin: "0 48px",
          flexShrink: 0,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        |
      </span>
    );
  }

  return null;
};

const TechStack = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="stack"
      ref={sectionRef}
      style={{ background: "#121212", overflow: "hidden" }}
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Section header */}
        <div
          className="max-sm:px-6"
          style={{ padding: "0 64px", marginBottom: "52px", flexShrink: 0 }}
        >
          <p
            style={{
              color: "#6b6b6b",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            001 / capabilities
          </p>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#f2f2f2",
              lineHeight: 1,
            }}
          >
            The stack.
          </h2>
        </div>

        {/* Horizontal ticker track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "64px",
            paddingRight: "128px",
            width: "max-content",
            gap: 0,
          }}
        >
          {ITEMS.map(renderItem)}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
