export default function ResourcesPage({ onNav }) {
  const [modal, setModal] = useState(null);
  const wps = RESOURCES.filter(r => r.type === "whitepaper");
  const cs = RESOURCES.filter(r => r.type === "casestudy");
  return (
    <div style={{ paddingTop: 64 }}>
      <PageHeader tag="RESOURCES" h1="Technical" accentText="Intelligence Library." sub="Whitepapers, case studies, and product datasheets — written by Qbit engineers for technical decision makers." />
      <section style={{ padding: "4rem 2rem 5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={sTag}><TL /> WHITEPAPERS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
            {wps.map(r => (
              <div key={r.title} style={{ ...card, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ fontFamily: FB, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.cyan, fontWeight: 600 }}>⬡ Whitepaper · Gated</div>
                <h3 style={{ fontFamily: FD, fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: C.text, margin: 0 }}>{r.title}</h3>
                <p style={{ fontFamily: FB, fontSize: "0.83rem", color: C.textMid, lineHeight: 1.65, flex: 1 }}>{r.desc}</p>
                <button style={{ ...btnP, fontSize: "0.75rem" }} onClick={() => setModal(r)}>↓ Download Whitepaper</button>
              </div>
            ))}
          </div>
          <div style={sTag}><TL /> CASE STUDIES</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
            {cs.map(r => (
              <div key={r.title} style={{ ...card, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ fontFamily: FB, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.amber, fontWeight: 600 }}>◈ Case Study · Gated</div>
                <h3 style={{ fontFamily: FD, fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: C.text, margin: 0 }}>{r.title}</h3>
                <p style={{ fontFamily: FB, fontSize: "0.83rem", color: C.textMid, lineHeight: 1.65, flex: 1 }}>{r.desc}</p>
                <button style={{ ...btnG, fontSize: "0.75rem" }} onClick={() => setModal(r)}>↓ Read Case Study</button>
              </div>
            ))}
          </div>
          <div style={sTag}><TL /> PRODUCT DATASHEETS</div>
          <h2 style={{ ...sH2, marginBottom: "2rem" }}>All Products.<br /><span style={accent}>All Specs.</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {PRODUCTS.map(p => (
              <div key={p.id} style={{ ...card, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: p.color, opacity: 0.6 }} />
                <div>
                  <div style={{ fontFamily: FB, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: p.color, marginBottom: "0.2rem" }}>{p.category}</div>
                  <div style={{ fontFamily: FD, fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: C.text }}>{p.name}</div>
                </div>
                <button style={{ ...btnG, fontSize: "0.72rem", padding: "0.5rem 1rem" }} onClick={() => setModal(p)}>↓ Download</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {modal && <GatedModal item={modal} onClose={() => setModal(null)} />}
    </div>
  );
}