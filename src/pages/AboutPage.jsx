import PageHeader from "../components/PageHeader";
import { C, FD, FB, accent } from "../styles/theme";
import { ABOUT_CONTENT, FOUNDERS } from "../data/content";

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
          <p style={{ fontFamily: FB, color: C.textMid }}>
            {ABOUT_CONTENT.mission}
          </p>
        </div>
      </section>

      {/* VISION */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem",
        background: C.bgPanel
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: FD }}>Our Vision</h2>
          <p style={{ fontFamily: FB, color: C.textMid }}>
            {ABOUT_CONTENT.vision}
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: FD }}>Our Team</h2>
          <p style={{ fontFamily: FB, color: C.textMid }}>
            {ABOUT_CONTENT.team}
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem",
        background: C.bgPanel
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: FD }}>
            What We <span style={accent}>Build</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "1rem"
          }}>
            {ABOUT_CONTENT.work.map((item) => (
              <div key={item} style={{
                background: "linear-gradient(145deg, #0b1220, #050810)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid rgba(0,200,255,0.15)"
              }}>
                {item}
              </div>
            ))}
          </div>
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
              <div key={item} style={{
                background: C.bgCard,
                padding: "1rem",
                border: `1px solid ${C.border}`,
                borderRadius: "6px"
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={{
        padding: "4rem 2rem",
        background: C.bg
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <h2 style={{
            fontFamily: FD,
            marginBottom: "2rem"
          }}>
            The Minds Behind <span style={accent}>Qbit Labs</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}>
            {FOUNDERS.map((f) => (
              <div
                key={f.name}
                className="card-hover"
                style={{
                  background: "linear-gradient(145deg, #0b1220, #050810)",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  border: "1px solid rgba(0,200,255,0.15)",
                  textAlign: "center"
                }}
              >
                <img
                  src={f.image}
                  alt={f.name}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "1rem"
                  }}
                />

                <h3 style={{ fontFamily: FD }}>{f.name}</h3>

                <p style={{
                  fontSize: "0.8rem",
                  color: "#00C8FF"
                }}>
                  {f.role}
                </p>

                <p style={{
                  fontSize: "0.85rem",
                  color: C.textMid
                }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}