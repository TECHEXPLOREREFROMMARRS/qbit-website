import { useState } from "react";

function ProductCard({ product: p, onModal, onNav }) {
  const [expanded, setExpanded] = useState(false);

  const handleDownload = () => {
    if (!p.brochure) {
      alert("No brochure available");
      return;
    }

    const link = document.createElement("a");
    link.href = p.brochure;
    link.download = p.brochure.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="product-card"
      style={{
        ...card,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative"
      }}
    >
      <img
  src="/qbits-logo.png"
  alt="Qbit Labs"
  style={{
    position: "absolute",
    top: "10px",
    right: "60px",
    width: "28px",
    opacity: 0.7,
    pointerEvents: "none"
  }}
/>
      {/* Top color bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: p.color,
          opacity: 0.7
        }}
      />

      {/* Title */}
      <div>
        <div
          style={{
            fontFamily: FB,
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: p.color,
            fontWeight: 600,
            marginBottom: "0.25rem"
          }}
        >
          {p.category}
        </div>

        <h3
          style={{
            fontFamily: FD,
            fontSize: "1.5rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: C.text,
            margin: 0
          }}
        >
          {p.name}
        </h3>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: FB,
          fontSize: "0.82rem",
          color: C.textMid,
          lineHeight: 1.6
        }}
      >
        {p.tagline}
      </p>

      {/* Features */}
      <div>
        <div
          style={{
            fontFamily: FB,
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: C.textDim,
            marginBottom: "0.5rem"
          }}
        >
          KEY FEATURES
        </div>

        {p.features.map((f) => (
          <div
            key={f}
            style={{
              fontFamily: FB,
              fontSize: "0.78rem",
              color: C.textMid,
              display: "flex",
              gap: "0.4rem",
              marginBottom: "0.3rem"
            }}
          >
            <span style={{ color: p.color }}>›</span>
            {f}
          </div>
        ))}
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        style={{
          display: "inline-block",
          marginTop: "10px",
          background: "#00C8FF",
          color: "#000",
          padding: "6px 12px",
          fontSize: "0.8rem",
          borderRadius: "4px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer"
        }}
      >
        Download Brochure ↓
      </button>

      {/* Specs Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          marginTop: "0.5rem",
          background: "transparent",
          border: `1px solid ${C.cyan}`,
          color: C.cyan,
          padding: "6px 10px",
          cursor: "pointer"
        }}
      >
        {expanded ? "Hide Specs ▲" : "View Specs ▼"}
      </button>

      {/* Specs Table */}
      {expanded && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {p.specs.map(([param, val]) => (
              <tr
                key={param}
                style={{ borderBottom: `1px solid ${C.borderSub}` }}
              >
                <td
                  style={{
                    fontFamily: FB,
                    fontSize: "0.78rem",
                    color: C.textMid,
                    padding: "0.4rem 0"
                  }}
                >
                  {param}
                </td>
                <td
                  style={{
                    fontFamily: FB,
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: p.color,
                    padding: "0.4rem 0",
                    textAlign: "right"
                  }}
                >
                  {val}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Use Cases */}
      <div>
        <div
          style={{
            fontFamily: FB,
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: C.textDim,
            marginBottom: "0.5rem"
          }}
        >
          USE CASES
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {p.useCases.map((u) => (
            <span
              key={u}
              style={{
                background: "rgba(255,183,0,0.06)",
                border: "1px solid rgba(255,183,0,0.2)",
                borderRadius: 4,
                padding: "0.22rem 0.6rem",
                fontFamily: FB,
                fontSize: "0.7rem",
                color: C.amber
              }}
            >
              {u}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          gap: "0.6rem",
          flexWrap: "wrap",
          marginTop: "auto"
        }}
      >
        <button
          style={{ ...btnP, fontSize: "0.72rem", padding: "0.6rem 1rem" }}
          onClick={() => onModal(p)}
        >
          ↓ Datasheet
        </button>

        <button
          style={{ ...btnG, fontSize: "0.72rem", padding: "0.6rem 1rem" }}
          onClick={() => onNav("Contact")}
        >
          ⬡ Demo
        </button>

        <button
          style={{
            background: "none",
            border: "none",
            fontFamily: FB,
            fontSize: "0.74rem",
            color: C.textMid,
            cursor: "pointer"
          }}
          onClick={() => onNav("Contact")}
        >
          Talk to Expert →
        </button>
      </div>
    </div>
  );
}

export default ProductCard;