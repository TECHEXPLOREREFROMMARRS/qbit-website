import { useState, useEffect } from "react";
import { PRODUCT_CATEGORIES } from "../data/content";

export default function ProductsPage({ onNav }) {
  const [active, setActive] = useState(
    PRODUCT_CATEGORIES?.[0]?.name || ""
  );

  // ✅ Sync with navbar selection
  useEffect(() => {
    const saved = localStorage.getItem("selectedCategory");
    if (saved) {
      setActive(saved);
    }
  }, []);

  // ✅ Safe selection
  const selectedCategory =
    PRODUCT_CATEGORIES.find((c) => c.name === active) ||
    PRODUCT_CATEGORIES[0] ||
    {};

  return (
    <div style={{ paddingTop: "80px" }}>
      <section style={{ padding: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "2rem"
          }}
        >
          {/* SIDEBAR */}
          <div
            style={{
              borderRight: "1px solid rgba(255,255,255,0.1)",
              paddingRight: "1rem"
            }}
          >
            {(PRODUCT_CATEGORIES || []).map((c) => (
              <div
                key={c.name}
                onClick={() => setActive(c.name)}
                style={{
                  padding: "10px",
                  marginBottom: "8px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  background:
                    active === c.name
                      ? "rgba(0,200,255,0.1)"
                      : "transparent",
                  color: active === c.name ? "#00C8FF" : "#aaa"
                }}
              >
                {c.name}
              </div>
            ))}
          </div>

          {/* PRODUCTS GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.2rem"
            }}
          >
            {(selectedCategory?.products || []).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onNav={onNav}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function ProductCard({ product, onNav }) {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  return (
    <>
      <div
        className="product-card"
        style={{
          background: "linear-gradient(145deg, #0b1220, #050810)",
          padding: "1.4rem",
          borderRadius: "12px",
          border: "1px solid rgba(0,200,255,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          position: "relative"
        }}
      >
        {/* TOP LINE */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "#00C8FF"
          }}
        />

        {/* CATEGORY */}
        <div style={catStyle}>
          {product.category || "SYSTEM"}
        </div>

        {/* NAME */}
        <h3 style={{ fontSize: "1.2rem", margin: 0 }}>
          {product.name}
        </h3>

        {/* DESC */}
        <p style={descStyle}>
          {product.desc ||
            "High-performance system engineered for defence-grade applications."}
        </p>

        {/* ACTIONS */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}>
          
          {/* DOWNLOAD */}
          <button
            onClick={() => setShowForm(true)}
            style={primaryBtn}
          >
            Download
          </button>

          {/* DETAILS */}
          <button
            onClick={() => {
              if (!onNav) return; // ✅ safety
              localStorage.setItem(
                "selectedProduct",
                JSON.stringify(product)
              );
              onNav("ProductDetail");
            }}
            style={secondaryBtn}
          >
            Details
          </button>
        </div>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div style={modalBg}>
          <div style={modalBox}>
            <button
              onClick={() => setShowForm(false)}
              style={closeBtn}
            >
              ✕
            </button>

            <h3>Download Brochure</h3>

            <input
              placeholder="Name"
              value={user.name}
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
              style={inputStyle}
            />

            <input
              placeholder="Email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              style={inputStyle}
            />

            <input
              placeholder="Phone"
              value={user.phone}
              onChange={(e) =>
                setUser({ ...user, phone: e.target.value })
              }
              style={inputStyle}
            />

            <button
              onClick={() => {
                if (!user.name || !user.email) {
                  alert("Fill required fields");
                  return;
                }

                setShowForm(false);
                window.open(product.brochure, "_blank");
              }}
              style={submitBtn}
            >
              Submit & Download
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- STYLES ---------- */

const catStyle = {
  fontSize: "0.65rem",
  letterSpacing: "0.12em",
  color: "#00C8FF",
  fontWeight: "600",
  textTransform: "uppercase"
};

const descStyle = {
  fontSize: "0.8rem",
  color: "#9aa4b2"
};

const primaryBtn = {
  flex: 1,
  background: "#00C8FF",
  color: "#000",
  border: "none",
  padding: "10px",
  fontWeight: "600",
  borderRadius: "6px",
  cursor: "pointer"
};

const secondaryBtn = {
  flex: 1,
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#fff",
  padding: "10px",
  borderRadius: "6px",
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

const inputStyle = {
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