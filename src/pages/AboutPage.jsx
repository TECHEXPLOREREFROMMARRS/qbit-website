import PageHeader from "../components/PageHeader";
import { C, FD, FB, accent } from "../styles/theme";
import { ABOUT_CONTENT } from "../data/content";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "80px" }}>

      <PageHeader
        tag="ABOUT QBIT LABS"
        h1={ABOUT_CONTENT.title}
        accentText=""
        sub={ABOUT_CONTENT.description}
      />

      {/* MISSION */}
      <section style={{ padding: "clamp(3rem, 6vw, 6rem) 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: FD }}>Our Mission</h2>
          <p style={{ fontFamily: FB }}>{ABOUT_CONTENT.mission}</p>
        </div>
      </section>

      {/* VISION */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem",
        background: C.bgPanel
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: FD }}>Our Vision</h2>
          <p style={{ fontFamily: FB }}>{ABOUT_CONTENT.vision}</p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section style={{ padding: "clamp(3rem, 6vw, 6rem) 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: FD }}>
            Key <span style={accent}>Focus Areas</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "1rem"
          }}>
            {ABOUT_CONTENT.highlights.map((item) => (
              <div
                key={item}
                style={{
                  background: C.bgCard,
                  padding: "1rem",
                  border: `1px solid ${C.border}`,
                  borderRadius: "6px"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}