import { useState } from "react";
import { C, FD } from "../styles/theme";
import { PRODUCT_CATEGORIES } from "../data/content";

export default function ProductsPage() {
  const [active, setActive] = useState(PRODUCT_CATEGORIES[0].name);

  const selectedCategory =
    PRODUCT_CATEGORIES.find((c) => c.name === active) ||
    PRODUCT_CATEGORIES[0];

  return (
    <div style={{ paddingTop: "80px" }}>
      <section style={{ padding: "2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <h1 style={{ fontFamily: FD }}>Products</h1>

          {/* CATEGORY BUTTONS */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px"
          }}>
            {PRODUCT_CATEGORIES.map((c) => (
              <button
                key={c.name}
                onClick={() => setActive(c.name)}
                style={{
                  padding: "8px 12px",
                  background: active === c.name ? C.cyan : C.bgCard,
                  color: active === c.name ? "#000" : "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* PRODUCTS */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem"
          }}>
            {selectedCategory.products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div style={{
      background: C.bgCard,
      padding: "1rem",
      borderRadius: "10px",
      border: `1px solid ${C.border}`
    }}>
      <h3>{product.name}</h3>

      <button
        onClick={() => window.open(product.brochure, "_blank")}
        style={{
          marginTop: "10px",
          background: C.cyan,
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "6px"
        }}
      >
        Download Brochure ↓
      </button>
    </div>
  );
}