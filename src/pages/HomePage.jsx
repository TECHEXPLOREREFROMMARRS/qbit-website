import { C, FD, FB, accent } from "../styles/theme";
import { HERO_CONTENT, VALUE_PROPS, PARTNERS } from "../data/content";

export default function HomePage({ onNav }) {
  return (
    <div style={{ paddingTop: "80px" }}>

      {/* HERO */}
     <section style={{
  padding: "clamp(4rem, 8vw, 8rem) 1rem",
  background: "radial-gradient(circle at 20% 30%, rgba(0,200,255,0.15), transparent 40%), #04070f",
  minHeight: "80vh",
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
      fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
      lineHeight: 1.1,
      marginBottom: "1rem"
    }}>
      {HERO_CONTENT.heading}
      <br />
      <span style={{ color: "#00C8FF" }}>
        Advanced Defence Systems
      </span>
    </h1>

    <p style={{
      fontFamily: FB,
      color: C.textMid,
      maxWidth: 520,
      marginBottom: "1rem"
    }}>
      {HERO_CONTENT.subheading}
    </p>

    <p style={{
      fontFamily: FB,
      color: "#7f8a9a",
      marginBottom: "2rem"
    }}>
      {HERO_CONTENT.tagline}
    </p>

    {/* BUTTON GROUP */}
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <button
        onClick={() => onNav("Products")}
        style={{
          background: "#00C8FF",
          border: "none",
          padding: "12px 22px",
          fontWeight: "bold",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Explore Products →
      </button>

      <button
        onClick={() => onNav("Contact")}
        style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          padding: "12px 22px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Contact Team
      </button>
    </div>

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
        <div style={{
          maxWidth: 1200,
          margin: "0 auto"
        }}>
          <h2 style={{
            fontFamily: FD,
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            marginBottom: "2rem"
          }}>
            Why <span style={accent}></span>
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
    borderRadius: "10px",
    transition: "all 0.3s ease"
  }}
>
  <h3 style={{
    fontFamily: FD,
    fontSize: "1.2rem"
  }}>
    {item.title}
  </h3>

  <p style={{
    fontFamily: FB,
    color: "#9aa4b2",
    fontSize: "0.9rem",
    lineHeight: 1.5
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