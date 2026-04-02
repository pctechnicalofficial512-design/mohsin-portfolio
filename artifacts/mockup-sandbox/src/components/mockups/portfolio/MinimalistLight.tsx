import { useState } from "react";

const projects = [
  {
    title: "Meridian",
    desc: "Financial planning platform for independent creators and freelancers",
    tags: ["React", "Node.js", "Stripe"],
    category: "Product Design",
    year: "2024",
  },
  {
    title: "Forma",
    desc: "Collaborative design tool with real-time component syncing",
    tags: ["Next.js", "WebRTC", "Figma API"],
    category: "Engineering",
    year: "2024",
  },
  {
    title: "Lumen",
    desc: "Open-source accessibility audit tool for modern web apps",
    tags: ["TypeScript", "Puppeteer", "CLI"],
    category: "Open Source",
    year: "2023",
  },
  {
    title: "Drift",
    desc: "Asynchronous video feedback platform for design teams",
    tags: ["React", "WebRTC", "FFmpeg"],
    category: "SaaS",
    year: "2023",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Linear"] },
];

export function MinimalistLight() {
  const [activeSection, setActiveSection] = useState("work");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        background: "#fafaf8",
        color: "#1a1a1a",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "24px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(250,250,248,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #eee",
        }}
      >
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.3 }}>Alex Morgan</div>
          <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>Full-Stack Engineer</div>
        </div>
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {["work", "about", "skills", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                color: activeSection === s ? "#1a1a1a" : "#aaa",
                fontWeight: activeSection === s ? 500 : 400,
                fontFamily: "inherit",
                padding: 0,
                textTransform: "capitalize",
                letterSpacing: 0.2,
                borderBottom: activeSection === s ? "1px solid #1a1a1a" : "none",
                paddingBottom: activeSection === s ? 1 : 0,
              }}
            >
              {s}
            </button>
          ))}
          <button
            style={{
              background: "#1a1a1a",
              color: "#fff",
              border: "none",
              padding: "10px 22px",
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit",
              letterSpacing: 0.3,
            }}
          >
            Hire Me
          </button>
        </div>
      </nav>

      <div style={{ paddingTop: 89 }}>
        {/* HERO */}
        <section
          style={{
            padding: "120px 64px 80px",
            maxWidth: 1100,
          }}
        >
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 2, textTransform: "uppercase", marginBottom: 32 }}>
            Based in San Francisco, CA — Available for hire
          </div>
          <h1
            style={{
              fontSize: "clamp(52px, 6vw, 88px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: -2,
              margin: "0 0 40px",
              color: "#1a1a1a",
            }}
          >
            I build thoughtful
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>digital products</em>
            <br />
            that people love.
          </h1>
          <div
            style={{
              display: "flex",
              gap: 64,
              paddingTop: 40,
              borderTop: "1px solid #e5e5e5",
            }}
          >
            <div>
              <div style={{ fontSize: 32, fontWeight: 300, letterSpacing: -1 }}>42+</div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 4, letterSpacing: 1 }}>Projects shipped</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 300, letterSpacing: -1 }}>6 yrs</div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 4, letterSpacing: 1 }}>Experience</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 300, letterSpacing: -1 }}>2K+</div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 4, letterSpacing: 1 }}>GitHub stars</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ padding: "80px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, borderTop: "1px solid #eee" }}>
          <div>
            <div style={{ fontSize: 11, color: "#999", letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>
              About
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#333", fontWeight: 300, maxWidth: 440 }}>
              I'm a full-stack engineer who cares deeply about craft. I've spent 6 years building
              products at the intersection of engineering excellence and user experience — from
              early-stage startups to scale-ups serving millions.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#333", fontWeight: 300, maxWidth: 440, marginTop: 20 }}>
              I believe the best software is invisible — it just works, exactly when you need it.
              That belief guides everything I build.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "#999", letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>
              Currently
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { role: "Senior Engineer", company: "Freelance", period: "2023 — Present" },
                { role: "Staff Engineer", company: "Acme Corp", period: "2021 — 2023" },
                { role: "Frontend Lead", company: "Startup XY", period: "2019 — 2021" },
              ].map((exp) => (
                <div key={exp.company} style={{ paddingBottom: 20, borderBottom: "1px solid #eee" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{exp.role}</div>
                      <div style={{ fontSize: 13, color: "#999", marginTop: 2 }}>{exp.company}</div>
                    </div>
                    <div style={{ fontSize: 12, color: "#bbb" }}>{exp.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section style={{ padding: "80px 64px", borderTop: "1px solid #eee" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#999", letterSpacing: 2, textTransform: "uppercase" }}>
              Selected Work
            </div>
            <div style={{ fontSize: 12, color: "#999" }}>2023 — 2024</div>
          </div>
          <div>
            {projects.map((p, i) => (
              <div
                key={p.title}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 200px 100px",
                  alignItems: "start",
                  gap: 32,
                  padding: "32px 0",
                  borderTop: "1px solid #eee",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                  opacity: hoveredProject !== null && hoveredProject !== i ? 0.4 : 1,
                }}
              >
                <div style={{ fontSize: 11, color: "#bbb", paddingTop: 4 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 400, letterSpacing: -0.5, marginBottom: 8 }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{p.desc}</div>
                  <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 10,
                          padding: "4px 10px",
                          background: "#f0f0ee",
                          color: "#666",
                          letterSpacing: 0.5,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#bbb", paddingTop: 4 }}>{p.category}</div>
                <div style={{ fontSize: 12, color: "#bbb", paddingTop: 4 }}>{p.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section style={{ padding: "80px 64px", borderTop: "1px solid #eee" }}>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: 2, textTransform: "uppercase", marginBottom: 48 }}>
            Skills & Tools
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {skills.map((group) => (
              <div key={group.category}>
                <div style={{ fontSize: 12, color: "#bbb", marginBottom: 16, letterSpacing: 1 }}>
                  {group.category}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        fontSize: 14,
                        color: "#333",
                        fontWeight: 300,
                        paddingBottom: 8,
                        borderBottom: "1px solid #f0f0ee",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ padding: "80px 64px 120px", borderTop: "1px solid #eee" }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ fontSize: 11, color: "#999", letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>
              Contact
            </div>
            <h2
              style={{
                fontSize: 48,
                fontWeight: 300,
                letterSpacing: -1.5,
                marginBottom: 16,
                lineHeight: 1.1,
              }}
            >
              Got a project?
              <br />
              <em>Let's talk.</em>
            </h2>
            <p style={{ fontSize: 15, color: "#888", marginBottom: 48, lineHeight: 1.7 }}>
              I'm selective about the work I take on — I'm looking for meaningful projects with
              ambitious teams. If that sounds like you, reach out.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                placeholder="Your name"
                style={{
                  padding: "14px 0",
                  border: "none",
                  borderBottom: "1px solid #ddd",
                  background: "transparent",
                  fontSize: 14,
                  fontFamily: "inherit",
                  outline: "none",
                  color: "#1a1a1a",
                }}
              />
              <input
                placeholder="Email address"
                style={{
                  padding: "14px 0",
                  border: "none",
                  borderBottom: "1px solid #ddd",
                  background: "transparent",
                  fontSize: 14,
                  fontFamily: "inherit",
                  outline: "none",
                  color: "#1a1a1a",
                }}
              />
              <textarea
                placeholder="Tell me about your project"
                rows={4}
                style={{
                  padding: "14px 0",
                  border: "none",
                  borderBottom: "1px solid #ddd",
                  background: "transparent",
                  fontSize: 14,
                  fontFamily: "inherit",
                  outline: "none",
                  resize: "none",
                  color: "#1a1a1a",
                }}
              />
              <div style={{ paddingTop: 16 }}>
                <button
                  style={{
                    background: "#1a1a1a",
                    color: "#fff",
                    border: "none",
                    padding: "14px 40px",
                    fontSize: 13,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    letterSpacing: 0.5,
                  }}
                >
                  Send message →
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#bbb" }}>© 2025 Alex Morgan</span>
            <div style={{ display: "flex", gap: 24 }}>
              {["GitHub", "LinkedIn", "Email"].map((s) => (
                <span key={s} style={{ fontSize: 12, color: "#999", cursor: "pointer", borderBottom: "1px solid #e5e5e5" }}>
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
