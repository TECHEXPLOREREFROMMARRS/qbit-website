// src/components/ProductDetailPage.jsx
import { useState } from "react";
import { FD } from "../styles/theme";
import { PRODUCT_DETAILS } from "../data/content";

/* ─── DESIGN TOKENS ─────────────────────────────────────────────── */
const C = {
  cyan: "#00D4FF",
  cyanDim: "#00A8CC",
  cyanGlow: "rgba(0,212,255,0.15)",
  cyanEdge: "rgba(0,212,255,0.25)",
  bg: "#04080F",
  bgPanel: "#07101C",
  bgCard: "#0A1628",
  textPrimary: "#E8EDF5",
  textMuted: "#6B7E96",
  textSub: "#9AAABB",
  border: "rgba(255,255,255,0.07)",
  borderHi: "rgba(0,212,255,0.3)",
};

/* ─── FONT ───────────────────────────────────────────────────────── */
const MONO = "'IBM Plex Mono', 'Courier New', monospace";
const SANS = "'DM Sans', system-ui, sans-serif";
const DISP = FD || "'Barlow Condensed', sans-serif";

/* ─── KEYFRAMES injected once ────────────────────────────────────── */
if (typeof document !== "undefined" && !document.getElementById("pdp-kf")) {
  const s = document.createElement("style");
  s.id = "pdp-kf";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Barlow+Condensed:wght@600;700&display=swap');

    @keyframes pdp-fade-up {
      from { opacity:0; transform:translateY(20px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes pdp-scan {
      0% { background-position: 0 0; }
      100% { background-position: 0 80px; }
    }
    @keyframes pdp-pulse-border {
      0%,100% { border-color: rgba(0,212,255,0.2); }
      50% { border-color: rgba(0,212,255,0.5); }
    }
    @keyframes pdp-corner-flash {
      0%,100% { opacity:.4; }
      50% { opacity:1; }
    }

    .pdp-hero-anim { animation: pdp-fade-up .6s ease both; }
    .pdp-hero-anim-2 { animation: pdp-fade-up .6s .15s ease both; }
    .pdp-hero-anim-3 { animation: pdp-fade-up .6s .3s ease both; }
    .pdp-spec-row:hover td { background: rgba(0,212,255,0.04) !important; }
    .pdp-btn-primary:hover { background: #00BDE8 !important; }
    .pdp-btn-secondary:hover { background: rgba(255,255,255,0.07) !important; }
    .pdp-back-btn:hover { background: rgba(255,255,255,0.05) !important; }
    .pdp-input:focus {
      outline: none;
      border-color: rgba(0,212,255,0.5) !important;
      box-shadow: 0 0 0 3px rgba(0,212,255,0.08) !important;
    }
    .pdp-submit-btn:hover { background: #00BDE8 !important; }
    .pdp-close-btn:hover { background: rgba(255,255,255,0.1) !important; }
    .pdp-app-item:hover .pdp-app-arrow { color: #00D4FF !important; }

    @media (max-width: 680px) {
      .pdp-overview-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(s);
}

/* ─── HELPERS ────────────────────────────────────────────────────── */
function Corner({ pos = "tl", size = 12, color = C.cyan, style = {} }) {
  const isTop = pos.startsWith("t");
  const isLeft = pos.endsWith("l");
  const base = {
    position: "absolute",
    width: size,
    height: size,
    top: isTop ? 0 : "auto",
    bottom: !isTop ? 0 : "auto",
    left: isLeft ? 0 : "auto",
    right: !isLeft ? 0 : "auto",
    borderTop: isTop ? `1.5px solid ${color}` : "none",
    borderBottom: !isTop ? `1.5px solid ${color}` : "none",
    borderLeft: isLeft ? `1.5px solid ${color}` : "none",
    borderRight: !isLeft ? `1.5px solid ${color}` : "none",
    animation: "pdp-corner-flash 3s ease-in-out infinite",
    ...style,
  };
  return <span aria-hidden style={base} />;
}

function Chip({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: C.cyan,
        border: `1px solid ${C.cyanEdge}`,
        background: C.cyanGlow,
        padding: "3px 10px",
        borderRadius: 2,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: C.cyan,
          flexShrink: 0,
        }}
      />
      {children}
    </span>
  );
}

function SectionHeading({ label, title }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Chip>{label}</Chip>
      <h2
        style={{
          fontFamily: DISP,
          fontSize: "clamp(1.4rem,3vw,1.9rem)",
          fontWeight: 700,
          color: C.textPrimary,
          margin: ".6rem 0 0",
          letterSpacing: ".02em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function StatBadge({ label, value }) {
  return (
    <div
      style={{
        border: `1px solid ${C.borderHi}`,
        borderRadius: 4,
        padding: "14px 20px",
        background: C.bgCard,
        minWidth: 140,
        flex: "1 1 140px",
      }}
    >
      <div
        style={{
          fontFamily: MONO,
          fontSize: 10,
          color: C.textMuted,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: MONO,
          fontSize: "1rem",
          color: C.cyan,
          fontWeight: 500,
        }}
      >
        {value}
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */
export default function ProductDetailPage({ product, onNav }) {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);

  if (!product) {
    return (
      <div
        style={{
          paddingTop: 120,
          textAlign: "center",
          color: C.textMuted,
          fontFamily: SANS,
          background: C.bg,
          minHeight: "100vh",
        }}
      >
        No product selected.
      </div>
    );
  }

  const details = PRODUCT_DETAILS[product.id] || PRODUCT_DETAILS.default || {};

  const title = product.name || details.name || "Product Detail";
  const partNumber = product.partNumber || details.partNumber || "";
  const brochure = product.brochure || details.brochure || "#";
  const image = details.image || product.image || "https://placehold.co/1200x600/0A1628/00D4FF?text=Product+Image";
  const heroLabel =
    details.heroLabel ||
    product.heroLabel ||
    product.category ||
    product.formFactor ||
    "Product Overview";

  const desc =
    details.desc ||
    details.description ||
    product.desc ||
    product.description ||
    "High-performance system engineered for mission-critical applications.";

  const overview = details.overview || details.Overview || "";
  const features = details.features || [];
  const specs = details.specs || [];
  const applications = details.applications || [];
  const stats = details.quickStats || details.stats || [];

  const handleSubmit = async () => {
    if (!user.name || !user.email) {
      alert("Name and email are required.");
      return;
    }

    setSending(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwnbwiJNwsqje6UMalsX9lJV0QzKawFtBKuH9Pv-xe1ucAFmVdwQsbw1M1ksyWKhPGN/exec",
        {
          method: "POST",
          body: JSON.stringify({
            ...user,
            product: title,
            productId: product.id,
          }),
        }
      );

      setShowForm(false);

      if (brochure && brochure !== "#") {
        window.open(brochure, "_blank");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        paddingTop: 80,
        fontFamily: SANS,
        color: C.textPrimary,
      }}
    >
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          padding: "4rem 2rem 3.5rem",
          overflow: "hidden",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "repeating-linear-gradient(0deg,rgba(0,212,255,0.018) 0px,rgba(0,212,255,0.018) 1px,transparent 1px,transparent 80px)",
            animation: "pdp-scan 6s linear infinite",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-30%",
            left: "-10%",
            width: "60%",
            height: "160%",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse,rgba(0,212,255,0.07) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          {onNav && (
            <button
              className="pdp-back-btn"
              onClick={() => onNav("Products")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: "2rem",
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                background: "transparent",
                border: `1px solid ${C.border}`,
                color: C.textSub,
                padding: "6px 14px",
                borderRadius: 3,
                cursor: "pointer",
                transition: "background .2s",
              }}
            >
              ← Back to Products
            </button>
          )}

          <div className="pdp-hero-anim" style={{ marginBottom: ".5rem" }}>
            <Chip>{heroLabel}</Chip>
          </div>

          <h1
            className="pdp-hero-anim"
            style={{
              fontFamily: DISP,
              fontSize: "clamp(2rem,5vw,3.4rem)",
              fontWeight: 700,
              letterSpacing: ".02em",
              margin: ".75rem 0 .4rem",
              lineHeight: 1.1,
              color: C.textPrimary,
            }}
          >
            {title}
          </h1>

          {partNumber ? (
            <div className="pdp-hero-anim" style={{ marginBottom: "1.25rem" }}>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  color: C.textMuted,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}
              >
                Part No. <span style={{ color: C.cyan }}>{partNumber}</span>
              </span>
            </div>
          ) : null}

          <p
            className="pdp-hero-anim-2"
            style={{
              color: C.textSub,
              maxWidth: 620,
              lineHeight: 1.75,
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            {desc}
          </p>

          {stats.length > 0 && (
            <div
              className="pdp-hero-anim-2"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {stats.map((item) => (
                <StatBadge
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          )}

          <div className="pdp-hero-anim-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              className="pdp-btn-primary"
              onClick={() => setShowForm(true)}
              style={{
                background: C.cyan,
                border: "none",
                color: "#04080F",
                padding: "11px 22px",
                fontFamily: MONO,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                borderRadius: 3,
                cursor: "pointer",
                transition: "background .2s",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              ↓ Download Datasheet
            </button>

            <button
              className="pdp-btn-secondary"
              onClick={() => onNav?.("Contact")}
              style={{
                background: "transparent",
                border: `1px solid ${C.border}`,
                color: C.textPrimary,
                padding: "11px 22px",
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                borderRadius: 3,
                cursor: "pointer",
                transition: "background .2s",
              }}
            >
              Contact Team →
            </button>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + IMAGE (side by side) ───────────────────────── */}
      {overview ? (
        <section style={{ padding: "4rem 2rem", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeading label="Overview" title="System Description" />

            <div
              className="pdp-overview-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2.5rem",
                alignItems: "start",
              }}
            >
              {/* Description text */}
              <p
                style={{
                  color: C.textSub,
                  lineHeight: 1.9,
                  fontSize: "1rem",
                  margin: 0,
                  borderLeft: `3px solid ${C.cyan}`,
                  paddingLeft: "1.5rem",
                  textAlign: "justify",
                }}
              >
                {overview}
              </p>

              {/* Product image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: 6,
                  border: `1px solid ${C.borderHi}`,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Corner pos="tl" size={14} />
                <Corner pos="tr" size={14} />
                <Corner pos="bl" size={14} />
                <Corner pos="br" size={14} />

                <div style={{ position: "relative", width: "100%", paddingBottom: "56%" }}>
                  <img
                    src={image}
                    alt={title}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/860x400/0A1628/00D4FF?text=Product+Image";
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      filter: "brightness(.93) contrast(1.04) saturate(0.95)",
                    }}
                  />
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(4,8,15,0.08) 60%, rgba(4,8,15,0.55) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "10px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#22FF66",
                        flexShrink: 0,
                        boxShadow: "0 0 6px #22FF66",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 10,
                        color: "rgba(255,255,255,0.7)",
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                      }}
                    >
                      {title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* ── KEY FEATURES ──────────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading label="Highlights" title="Key Features" />

          {features.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {features.map((f, i) => (
                <li
                  key={typeof f === "string" ? f : `${f.label || "feature"}-${i}`}
                  style={{
                    padding: "12px 0 12px 16px",
                    borderBottom: `1px solid ${C.border}`,
                    borderLeft: `2px solid ${C.cyan}`,
                    marginBottom: 6,
                    animation: `pdp-fade-up .5s ${i * 0.05}s ease both`,
                  }}
                >
                  <span style={{ color: C.textSub, fontSize: ".95rem", lineHeight: 1.6 }}>
                    {typeof f === "string" ? f : f.text || f.label}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: C.textSub, lineHeight: 1.75, margin: 0 }}>
              Features will appear here once they are added to the product data.
            </p>
          )}
        </div>
      </section>

      {/* ── SPEC TABLE ────────────────────────────────────────────── */}
      {specs.length > 0 ? (
        <section style={{ padding: "4rem 2rem", background: C.bgPanel, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeading label="Specifications" title="Technical Data" />
            <div
              style={{
                border: `1px solid ${C.borderHi}`,
                borderRadius: 6,
                overflow: "hidden",
                animation: "pdp-pulse-border 4s ease-in-out infinite",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: C.bgCard }}>
                    <th
                      style={{
                        padding: "10px 10px 10px 16px",
                        fontFamily: MONO,
                        fontSize: 10,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: C.textMuted,
                        textAlign: "left",
                        width: 36,
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      #
                    </th>
                    <th
                      style={{
                        padding: "10px 16px",
                        fontFamily: MONO,
                        fontSize: 10,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: C.textMuted,
                        textAlign: "left",
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      Parameter
                    </th>
                    <th
                      style={{
                        padding: "10px 16px",
                        fontFamily: MONO,
                        fontSize: 10,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: C.textMuted,
                        textAlign: "right",
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map(([k, v], i) => (
                    <tr
                      key={k}
                      className="pdp-spec-row"
                      style={{
                        background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                        transition: "background .15s",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 10px 12px 16px",
                          color: C.textMuted,
                          fontFamily: MONO,
                          fontSize: ".75rem",
                          borderBottom: `1px solid ${C.border}`,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: C.textSub,
                          fontFamily: SANS,
                          fontSize: ".9rem",
                          borderBottom: `1px solid ${C.border}`,
                        }}
                      >
                        {k}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          textAlign: "right",
                          fontFamily: MONO,
                          fontSize: ".85rem",
                          color: C.cyan,
                          borderBottom: `1px solid ${C.border}`,
                        }}
                      >
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {/* ── APPLICATIONS ──────────────────────────────────────────── */}
      {applications.length > 0 ? (
        <section style={{ padding: "4rem 2rem", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionHeading label="Use Cases" title="Applications" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 0,
                border: `1px solid ${C.border}`,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              {applications.map((app, i) => (
                <div
                  key={app}
                  className="pdp-app-item"
                  style={{
                    padding: "12px 16px",
                    borderBottom: `1px solid ${C.border}`,
                    borderRight: i % 2 === 0 ? `1px solid ${C.border}` : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: i % 4 < 2 ? "transparent" : "rgba(255,255,255,0.01)",
                    animation: `pdp-fade-up .5s ${i * 0.06}s ease both`,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: C.cyanDim,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: C.textSub, fontSize: ".9rem", lineHeight: 1.5 }}>
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── OPTIONAL MAKE IN INDIA STRIP ──────────────────────────── */}
      {(details.makeInIndia || details.originText || product.originText) && (
        <section
          style={{
            padding: "2rem",
            borderBottom: `1px solid ${C.border}`,
            background: "rgba(0,212,255,0.03)",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: `2px solid ${C.cyan}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: MONO,
                fontSize: 11,
                color: C.cyan,
                flexShrink: 0,
              }}
            >
              🇮🇳
            </div>
            <div>
              <div
                style={{
                  fontFamily: DISP,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: C.textPrimary,
                  marginBottom: 4,
                }}
              >
                {details.makeInIndia?.title || details.originText || product.originText}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: ".85rem",
                  color: C.textMuted,
                  maxWidth: 700,
                }}
              >
                {details.makeInIndia?.text ||
                  details.originText ||
                  product.originText ||
                  "This product is designed for customization and scalable deployment."}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FOOTER STRIP ─────────────────────────────────────── */}
      <section style={{ padding: "3rem 2rem", background: C.bgPanel }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <h3
              style={{
                fontFamily: DISP,
                fontSize: "1.5rem",
                fontWeight: 700,
                margin: "0 0 .4rem",
                color: C.textPrimary,
              }}
            >
              Ready to integrate?
            </h3>
            <p style={{ color: C.textMuted, fontSize: ".9rem", margin: 0 }}>
              Download the technical brochure or speak directly with our engineering team.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              className="pdp-btn-primary"
              onClick={() => setShowForm(true)}
              style={{
                background: C.cyan,
                border: "none",
                color: "#04080F",
                padding: "11px 22px",
                fontFamily: MONO,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                borderRadius: 3,
                cursor: "pointer",
                transition: "background .2s",
              }}
            >
              ↓ Download Brochure
            </button>

            <button
              className="pdp-btn-secondary"
              onClick={() => onNav?.("Contact")}
              style={{
                background: "transparent",
                border: `1px solid ${C.border}`,
                color: C.textPrimary,
                padding: "11px 22px",
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                borderRadius: 3,
                cursor: "pointer",
                transition: "background .2s",
              }}
            >
              Contact Team →
            </button>
          </div>
        </div>
      </section>

      {/* ── MODAL ────────────────────────────────────────────────── */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(4,8,15,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            padding: "1rem",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowForm(false);
          }}
        >
          <div
            style={{
              position: "relative",
              background: C.bgCard,
              border: `1px solid ${C.borderHi}`,
              borderRadius: 6,
              padding: "2.5rem",
              width: "100%",
              maxWidth: 420,
              animation: "pdp-fade-up .3s ease both",
            }}
          >
            <Corner pos="tl" size={14} />
            <Corner pos="tr" size={14} />
            <Corner pos="bl" size={14} />
            <Corner pos="br" size={14} />

            <button
              className="pdp-close-btn"
              onClick={() => setShowForm(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "transparent",
                border: `1px solid ${C.border}`,
                color: C.textMuted,
                width: 28,
                height: 28,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 16,
                lineHeight: 1,
                transition: "background .2s",
              }}
              aria-label="Close"
            >
              ✕
            </button>

            <Chip>Secure Download</Chip>
            <h3
              style={{
                fontFamily: DISP,
                fontSize: "1.6rem",
                fontWeight: 700,
                color: C.textPrimary,
                margin: ".6rem 0 .4rem",
              }}
            >
              Download Brochure
            </h3>
            <p style={{ color: C.textMuted, fontSize: ".85rem", margin: "0 0 1.75rem" }}>
              Enter your details to access the technical document.
            </p>

            {[
              { key: "name", placeholder: "Full Name *", type: "text" },
              { key: "email", placeholder: "Work Email *", type: "email" },
              { key: "phone", placeholder: "Phone (optional)", type: "tel" },
            ].map(({ key, placeholder, type }) => (
              <div key={key} style={{ marginBottom: "0.75rem" }}>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={user[key]}
                  onChange={(e) => setUser({ ...user, [key]: e.target.value })}
                  className="pdp-input"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "11px 14px",
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    color: C.textPrimary,
                    borderRadius: 3,
                    fontFamily: SANS,
                    fontSize: ".9rem",
                    transition: "border-color .2s, box-shadow .2s",
                  }}
                />
              </div>
            ))}

            <button
              className="pdp-submit-btn"
              onClick={handleSubmit}
              disabled={sending}
              style={{
                marginTop: "0.5rem",
                width: "100%",
                padding: "12px",
                background: sending ? C.cyanDim : C.cyan,
                border: "none",
                borderRadius: 3,
                color: "#04080F",
                fontFamily: MONO,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                cursor: sending ? "default" : "pointer",
                transition: "background .2s",
              }}
            >
              {sending ? "Submitting…" : "Submit & Download →"}
            </button>

            <p
              style={{
                textAlign: "center",
                color: C.textMuted,
                fontSize: 11,
                fontFamily: MONO,
                margin: "1rem 0 0",
                letterSpacing: ".05em",
              }}
            >
              Your data is handled securely and never shared.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}