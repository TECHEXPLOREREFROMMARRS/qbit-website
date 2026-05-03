import PageHeader from "../components/PageHeader";
import { C, FD, FB, accent } from "../styles/theme";
import { ABOUT_CONTENT, FOUNDERS } from "../data/content";

export default function AboutPage({ onNav }){
  return (
    <div style={{ paddingTop: "80px", background: "#04070f" }}>

      <PageHeader
        tag="ABOUT QBIT LABS"
        h1={ABOUT_CONTENT.title}
        accentText=""
        sub={ABOUT_CONTENT.description}
      />

      {/* MISSION + VISION */}
      <section style={{
        padding: "clamp(4rem, 8vw, 6rem) 1rem"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>

          <div className="card-hover" style={cardStyle}>
            <h2 style={{ fontFamily: FD }}>Mission</h2>
            <p style={textStyle}>{ABOUT_CONTENT.mission}</p>
          </div>

          <div className="card-hover" style={cardStyle}>
            <h2 style={{ fontFamily: FD }}>Vision</h2>
            <p style={textStyle}>{ABOUT_CONTENT.vision}</p>
          </div>

        </div>
      </section>

      {/* TEAM */}
      <section style={{
        padding: "clamp(3rem, 6vw, 5rem) 1rem"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: FD }}>
            Our <span style={accent}>Engineering Team</span>
          </h2>
          <p style={textStyle}>{ABOUT_CONTENT.team}</p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
            marginTop: "1rem"
          }}>
            {ABOUT_CONTENT.work.map((item) => (
              <div key={item} className="card-hover" style={cardStyle}>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section style={{
        padding: "3rem 1rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: FD,
            textShadow: "0 0 10px rgba(0,200,255,0.3)"
          }}>
            Engineered for <span style={{ color: "#00C8FF" }}>Mission-Critical Systems</span>
          </h2>
          <p style={{
            marginTop: "1rem",
            color: "#9aa4b2",
            lineHeight: 1.6
          }}>
            Qbit Labs develops high-reliability communication and computing systems
            for defence, aerospace, and industrial deployments where failure is not an option.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <h2 style={{
            fontFamily: FD,
            marginBottom: "2rem"
          }}>
            The Minds Behind <span style={accent}>Qbit Labs</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem"
          }}>
            {FOUNDERS.map((f) => (
              <div
                key={f.name}
                className="card-hover"
                style={{
                  ...cardStyle,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "2rem 1.2rem"
                }}
              >
                {/* Fixed-size circle container — forces uniform crop */}
                <div style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(0,200,255,0.4)",
                  flexShrink: 0,
                  marginBottom: "1.2rem",
                  boxShadow: "0 0 20px rgba(0,200,255,0.15)"
                }}>
                  <img
                    src={f.image}
                    alt={f.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top"
                    }}
                  />
                </div>

                <h3 style={{
                  fontFamily: FD,
                  margin: "0 0 0.3rem 0",
                  fontSize: "1rem"
                }}>
                  {f.name}
                </h3>

                <p style={{
                  fontSize: "0.78rem",
                  color: "#00C8FF",
                  marginBottom: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em"
                }}>
                  {f.role}
                </p>

                <p style={{ ...textStyle, fontSize: "0.85rem", margin: 0 }}>
                  {f.desc}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: "4rem 1rem",
        textAlign: "center",
        background: "linear-gradient(180deg, #050810, #04070f)"
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          <h2 style={{
            fontFamily: FD,
            textShadow: "0 0 12px rgba(0,200,255,0.4)"
          }}>
            Request a <span style={{ color: "#00C8FF" }}>Technical Consultation</span>
          </h2>

          <p style={{
            color: "#9aa4b2",
            marginTop: "1rem",
            lineHeight: 1.6
          }}>
            Engage with our engineering team for system integration, deployment strategies,
            or product demonstrations tailored to your requirements.
          </p>

          <button
            onClick={() => onNav("Contact")}
            style={{
              marginTop: "1.5rem",
              background: "linear-gradient(90deg, #00C8FF, #00FFA3)",
              border: "none",
              padding: "14px 26px",
              fontWeight: "600",
              borderRadius: "6px",
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(0,200,255,0.2)"
            }}
          >
            Request Demo →
          </button>

        </div>
      </section>

      {/* FOCUS AREAS */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem",
        background: C.bgPanel
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <h2 style={{ fontFamily: FD }}>
            Focus <span style={accent}>Areas</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "1rem"
          }}>
            {ABOUT_CONTENT.highlights.map((item) => (
              <div key={item} className="card-hover" style={cardStyle}>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

/* REUSABLE STYLES */

const cardStyle = {
  background: "linear-gradient(145deg, #0b1220, #050810)",
  padding: "1.5rem",
  borderRadius: "10px",
  border: "1px solid rgba(0,200,255,0.15)",
  boxShadow: "0 0 20px rgba(0,200,255,0.08)"
};

const textStyle = {
  fontFamily: FB,
  color: "#9aa4b2",
  lineHeight: 1.6
};