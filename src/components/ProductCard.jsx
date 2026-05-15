import { useState } from "react";
import { C, FD, FB } from "../styles/theme";
import { PRODUCT_DETAILS } from "../data/content";


function ProductCard({ product: p, onNav }) {
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
      {/* CARD */}
      <div
        className="product-card"
        style={{
          background: "linear-gradient(145deg, #0b1220, #050810)",
          border: "1px solid rgba(0,200,255,0.15)",
          padding: "1.2rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative"
        }}
      >
        {/* LOGO */}
        <img
          src="/qbits-logo.png"
          alt="Qbit"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "24px",
            opacity: 0.5
          }}
        />

        {/* CATEGORY */}
        <div
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: p.color || "#00C8FF",
            textTransform: "uppercase"
          }}
        >
          {p.category}
        </div>

        {/* NAME */}
        <h3
          style={{
            fontFamily: FD,
            fontSize: "1.2rem",
            margin: 0
          }}
        >
          {p.name}
        </h3>

        {/* TAGLINE */}
       <p style={{ fontSize: "0.85rem", color: "#9aa4b2" }}>
  {PRODUCT_DETAILS[p.id]?.desc || ""}  {/* ✅ */}
</p>

        {/* FEATURES */}
        <div>
          {(p.features || []).map((f) => (
            <div key={f} style={{ fontSize: "0.8rem", color: "#9aa4b2" }}>
              • {f}
            </div>
          ))}
        </div>

        {/* DOWNLOAD BUTTON */}
        <button
          onClick={() => setShowForm(true)}
          style={{
            marginTop: "10px",
            background: "#00C8FF",
            color: "#000",
            padding: "8px",
            fontSize: "0.8rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          Download Brochure ↓
        </button>

        {/* ✅ DETAILS BUTTON (FIXED) */}
        <button
          onClick={() => {
            localStorage.setItem(
              "selectedProduct",
              JSON.stringify(p)
            );
            onNav("ProductDetail");
          }}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            padding: "8px",
            fontSize: "0.8rem",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          View Details →
        </button>

        {/* SPECS TOGGLE */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: "5px",
            background: "transparent",
            border: "1px solid #00C8FF",
            color: "#00C8FF",
            padding: "6px",
            cursor: "pointer",
            fontSize: "0.75rem"
          }}
        >
          {expanded ? "Hide Specs ▲" : "View Specs ▼"}
        </button>

        {/* SPECS */}
        {expanded && (
          <table style={{ width: "100%", fontSize: "0.75rem" }}>
            <tbody>
              {(p.specs || []).map(([k, v]) => (
                <tr key={k}>
                  <td>{k}</td>
                  <td style={{ textAlign: "right", color: "#00C8FF" }}>
                    {v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* USE CASES */}
        <div style={{ fontSize: "0.75rem", color: "#9aa4b2" }}>
          {(p.useCases || []).map((u) => (
            <span key={u} style={{ marginRight: "6px" }}>
              {u}
            </span>
          ))}
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
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
              style={input}
            />

            <input
              placeholder="Email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              style={input}
            />

            <input
              placeholder="Phone"
              value={user.phone}
              onChange={(e) =>
                setUser({ ...user, phone: e.target.value })
              }
              style={input}
            />

            <button
              onClick={() => {
                if (!user.name || !user.email) {
                  alert("Fill required fields");
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

            <button
              onClick={() => setShowForm(false)}
              style={{
                marginTop: "10px",
                background: "transparent",
                border: "1px solid #555",
                padding: "8px",
                width: "100%",
                cursor: "pointer",
                color: "#fff"
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const input = {
  width: "100%",
  marginTop: "8px",
  padding: "10px",
  background: "#050810",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
  borderRadius: "6px"
};

export default ProductCard;