import { useState } from "react";

function ProductCard({ product: p, onModal, onNav }) {
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleDownload = () => {
    if (!p.brochure) {
      alert("No brochure available");
      return;
    }
    window.open(p.brochure, "_blank");
  };

  return (
    <>
      {/* MAIN CARD */}
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
        {/* LOGO */}
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

        {/* TOP BAR */}
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

        {/* TITLE */}
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

        {/* TAGLINE */}
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

        {/* FEATURES */}
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

        {/* DOWNLOAD BUTTON (UPDATED) */}
        <button
          // onClick={() => setShowForm(true)}
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

        {/* SPECS TOGGLE */}
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

        {/* SPECS */}
        {expanded && (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {p.specs.map(([param, val]) => (
                <tr key={param} style={{ borderBottom: `1px solid ${C.borderSub}` }}>
                  <td style={{ fontSize: "0.78rem", padding: "0.4rem 0" }}>{param}</td>
                  <td style={{ textAlign: "right", color: p.color }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* USE CASES */}
        <div>
          <div style={{ fontSize: "0.62rem", marginBottom: "0.5rem" }}>
            USE CASES
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {p.useCases.map((u) => (
              <span key={u} style={{ fontSize: "0.7rem" }}>
                {u}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999
          }}
        >
          <div
            style={{
              background: "#0b1220",
              padding: "2rem",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "400px"
            }}
          >
            <h3>Download Brochure</h3>

            <input
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              style={inputStyle}
            />

            <input
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              style={inputStyle}
            />

            <input
              placeholder="Phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              style={inputStyle}
            />

            <button
              onClick={() => {
                if (!user.name || !user.email) {
                  alert("Please fill required fields");
                  return;
                }

                setShowForm(false);
                handleDownload();
              }}
              style={{
                marginTop: "10px",
                background: "#00C8FF",
                border: "none",
                padding: "10px",
                width: "100%",
                cursor: "pointer"
              }}
            >
              Submit & Download
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: "8px",
  padding: "10px",
  background: "#050810",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
  borderRadius: "6px"
};

export default ProductCard;