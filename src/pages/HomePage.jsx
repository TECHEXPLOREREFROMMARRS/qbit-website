import { C, FD, FB, accent } from "../styles/theme";
import { HERO_CONTENT, VALUE_PROPS, PARTNERS } from "../data/content";
import HeroCanvas from "../components/HeroCanvas";

export default function HomePage({ onNav }) {
  return (
    <div style={{ paddingTop: "80px" }}>

      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden"
      }}>

        {/* FULL BACKGROUND CANVAS */}
        <HeroCanvas />

        {/* CONTENT OVERLAY */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          padding: "clamp(4rem, 8vw, 8rem) 1rem"
        }}>
          <div style={{ maxWidth: 620 }}>

            {/* TAG */}
            <div style={{
              display: "inline-block",
              background: "rgba(0,200,255,0.08)",
              border: "1px solid rgba(0,200,255,0.25)",
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "0.75rem",
              color: "#00C8FF",
              letterSpacing: "0.1em",
              marginBottom: "1.4rem",
              textTransform: "uppercase"
            }}>
              Defence · Aerospace · Industrial
            </div>

            <h1 style={{
              fontFamily: FD,
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              lineHeight: 1.1,
              marginBottom: "1.2rem",
              textShadow: "0 2px 40px rgba(0,0,0,0.8)"
            }}>
              Engineering the Future of{" "}
              <span style={{
                color: "#00C8FF",
                textShadow: "0 0 30px rgba(0,200,255,0.5)"
              }}>
                Secure Systems
              </span>
            </h1>

            <p style={{
              color: "#b8c2d1",
              maxWidth: 500,
              marginBottom: "0.8rem",
              fontSize: "1.05rem",
              lineHeight: 1.6,
              textShadow: "0 1px 10px rgba(0,0,0,0.8)"
            }}>
              {HERO_CONTENT.subheading}
            </p>

            <p style={{
              color: "#7f8a9a",
              marginBottom: "2.4rem",
              textShadow: "0 1px 10px rgba(0,0,0,0.8)"
            }}>
              {HERO_CONTENT.tagline}
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                onClick={() => onNav("Products")}
                style={{
                  background: "linear-gradient(90deg, #00C8FF, #00a8d8)",
                  border: "none",
                  padding: "13px 26px",
                  fontWeight: "bold",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  boxShadow: "0 0 30px rgba(0,200,255,0.35)",
                  transition: "transform 0.2s"
                }}
                onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                Explore Products →
              </button>

              <button
                onClick={() => onNav("Contact")}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  padding: "13px 26px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  transition: "border-color 0.2s"
                }}
                onMouseOver={e => e.currentTarget.style.borderColor = "rgba(0,200,255,0.5)"}
                onMouseOut={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"}
              >
                Contact Team
              </button>
            </div>

          </div>
        </div>

        {/* BOTTOM FADE */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #04070f)",
          zIndex: 3
        }} />
      </section>

      {/* AUTHORITY */}
      <section style={{
        padding: "4rem 1rem",
        textAlign: "center",
        background: "#04070f"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontFamily: FD
          }}>
            Built for <span style={{ color: "#00C8FF" }}>Critical Environments</span>
          </h2>

          <p style={{
            marginTop: "1rem",
            color: "#9aa4b2",
            fontSize: "1rem",
            lineHeight: 1.6
          }}>
            Our systems are engineered for defence, aerospace, and industrial domains
            where reliability, security, and performance are non-negotiable.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{
        padding: "2rem 0",
        background: "#050810",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div className="partners-track">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <div key={i} className="partner-item">
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  opacity: 0.7,
                  filter: "grayscale(100%)",
                  transition: "0.3s"
                }}
                onMouseOver={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.filter = "grayscale(0%)";
                }}
                onMouseOut={(e) => {
                  e.target.style.opacity = "0.7";
                  e.target.style.filter = "grayscale(100%)";
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={{
        padding: "clamp(3rem, 6vw, 6rem) 1rem",
        background: C.bgPanel
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <h2 style={{
            fontFamily: FD,
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
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
                  background: "linear-gradient(145deg, #0b1220, #050810)",
                  padding: "1.4rem",
                  border: "1px solid rgba(0,200,255,0.15)",
                  borderRadius: "10px"
                }}
              >
                <h3 style={{ fontFamily: FD }}>{item.title}</h3>
                <p style={{
                  fontFamily: FB,
                  color: "#9aa4b2",
                  lineHeight: 1.6
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