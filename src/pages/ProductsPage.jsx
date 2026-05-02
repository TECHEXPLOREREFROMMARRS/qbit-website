import { useState } from "react";
import { C, FD } from "../styles/theme";
import { PRODUCTS_DATA } from "../data/content";

export default function ProductsPage({ onNav, setSelectedProduct }) {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section style={{
        padding: "clamp(3rem, 6vw, 5rem) 1rem"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto"
        }}>
          <h1 style={{
            fontFamily: FD,
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            marginBottom: "2rem"
          }}>
            Products
          </h1>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.2rem"
          }}>
            {PRODUCTS_DATA.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => {
                  if (setSelectedProduct) setSelectedProduct(p);
                  onNav("ProductDetail");
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, onClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="product-card"
      onClick={onClick}
      style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        padding: "1.2rem",
        borderRadius: "10px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
        transition: "all 0.3s ease"
      }}
    >
      <h2 style={{
        fontFamily: FD,
        fontSize: "clamp(1.1rem, 3.5vw, 1.4rem)"
      }}>
        {product.name}
      </h2>

      <p style={{
        color: C.textMid,
        fontSize: "0.85rem"
      }}>
        {product.category}
      </p>

      {/* FEATURES */}
      <div>
        {product.features.map((f) => (
          <div key={f} style={{
            fontSize: "0.85rem",
            lineHeight: 1.5
          }}>
            • {f}
          </div>
        ))}
      </div>

      {/* TOGGLE */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        style={{
          marginTop: "0.5rem",
          background: "transparent",
          border: `1px solid ${C.cyan}`,
          color: C.cyan,
          padding: "10px 14px",
          cursor: "pointer",
          borderRadius: "6px",
          fontSize: "0.8rem"
        }}
      >
        {open ? "Hide Specs ▲" : "View Specs ▼"}
      </button>

      {/* SPECS */}
      {open && (
        <table style={{
          width: "100%",
          marginTop: "0.8rem",
          fontSize: "0.8rem"
        }}>
          <tbody>
            {product.specs.map(([k, v]) => (
              <tr key={k}>
                <td style={{ padding: "4px 0" }}>{k}</td>
                <td style={{
                  textAlign: "right",
                  color: C.cyan
                }}>
                  {v}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}