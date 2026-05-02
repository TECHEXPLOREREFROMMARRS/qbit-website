export default function TechnologyPage({ onNav }) {
  return (
    <div style={{ paddingTop: 64 }}>
      <PageHeader tag="TECHNOLOGY" h1="The Stack Beneath" accentText="Every System." sub="Qbit's technology pillars are not product features — they are the engineering disciplines we've mastered to make sovereign, deterministic, and quantum-safe communication possible." />
      <section style={{ padding: "4rem 2rem 5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {TECHNOLOGIES.map((tech, i) => (
            <div key={tech.id} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "2.5rem", padding: "3.5rem 0", borderBottom: `1px solid ${C.borderSub}`, alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontFamily: FD, fontSize: "2rem", fontWeight: 700, color: C.cyan, opacity: 0.2 }}>0{i + 1}</span>
                <span style={{ fontSize: "2rem", color: C.cyan }}>{tech.icon}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h2 style={{ fontFamily: FD, fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: C.text, margin: 0 }}>{tech.title}</h2>
                <p style={{ fontFamily: FB, fontSize: "0.92rem", color: C.textMid, lineHeight: 1.78, maxWidth: 680 }}>{tech.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {tech.bullets.map(b => (
                    <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.cyan, flexShrink: 0 }} />
                      <span style={{ fontFamily: FB, fontSize: "0.82rem", color: C.text }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "5rem 2rem", background: C.bgPanel, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={sTag}><TL /> DEEP DIVES</div>
          <h2 style={sH2}>Read the<br /><span style={accent}>Technical Details.</span></h2>
          <p style={{ fontFamily: FB, fontSize: "0.9rem", color: C.textMid, lineHeight: 1.7, marginBottom: "2rem" }}>Our whitepapers provide peer-reviewable technical depth on each discipline.</p>
          <button style={btnP} onClick={() => onNav("Resources")}>↓ Download Whitepapers</button>
        </div>
      </section>
    </div>
  );
}