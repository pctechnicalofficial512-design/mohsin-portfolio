import { useState } from "react";

const projects = [
  {
    title: "Neural Commerce",
    desc: "AI-powered e-commerce platform with real-time recommendations",
    tags: ["React", "Python", "TensorFlow"],
    year: "2024",
  },
  {
    title: "CryptoFlow",
    desc: "Decentralized trading dashboard with live blockchain analytics",
    tags: ["Next.js", "Web3", "Solidity"],
    year: "2024",
  },
  {
    title: "Phantom UI",
    desc: "Open-source design system used by 2,000+ developers worldwide",
    tags: ["TypeScript", "Storybook", "CSS"],
    year: "2023",
  },
  {
    title: "SkyWatch",
    desc: "Satellite imagery processing pipeline for climate researchers",
    tags: ["Rust", "WASM", "WebGL"],
    year: "2023",
  },
];

const skills = [
  { name: "TypeScript", level: 95 },
  { name: "React / Next.js", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 85 },
  { name: "Rust", level: 70 },
  { name: "PostgreSQL", level: 80 },
];

export function DarkNoir() {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<number | null>(null);

  const sections = ["home", "about", "projects", "skills", "contact"];

  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        background: "#05050a",
        color: "#e0e0f0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Animated grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(100,60,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,60,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(100,60,255,0.15)",
          background: "rgba(5,5,10,0.85)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span style={{ color: "#7b4fff", fontSize: 18, letterSpacing: 4, fontWeight: 700 }}>
          &lt;ALEX.DEV/&gt;
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === s ? "#7b4fff" : "#888",
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "inherit",
                transition: "color 0.2s",
                padding: 0,
              }}
            >
              {active === s ? `> ${s}` : s}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ position: "relative", zIndex: 1, paddingTop: 80 }}>
        {/* HERO */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "0 48px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                color: "#7b4fff",
                letterSpacing: 4,
                marginBottom: 24,
                fontFamily: "monospace",
              }}
            >
              // INITIALIZING PORTFOLIO...
            </div>
            <h1
              style={{
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 900,
                lineHeight: 1,
                margin: "0 0 8px",
                fontFamily: "'Arial Black', sans-serif",
                letterSpacing: -2,
              }}
            >
              <span style={{ color: "#e0e0f0" }}>ALEX</span>
            </h1>
            <h1
              style={{
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 900,
                lineHeight: 1,
                margin: "0 0 40px",
                fontFamily: "'Arial Black', sans-serif",
                letterSpacing: -2,
                color: "#7b4fff",
                WebkitTextStroke: "2px #7b4fff",
                // textShadow: "0 0 40px rgba(123,79,255,0.6)",
              }}
            >
              MORGAN
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#888",
                maxWidth: 480,
                lineHeight: 1.7,
                marginBottom: 48,
                fontFamily: "inherit",
              }}
            >
              Full-stack engineer & systems architect. Building the future one commit at a time.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <button
                style={{
                  background: "#7b4fff",
                  color: "#fff",
                  border: "none",
                  padding: "14px 32px",
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
                onClick={() => setActive("projects")}
              >
                VIEW_WORK
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "#7b4fff",
                  border: "1px solid #7b4fff",
                  padding: "14px 32px",
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
                onClick={() => setActive("contact")}
              >
                CONTACT
              </button>
            </div>
          </div>
          {/* Decorative terminal */}
          <div
            style={{
              marginLeft: "auto",
              background: "#0d0d18",
              border: "1px solid rgba(123,79,255,0.3)",
              padding: 24,
              fontFamily: "monospace",
              fontSize: 13,
              lineHeight: 2,
              minWidth: 360,
              maxWidth: 420,
            }}
          >
            <div style={{ color: "#555", marginBottom: 8 }}>$ whoami</div>
            <div style={{ color: "#7b4fff" }}>alex_morgan@dev</div>
            <div style={{ color: "#555", marginTop: 8 }}>$ skills --list</div>
            {["React", "TypeScript", "Node.js", "Rust", "PostgreSQL"].map((s) => (
              <div key={s} style={{ color: "#a0a0c0" }}>
                ✓ {s}
              </div>
            ))}
            <div style={{ color: "#555", marginTop: 8 }}>$ status</div>
            <div style={{ color: "#4ade80" }}>● Available for hire</div>
            <div
              style={{
                display: "inline-block",
                width: 8,
                height: 16,
                background: "#7b4fff",
                marginLeft: 4,
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>
        </section>

        {/* ABOUT */}
        <section
          style={{
            padding: "100px 48px",
            borderTop: "1px solid rgba(123,79,255,0.1)",
          }}
        >
          <div style={{ fontSize: 11, color: "#7b4fff", letterSpacing: 4, marginBottom: 16 }}>
            // 01. ABOUT
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <h2
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  fontFamily: "'Arial Black', sans-serif",
                  marginBottom: 24,
                  lineHeight: 1,
                }}
              >
                CRAFTING
                <br />
                <span style={{ color: "#7b4fff" }}>DIGITAL</span>
                <br />
                FUTURES
              </h2>
              <p style={{ color: "#888", lineHeight: 1.8, fontSize: 15 }}>
                I'm a full-stack engineer with 6+ years of experience building high-performance
                web applications, developer tooling, and distributed systems. I obsess over
                clean architecture, performance, and the details that separate good from great.
              </p>
              <p style={{ color: "#888", lineHeight: 1.8, fontSize: 15, marginTop: 16 }}>
                Currently open to senior / staff engineering roles and ambitious freelance projects.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
              {[
                ["42+", "Projects Shipped"],
                ["6+", "Years Experience"],
                ["2K+", "GitHub Stars"],
                ["12", "Happy Clients"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  style={{
                    padding: 32,
                    border: "1px solid rgba(123,79,255,0.15)",
                    background: "#0d0d18",
                  }}
                >
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 900,
                      color: "#7b4fff",
                      fontFamily: "'Arial Black', sans-serif",
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: 12, color: "#666", letterSpacing: 1, marginTop: 4 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          style={{
            padding: "100px 48px",
            borderTop: "1px solid rgba(123,79,255,0.1)",
          }}
        >
          <div style={{ fontSize: 11, color: "#7b4fff", letterSpacing: 4, marginBottom: 16 }}>
            // 02. PROJECTS
          </div>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              fontFamily: "'Arial Black', sans-serif",
              marginBottom: 48,
              lineHeight: 1,
            }}
          >
            SELECTED <span style={{ color: "#7b4fff" }}>WORK</span>
          </h2>
          <div style={{ display: "grid", gap: 2 }}>
            {projects.map((p, i) => (
              <div
                key={p.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "28px 32px",
                  border: "1px solid rgba(123,79,255,0.15)",
                  background: hovered === i ? "#0d0d18" : "transparent",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  alignItems: "center",
                  gap: 32,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: hovered === i ? "#7b4fff" : "#444",
                    letterSpacing: 2,
                    fontFamily: "monospace",
                  }}
                >
                  [{String(i + 1).padStart(2, "0")}]
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 6,
                      color: hovered === i ? "#fff" : "#ccc",
                    }}
                  >
                    {p.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#666" }}>{p.desc}</div>
                  <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 10,
                          padding: "3px 10px",
                          border: "1px solid rgba(123,79,255,0.3)",
                          color: "#7b4fff",
                          letterSpacing: 1,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#555", letterSpacing: 2 }}>{p.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section
          style={{
            padding: "100px 48px",
            borderTop: "1px solid rgba(123,79,255,0.1)",
          }}
        >
          <div style={{ fontSize: 11, color: "#7b4fff", letterSpacing: 4, marginBottom: 16 }}>
            // 03. SKILLS
          </div>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              fontFamily: "'Arial Black', sans-serif",
              marginBottom: 48,
              lineHeight: 1,
            }}
          >
            TECH <span style={{ color: "#7b4fff" }}>STACK</span>
          </h2>
          <div style={{ maxWidth: 700 }}>
            {skills.map((s) => (
              <div key={s.name} style={{ marginBottom: 28 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "#ccc" }}>{s.name}</span>
                  <span style={{ color: "#7b4fff" }}>{s.level}%</span>
                </div>
                <div style={{ height: 2, background: "#1a1a2e" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${s.level}%`,
                      background: "linear-gradient(90deg, #7b4fff, #bf4fff)",
                      boxShadow: "0 0 12px rgba(123,79,255,0.5)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          style={{
            padding: "100px 48px",
            borderTop: "1px solid rgba(123,79,255,0.1)",
          }}
        >
          <div style={{ fontSize: 11, color: "#7b4fff", letterSpacing: 4, marginBottom: 16 }}>
            // 04. CONTACT
          </div>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              fontFamily: "'Arial Black', sans-serif",
              marginBottom: 16,
              lineHeight: 1,
            }}
          >
            LET'S <span style={{ color: "#7b4fff" }}>CONNECT</span>
          </h2>
          <p style={{ color: "#888", marginBottom: 48, fontSize: 15 }}>
            Have a project in mind? Let's build something extraordinary.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 700 }}>
            <input
              placeholder="YOUR_NAME"
              style={{
                background: "#0d0d18",
                border: "1px solid rgba(123,79,255,0.2)",
                color: "#e0e0f0",
                padding: "16px 20px",
                fontFamily: "monospace",
                fontSize: 12,
                letterSpacing: 2,
                outline: "none",
              }}
            />
            <input
              placeholder="YOUR_EMAIL"
              style={{
                background: "#0d0d18",
                border: "1px solid rgba(123,79,255,0.2)",
                color: "#e0e0f0",
                padding: "16px 20px",
                fontFamily: "monospace",
                fontSize: 12,
                letterSpacing: 2,
                outline: "none",
              }}
            />
            <textarea
              placeholder="YOUR_MESSAGE"
              rows={5}
              style={{
                gridColumn: "1 / -1",
                background: "#0d0d18",
                border: "1px solid rgba(123,79,255,0.2)",
                color: "#e0e0f0",
                padding: "16px 20px",
                fontFamily: "monospace",
                fontSize: 12,
                letterSpacing: 2,
                outline: "none",
                resize: "none",
              }}
            />
            <button
              style={{
                background: "#7b4fff",
                color: "#fff",
                border: "none",
                padding: "16px 32px",
                fontSize: 12,
                letterSpacing: 3,
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "monospace",
              }}
            >
              SEND_MESSAGE
            </button>
          </div>
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(123,79,255,0.1)", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#555", fontSize: 12, letterSpacing: 2 }}>
              © 2025 ALEX_MORGAN.DEV
            </span>
            <div style={{ display: "flex", gap: 24 }}>
              {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                <span key={s} style={{ color: "#7b4fff", fontSize: 12, letterSpacing: 2, cursor: "pointer" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
