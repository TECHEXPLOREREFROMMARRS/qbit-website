import { useState } from "react";
import { FD } from "../styles/theme";
import { PRODUCT_DETAILS } from "../data/content";

export default function ProductDetailPage({ product, onNav }) {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // ✅ SAFETY CHECK
  if (!product) {
    return (
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        No product selected
      </div>
    );
  }

  // ✅ GET DETAILS FROM DATA MAP
  const details = PRODUCT_DETAILS[product.id] || {};

  return (
    <div style={{ paddingTop: "80px" }}>

      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <button onClick={() => onNav("Products")} style={backBtn}>
            ← Back
          </button>

          <h1 style={title}>{product.name}</h1>

          <p style={desc}>
            {details.desc || "High-performance system engineered for mission-critical applications."}
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button style={primaryBtn} onClick={() => setShowForm(true)}>
              Download Brochure ↓
            </button>

            <button style={secondaryBtn} onClick={() => onNav("Contact")}>
              Contact Team
            </button>
          </div>
        </div>
      </section>

      {/* IMAGE + FEATURES */}
      <section style={section}>
        <div style={grid}>
          <img
            src={details.image || "/products/placeholder.jpg"}
            alt={product.name}
            style={img}
          />

          <div>
            <h2 style={heading}>Key Highlights</h2>

            <ul style={list}>
              {(details.features || []).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPEC TABLE */}
      <section style={sectionAlt}>
        <div style={container}>
          <h2 style={heading}>Technical Specifications</h2>

          <table style={table}>
            <tbody>
              {(details.specs || []).map(([k, v]) => (
                <tr key={k}>
                  <td style={tdKey}>{k}</td>
                  <td style={tdVal}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>Applications</h2>

          <p style={desc}>
            Used in defence communication systems, satellite networks,
            industrial automation, and secure high-speed data environments.
          </p>
        </div>
      </section>

      {/* FORM MODAL */}
      {showForm && (
        <div style={modalBg}>
          <div style={modalBox}>
            <button style={closeBtn} onClick={() => setShowForm(false)}>
              ✕
            </button>

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
              style={submitBtn}
              onClick={() => {
                if (!user.name || !user.email) {
                  alert("Fill required fields");
                  return;
                }

                const payload = {
                  name: user.name,
                  email: user.email,
                  phone: user.phone,
                  product: product.name
                };

                fetch("https://script.google.com/macros/s/AKfycbwnbwiJNwsqje6UMalsX9lJV0QzKawFtBKuH9Pv-xe1ucAFmVdwQsbw1M1ksyWKhPGN/exec", {
                  method: "POST",
                  body: JSON.stringify(payload),
                })
                  .then(() => {
                    setShowForm(false);

                    if (product.brochure) {
                      window.open(product.brochure, "_blank");
                    }
                  })
                  .catch((err) => {
                    console.error("Error:", err);
                    alert("Something went wrong");
                  });
              }}
            >
              Submit & Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- STYLES ---------- */

const container = { maxWidth: 1100, margin: "0 auto" };

const hero = {
  padding: "3rem 2rem",
  background:
    "radial-gradient(circle at 30% 20%, rgba(0,200,255,0.1), transparent)"
};

const section = { padding: "3rem 2rem" };

const sectionAlt = {
  padding: "3rem 2rem",
  background: "#050810"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",
  maxWidth: 1100,
  margin: "0 auto"
};

const title = {
  fontFamily: FD,
  fontSize: "2.4rem",
  marginBottom: "1rem"
};

const heading = {
  fontFamily: FD,
  marginBottom: "1rem"
};

const desc = {
  color: "#9aa4b2",
  maxWidth: "600px"
};

const img = {
  width: "100%",
  borderRadius: "10px",
  border: "1px solid rgba(0,200,255,0.2)"
};

const list = {
  color: "#9aa4b2",
  paddingLeft: "20px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "1rem"
};

const tdKey = {
  padding: "8px",
  borderBottom: "1px solid rgba(255,255,255,0.1)"
};

const tdVal = {
  padding: "8px",
  textAlign: "right",
  color: "#00C8FF",
  borderBottom: "1px solid rgba(255,255,255,0.1)"
};

const primaryBtn = {
  background: "#00C8FF",
  border: "none",
  padding: "10px 18px",
  fontWeight: "600",
  borderRadius: "6px",
  cursor: "pointer"
};

const secondaryBtn = {
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  padding: "10px 18px",
  borderRadius: "6px",
  cursor: "pointer"
};

const backBtn = {
  marginBottom: "1rem",
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.2)",
  padding: "6px 12px",
  color: "#fff",
  cursor: "pointer"
};

const modalBg = {
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
};

const modalBox = {
  position: "relative",
  background: "#0b1220",
  padding: "2rem",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "400px"
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "15px",
  background: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "18px",
  cursor: "pointer"
};

const input = {
  width: "100%",
  marginTop: "8px",
  padding: "10px",
  background: "#050810",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
  borderRadius: "6px"
};

const submitBtn = {
  marginTop: "10px",
  background: "#00C8FF",
  border: "none",
  padding: "10px",
  width: "100%",
  cursor: "pointer"
};