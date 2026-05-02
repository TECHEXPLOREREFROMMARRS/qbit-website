import { C, FD, FB } from "../styles/theme";

export default function ProductDetailPage({ product, onNav }) {
  if (!product) {
    return <div style={{ padding: "2rem" }}>No product selected</div>;
  }

  return (
    <div style={{ paddingTop: 64 }}>

      {/* HEADER */}
      <section style={{
        padding: "4rem 2rem",
        background: C.bgPanel
      }}>
        <h1 style={{
          fontFamily: FD,
          fontSize: "2.5rem"
        }}>
          {product.name}
        </h1>

        <p style={{
          fontFamily: FB,
          color: C.textMid
        }}>
          {product.category}
        </p>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* FEATURES */}
          <h2 style={{ fontFamily: FD }}>Key Features</h2>
          {product.features.map(f => (
            <div key={f} style={{ marginBottom: "0.5rem" }}>
              • {f}
            </div>
          ))}

          {/* SPECS */}
          <h2 style={{ marginTop: "2rem", fontFamily: FD }}>
            Specifications
          </h2>

          <table style={{ width: "100%", marginTop: "1rem" }}>
            <tbody>
              {product.specs.map(([k, v]) => (
                <tr key={k}>
                  <td>{k}</td>
                  <td style={{ textAlign: "right", color: C.cyan }}>
                    {v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* DOWNLOAD */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = product.brochure;
              link.download = product.brochure.split("/").pop();
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            style={{
              marginTop: "2rem",
              background: C.cyan,
              border: "none",
              padding: "12px 20px",
              fontWeight: "bold"
            }}
          >
            Download Brochure ↓
          </button>

          {/* BACK */}
          <div style={{ marginTop: "2rem" }}>
            <button onClick={() => onNav("Products")}>
              ← Back to Products
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}