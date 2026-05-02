import { C, FD, FB, accent } from "../styles/theme";
import { HERO_CONTENT, VALUE_PROPS, PARTNERS } from "../data/content";

export default function HomePage({ onNav }) {
  return (
    <div style={{ paddingTop: "80px" }}>

      {/* HERO */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem",
        background: C.bg,
        minHeight: "70vh",
        display: "flex",
        alignItems: "center"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%"
        }}>
          <h1 style={{
            fontFamily: FD,
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            lineHeight: 1.2,
            marginBottom: "1rem"
          }}>
            {HERO_CONTENT.heading}
          </h1>

          <p style={{
            fontFamily: FB,
            color: C.textMid,
            maxWidth: 500,
            marginBottom: "1rem",
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)"
          }}>
            {HERO_CONTENT.subheading}
          </p>

          <p style={{
            fontFamily: FB,
            color: C.textMid,
            marginBottom: "2rem",
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)"
          }}>
            {HERO_CONTENT.tagline}
          </p>

          <button
            onClick={() => onNav("Contact")}
            style={{
              background: C.cyan,
              border: "none",
              padding: "12px 20px",
              fontWeight: "bold",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Contact Us →
          </button>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section">
        <div className="partners-track">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={i} className="partner-item">
              <img src={p.logo} alt={p.name} />
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem",
        background: C.bgPanel
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto"
        }}>
          <h2 style={{
            fontFamily: FD,
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            marginBottom: "2rem"
          }}>
            Why <span style={accent}>Qbit Labs</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem"
          }}>
            {VALUE_PROPS.map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  background: C.bgCard,
                  padding: "1.2rem",
                  border: `1px solid ${C.border}`,
                  borderRadius: "8px"
                }}
              >
                <h3 style={{
                  fontFamily: FD,
                  fontSize: "1.1rem"
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontFamily: FB,
                  color: C.textMid,
                  fontSize: "0.9rem"
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}