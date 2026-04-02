import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "NeuroBoard",
    subtitle: "AI-Powered Analytics Dashboard",
    desc: "A real-time analytics platform built with React and Python, featuring machine learning-driven insights, interactive charts, and live data streaming for enterprise clients.",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    img: "/__mockup/images/project-1.png",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.4)",
    year: "2024",
    link: "#",
    stats: { stars: "1.2K", forks: "340", users: "5K+" },
  },
  {
    title: "ShopSphere",
    subtitle: "E-Commerce Mobile App",
    desc: "A feature-rich shopping app designed from scratch — smooth animations, cart management, payment gateway integration, and a stunning UI that boosted conversion by 40%.",
    tags: ["React Native", "Node.js", "Stripe", "MongoDB"],
    img: "/__mockup/images/project-2.png",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.4)",
    year: "2024",
    link: "#",
    stats: { stars: "890", forks: "210", users: "10K+" },
  },
  {
    title: "OmniChat",
    subtitle: "AI Chatbot Platform",
    desc: "An intelligent conversational AI interface powered by GPT, supporting multi-language, custom personas, and embedded widgets. Deployed across 200+ client websites.",
    tags: ["Next.js", "OpenAI", "WebSocket", "Redis"],
    img: "/__mockup/images/project-3.png",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.4)",
    year: "2023",
    link: "#",
    stats: { stars: "2.1K", forks: "560", users: "50K+" },
  },
  {
    title: "PortfolioOS",
    subtitle: "Personal Portfolio Framework",
    desc: "An open-source portfolio builder with a drag-and-drop editor, theme system, and one-click deployment. Used by 3,000+ developers worldwide to showcase their work.",
    tags: ["TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    img: "/__mockup/images/project-4.png",
    color: "#4ade80",
    glow: "rgba(74,222,128,0.4)",
    year: "2023",
    link: "#",
    stats: { stars: "3.4K", forks: "820", users: "3K+" },
  },
];

const SKILLS = [
  { name: "React / Next.js", level: 94, icon: "⚛️", color: "#61dafb" },
  { name: "TypeScript", level: 91, icon: "🔷", color: "#3178c6" },
  { name: "Node.js", level: 87, icon: "💚", color: "#4ade80" },
  { name: "Python", level: 83, icon: "🐍", color: "#f59e0b" },
  { name: "PostgreSQL", level: 79, icon: "🐘", color: "#06b6d4" },
  { name: "UI / Design", level: 88, icon: "🎨", color: "#a855f7" },
];

const NAV = ["Home", "About", "Projects", "Skills", "Contact"];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const el = document.getElementById("scroll-root");
    if (!el) return;
    const handler = () => setY(el.scrollTop);
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);
  return y;
}

function AnimatedSkillBar({ level, color }: { level: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(level); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);
  return (
    <div ref={ref} style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${filled}%`,
          background: color,
          borderRadius: 100,
          boxShadow: `0 0 14px ${color}aa`,
          transition: "width 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      />
    </div>
  );
}

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: `1px solid ${hovered ? p.color + "55" : "rgba(255,255,255,0.07)"}`,
        background: hovered ? `rgba(${hexToRgb(p.color)},0.07)` : "rgba(255,255,255,0.02)",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 24px 48px ${p.glow}` : "none",
        position: "relative",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
        <img
          src={p.img}
          alt={p.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? `linear-gradient(to bottom, transparent 30%, ${p.color}66 100%)`
              : "linear-gradient(to bottom, transparent 50%, rgba(15,15,35,0.9) 100%)",
            transition: "all 0.4s",
          }}
        />
        {/* Year badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(15,15,35,0.7)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${p.color}44`,
            color: p.color,
            fontSize: 11,
            padding: "4px 12px",
            borderRadius: 100,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          {p.year}
        </div>
        {/* Hover overlay CTA */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <div
            style={{
              background: p.color,
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.5,
              transform: hovered ? "scale(1)" : "scale(0.8)",
              transition: "transform 0.3s",
            }}
          >
            View Project →
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 28px 28px" }}>
        <div style={{ fontSize: 11, color: p.color, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>
          {p.subtitle}
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, marginBottom: 10, color: "#fff" }}>
          {p.title}
        </h3>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
          {p.desc}
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: 20, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {Object.entries(p.stats).map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 15, fontWeight: 700, color: p.color }}>{v}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", textTransform: "capitalize", marginTop: 2 }}>{k}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {p.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                padding: "4px 12px",
                background: `${p.color}18`,
                color: p.color,
                borderRadius: 8,
                fontWeight: 500,
                border: `1px solid ${p.color}30`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export function BoldColorful() {
  const [activeNav, setActiveNav] = useState("Home");
  const [imgLoaded, setImgLoaded] = useState(false);
  const [profileHovered, setProfileHovered] = useState(false);
  const scrollY = useScrollY();
  const navSolid = scrollY > 60;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="scroll-root"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        background: "#0b0b1a",
        color: "#fff",
        minHeight: "100vh",
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        position: "relative",
      }}
    >
      {/* Background ambient glows */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -300, right: -200, width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", top: 400, left: -300, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: -200, right: 100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)" }} />
      </div>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 52px",
          background: navSolid ? "rgba(11,11,26,0.92)" : "transparent",
          backdropFilter: navSolid ? "blur(20px)" : "none",
          borderBottom: navSolid ? "1px solid rgba(255,255,255,0.05)" : "none",
          transition: "all 0.4s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
              boxShadow: "0 0 20px rgba(168,85,247,0.4)",
            }}
          >
            M
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: -0.3 }}>Mohsin Raza</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 0.5 }}>Full-Stack Developer</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => { setActiveNav(n); scrollTo(n.toLowerCase()); }}
              style={{
                background: activeNav === n ? "rgba(168,85,247,0.15)" : "transparent",
                border: activeNav === n ? "1px solid rgba(168,85,247,0.3)" : "1px solid transparent",
                color: activeNav === n ? "#a855f7" : "rgba(255,255,255,0.5)",
                fontSize: 13,
                padding: "7px 18px",
                cursor: "pointer",
                fontFamily: "inherit",
                borderRadius: 10,
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              {n}
            </button>
          ))}
          <button
            style={{
              marginLeft: 8,
              background: "linear-gradient(135deg, #a855f7, #3b82f6)",
              color: "#fff",
              border: "none",
              padding: "9px 22px",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              borderRadius: 10,
              boxShadow: "0 4px 20px rgba(168,85,247,0.35)",
            }}
          >
            Hire Me
          </button>
        </div>
      </nav>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ====== HERO ====== */}
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "100px 52px 60px",
            gap: 80,
          }}
        >
          {/* Left: text */}
          <div style={{ flex: 1, maxWidth: 560 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                background: "rgba(74,222,128,0.1)",
                border: "1px solid rgba(74,222,128,0.25)",
                borderRadius: 100,
                fontSize: 12,
                color: "#4ade80",
                marginBottom: 32,
                fontWeight: 600,
                letterSpacing: 0.3,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 8px #4ade80" }} />
              Available for hire — Open to opportunities
            </div>

            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16, fontWeight: 500 }}>
              Hello, I'm
            </div>
            <h1 style={{ fontSize: "clamp(42px, 5vw, 72px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: -2.5, margin: "0 0 12px" }}>
              Mohsin
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 60%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Raza
              </span>
            </h1>
            <div
              style={{
                display: "inline-block",
                fontSize: 15,
                color: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "8px 18px",
                marginBottom: 28,
                fontWeight: 500,
              }}
            >
              🚀 Full-Stack Developer &amp; Creative Technologist
            </div>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 40, maxWidth: 480 }}>
              A passionate young developer turning bold ideas into beautiful digital realities.
              I build fast, scalable, and visually stunning web &amp; mobile applications that
              make people stop and say <em style={{ color: "#a855f7" }}>"wow."</em>
            </p>

            <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
              <button
                onClick={() => scrollTo("projects")}
                style={{
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  color: "#fff",
                  border: "none",
                  padding: "14px 32px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  borderRadius: 12,
                  boxShadow: "0 8px 32px rgba(168,85,247,0.35)",
                  letterSpacing: 0.3,
                }}
              >
                View My Work ↓
              </button>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "14px 32px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  borderRadius: 12,
                }}
              >
                Get In Touch →
              </button>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: 32 }}>
              {[{ n: "18", l: "Years Old" }, { n: "20+", l: "Projects" }, { n: "2+", l: "Years Coding" }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -1, background: "linear-gradient(135deg, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.n}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2, letterSpacing: 0.5 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile card */}
          <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            {/* Profile image with hover effects */}
            <div
              onMouseEnter={() => setProfileHovered(true)}
              onMouseLeave={() => setProfileHovered(false)}
              style={{ position: "relative", cursor: "pointer" }}
            >
              {/* Rotating ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #a855f7, #3b82f6, #06b6d4, #4ade80, #a855f7)",
                  animation: "spin 4s linear infinite",
                  opacity: profileHovered ? 1 : 0.6,
                  transition: "opacity 0.3s",
                }}
              />
              {/* White gap ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -2,
                  borderRadius: "50%",
                  background: "#0b0b1a",
                }}
              />
              {/* Photo */}
              <div
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: profileHovered ? "0 0 60px rgba(168,85,247,0.5)" : "0 0 30px rgba(168,85,247,0.2)",
                  transition: "box-shadow 0.4s",
                }}
              >
                <img
                  src="/__mockup/images/mohsin-avatar.png"
                  alt="Mohsin Raza"
                  onLoad={() => setImgLoaded(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: profileHovered ? "scale(1.07)" : "scale(1)",
                    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                    filter: profileHovered ? "brightness(1.05) saturate(1.1)" : "none",
                  }}
                />
                {/* Hover info overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "linear-gradient(to top, rgba(168,85,247,0.85) 0%, transparent 55%)",
                    opacity: profileHovered ? 1 : 0,
                    transition: "opacity 0.4s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "0 20px 28px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Mohsin Raza</div>
                  <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>Age 18 · Developer</div>
                </div>
              </div>
            </div>

            {/* Info card below photo */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "20px 28px",
                width: 280,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.5, marginBottom: 4 }}>Mohsin Raza</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 16, letterSpacing: 0.3 }}>
                🇵🇰 Pakistan · Age 18
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { icon: "💻", text: "Full-Stack Developer" },
                  { icon: "🎯", text: "Problem Solver" },
                  { icon: "🎨", text: "UI/UX Enthusiast" },
                  { icon: "🌙", text: "Night-time Coder" },
                ].map((trait) => (
                  <div
                    key={trait.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 14px",
                      background: "rgba(168,85,247,0.07)",
                      borderRadius: 10,
                      border: "1px solid rgba(168,85,247,0.12)",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.75)",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ fontSize: 15 }}>{trait.icon}</span>
                    {trait.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====== ABOUT ====== */}
        <section id="about" style={{ padding: "100px 52px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ fontSize: 12, color: "#a855f7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Who Am I</div>
              <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1.5, marginBottom: 16 }}>
                The person behind <span style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>the code</span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
                I'm Mohsin, an 18-year-old developer from Pakistan with a fierce passion for building things that matter. Self-taught, driven, and always learning.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginBottom: 64 }}>
              {[
                { icon: "🚀", title: "Fast Learner", desc: "Picked up React, Node, and Python in under 6 months. I absorb new tech like a sponge." },
                { icon: "💡", title: "Creative Thinker", desc: "I don't just code — I design experiences. Every pixel and interaction is intentional." },
                { icon: "🔥", title: "Hustle Mode", desc: "Side projects, open source, freelancing. If I'm awake, I'm probably building something." },
                { icon: "🌍", title: "Global Mindset", desc: "Working with clients across Europe, US, and Asia. Remote-first, always collaborative." },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    padding: "28px 24px",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textAlign: "center",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.25)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 14 }}>{card.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, letterSpacing: -0.3 }}>{card.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{card.desc}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div style={{ position: "relative", paddingLeft: 40 }}>
              <div style={{ position: "absolute", left: 16, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, #a855f7, rgba(168,85,247,0))" }} />
              {[
                { year: "2022", title: "Started Coding", desc: "Wrote my first HTML page and immediately fell in love with building for the web." },
                { year: "2023", title: "First Freelance Project", desc: "Built a full e-commerce site for a local business — charged $200, learned $2000 worth of lessons." },
                { year: "2024", title: "Open Source & Growth", desc: "Launched PortfolioOS on GitHub, hit 3K+ stars in 3 months, got featured on Dev.to." },
                { year: "Now", title: "Building the Future", desc: "Working on AI-powered apps, freelancing globally, and preparing to land my first full-time role." },
              ].map((item, i) => (
                <div key={item.year} style={{ display: "flex", gap: 24, marginBottom: 36, position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: -32,
                      top: 4,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: i === 3 ? "#a855f7" : "#0b0b1a",
                      border: "2px solid #a855f7",
                      boxShadow: i === 3 ? "0 0 12px rgba(168,85,247,0.6)" : "none",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 11,
                      color: "#a855f7",
                      fontWeight: 700,
                      letterSpacing: 1,
                      minWidth: 40,
                      paddingTop: 2,
                    }}
                  >
                    {item.year}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== PROJECTS ====== */}
        <section id="projects" style={{ padding: "100px 52px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ fontSize: 12, color: "#a855f7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Portfolio</div>
              <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1.5, marginBottom: 16 }}>
                Things I've <span style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>built</span>
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto" }}>
                Each project is a story — a problem I solved, a skill I gained, and a product I'm proud of.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {PROJECTS.map((p, i) => (
                <ProjectCard key={p.title} p={p} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ====== SKILLS ====== */}
        <section id="skills" style={{ padding: "100px 52px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, color: "#a855f7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>Tech Stack</div>
              <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1.5, marginBottom: 16 }}>
                My <span style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>skills</span>
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: 32 }}>
                Self-taught over 2+ years. Every skill on this list was earned through real projects,
                late nights, and a lot of Stack Overflow.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL", "Tailwind", "Git", "Docker", "Figma", "REST APIs"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      padding: "6px 14px",
                      background: "rgba(168,85,247,0.1)",
                      border: "1px solid rgba(168,85,247,0.2)",
                      borderRadius: 10,
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 500,
                      cursor: "default",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {SKILLS.map((s) => (
                <div key={s.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 18 }}>{s.icon}</span>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{s.name}</span>
                    </div>
                    <span style={{ fontSize: 13, color: s.color, fontWeight: 700 }}>{s.level}%</span>
                  </div>
                  <AnimatedSkillBar level={s.level} color={s.color} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CONTACT ====== */}
        <section id="contact" style={{ padding: "100px 52px 120px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "#a855f7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>Contact</div>
            <h2 style={{ fontSize: 52, fontWeight: 800, letterSpacing: -2, marginBottom: 16, lineHeight: 1.1 }}>
              Let's build something
              <br />
              <span style={{ background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 60%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                incredible together
              </span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", marginBottom: 48, lineHeight: 1.8 }}>
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open. I'll reply within 24 hours.
            </p>

            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 24,
                padding: "40px 48px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[
                  { ph: "Your name", type: "text" },
                  { ph: "Email address", type: "email" },
                ].map((f) => (
                  <input
                    key={f.ph}
                    type={f.type}
                    placeholder={f.ph}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                      padding: "14px 18px",
                      fontSize: 14,
                      fontFamily: "inherit",
                      borderRadius: 12,
                      outline: "none",
                    }}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(168,85,247,0.5)"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(168,85,247,0.1)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
                  />
                ))}
              </div>
              <input
                placeholder="Subject"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  padding: "14px 18px",
                  fontSize: 14,
                  fontFamily: "inherit",
                  borderRadius: 12,
                  outline: "none",
                  marginBottom: 16,
                  boxSizing: "border-box",
                }}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(168,85,247,0.5)"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(168,85,247,0.1)"; }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
              />
              <textarea
                placeholder="Tell me about your project, idea, or just say hi..."
                rows={5}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  padding: "14px 18px",
                  fontSize: 14,
                  fontFamily: "inherit",
                  borderRadius: 12,
                  outline: "none",
                  resize: "none",
                  marginBottom: 20,
                  boxSizing: "border-box",
                }}
                onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(168,85,247,0.5)"; (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(168,85,247,0.1)"; }}
                onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLTextAreaElement).style.boxShadow = "none"; }}
              />
              <button
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  color: "#fff",
                  border: "none",
                  padding: "16px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  borderRadius: 12,
                  boxShadow: "0 8px 32px rgba(168,85,247,0.35)",
                  letterSpacing: 0.3,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.boxShadow = "0 12px 40px rgba(168,85,247,0.5)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "translateY(0)"; (e.target as HTMLElement).style.boxShadow = "0 8px 32px rgba(168,85,247,0.35)"; }}
              >
                Send Message 🚀
              </button>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 40 }}>
              {[
                { label: "GitHub", icon: "💻" },
                { label: "LinkedIn", icon: "🔗" },
                { label: "Twitter", icon: "🐦" },
                { label: "Email", icon: "📩" },
              ].map((s) => (
                <button
                  key={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                    padding: "10px 20px",
                    fontSize: 13,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    borderRadius: 10,
                    fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.3)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                >
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: "32px 52px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            © 2025 <span style={{ color: "#a855f7" }}>Mohsin Raza</span>. Crafted with passion.
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.15)" }}>
            Built with React · TypeScript · Tailwind
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
