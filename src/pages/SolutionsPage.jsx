import { C, FD, FB, accent } from "../styles/theme";
import { SOLUTIONS_DATA } from "../data/content";

export default function SolutionsPage({ onNav }) {
  return (
    <div style={{ paddingTop: 64 }}>

      {/* HEADER */}
      <section style={{
        padding: "5rem 2rem",
        background: C.bgPanel
      }}>
        <h1 style={{
          fontFamily: FD,
          fontSize: "3rem"
        }}>
          Problem-First <span style={accent}>Engineering</span>
        </h1>

        <p style={{
          fontFamily: FB,
          color: C.textMid,
          maxWidth: 600
        }}>
          We don’t just build technology — we solve real-world problems across industries.
        </p>
      </section>

      {/* SOLUTIONS */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {SOLUTIONS_DATA.map((sol) => (
            <div
              key={sol.id}
              style={{
                marginBottom: "3rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <h2 style={{
                fontFamily: FD,
                fontSize: "1.8rem",
                marginBottom: "1rem"
              }}>
                {sol.title}
              </h2>

              {/* PROBLEM */}
              <div style={{
                background: "rgba(255,183,0,0.05)",
                borderLeft: "3px solid #FFB700",
                padding: "1rem",
                marginBottom: "1rem"
              }}>
                <strong style={{ color: "#FFB700" }}>Problem:</strong>
                <p style={{ fontFamily: FB }}>{sol.problem}</p>
              </div>

              {/* SOLUTION */}
              <div style={{
                background: "rgba(0,200,255,0.05)",
                borderLeft: `3px solid ${C.cyan}`,
                padding: "1rem"
              }}>
                <strong style={{ color: C.cyan }}>Solution:</strong>
                <p style={{ fontFamily: FB }}>{sol.solution}</p>
              </div>

              {/* CTA */}
              <div style={{ marginTop: "1rem" }}>
                <button
                  onClick={() => onNav("Contact")}
                  style={{
                    background: C.cyan,
                    border: "none",
                    padding: "8px 16px",
                    marginRight: "1rem"
                  }}
                >
                  Request Demo
                </button>

                <button
                  onClick={() => onNav("Products")}
                  style={{
                    background: "transparent",
                    border: `1px solid ${C.cyan}`,
                    color: C.cyan,
                    padding: "8px 16px"
                  }}
                >
                  View Products
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}