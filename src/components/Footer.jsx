import { FD, FB } from "../styles/theme";

const SERVICES = [
  "Quantum Computing",
  "AI & ML",
  "Networking & Telecom",
  "Defence & Aerospace",
  "IoT"
];

const QUICK_LINKS = [
  { label: "Contact Us", page: "Contact" },
  { label: "Career", page: "Career" },
  { label: "Privacy Policy", page: "Privacy" }
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    )
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }
];

export default function Footer({ onNav }) {
  return (
    <footer style={{
      background: "linear-gradient(180deg, #04070f 0%, #020509 100%)",
      borderTop: "1px solid rgba(0,200,255,0.12)",
      padding: "4rem 1.5rem 2rem"
    }}>

      {/* TOP GLOW LINE */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.4), transparent)",
        marginBottom: "3rem"
      }} />

      {/* MAIN GRID */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "2.5rem"
      }}>

        {/* COL 1 — BRAND */}
        <div>
          <img src="/qbits-logo.png" alt="Qbit Labs" style={{ height: "48px", marginBottom: "1.2rem" }} />
          <p style={{
            color: "#7f8a9a",
            fontSize: "0.88rem",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
            maxWidth: 260
          }}>
            We offer complex products & solutions encompassing latest and emerging
            technologies in the area of Quantum, AI/ML & emerging protocol.
          </p>

          {/* SOCIALS */}
          <div style={{ display: "flex", gap: "0.8rem" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,200,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9aa4b2",
                  textDecoration: "none",
                  transition: "all 0.3s"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = "#00C8FF";
                  e.currentTarget.style.color = "#00C8FF";
                  e.currentTarget.style.boxShadow = "0 0 12px rgba(0,200,255,0.3)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = "rgba(0,200,255,0.2)";
                  e.currentTarget.style.color = "#9aa4b2";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* COL 2 — ADDRESS */}
        <div>
          <h4 style={{
            fontFamily: FD,
            color: "#00C8FF",
            fontSize: "1rem",
            marginBottom: "1.2rem",
            letterSpacing: "0.05em"
          }}>
            Address
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.1rem", marginTop: "2px" }}>📍</span>
              <p style={addrStyle}>
                <strong style={{ color: "#d4dce8" }}>Office Address:</strong>{" "}
                104, FF, IRIS Tech Park, Tower -A, Sector -48, Sohna Road, Gurgaon-122018
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.1rem", marginTop: "2px" }}>📍</span>
              <p style={addrStyle}>
                <strong style={{ color: "#d4dce8" }}>Registered Address:</strong>{" "}
                D-614, Rohini Heights, Sector 29, Rohini, New Delhi-110085
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
              <span style={{ fontSize: "1rem" }}>✉️</span>
              <a href="mailto:sales@qbitlabs.co.in" style={linkStyle}>
                sales@qbitlabs.co.in
              </a>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
              <span style={{ fontSize: "1rem" }}>📞</span>
              <p style={addrStyle}>+91 124 6900200, +91 124 404873</p>
            </div>
          </div>
        </div>

        {/* COL 3 — SERVICES */}
        <div>
          <h4 style={{
            fontFamily: FD,
            color: "#00C8FF",
            fontSize: "1rem",
            marginBottom: "1.2rem",
            letterSpacing: "0.05em"
          }}>
            Services
          </h4>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {SERVICES.map((s) => (
              <li key={s} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{
                  width: "8px", height: "8px",
                  background: "#00C8FF",
                  borderRadius: "2px",
                  flexShrink: 0,
                  boxShadow: "0 0 6px rgba(0,200,255,0.5)"
                }} />
                <span style={{ color: "#9aa4b2", fontSize: "0.9rem" }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 4 — QUICK LINKS */}
        <div>
          <h4 style={{
            fontFamily: FD,
            color: "#00C8FF",
            fontSize: "1rem",
            marginBottom: "1.2rem",
            letterSpacing: "0.05em"
          }}>
            Quick Links
          </h4>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {QUICK_LINKS.map((l) => (
              <li key={l.label} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{
                  width: "8px", height: "8px",
                  background: "#00C8FF",
                  borderRadius: "2px",
                  flexShrink: 0,
                  boxShadow: "0 0 6px rgba(0,200,255,0.5)"
                }} />
                <span
                  onClick={() => onNav && onNav(l.page)}
                  style={{
                    color: "#9aa4b2",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "color 0.2s"
                  }}
                  onMouseOver={e => e.currentTarget.style.color = "#00C8FF"}
                  onMouseOut={e => e.currentTarget.style.color = "#9aa4b2"}
                >
                  {l.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={{
        maxWidth: 1200,
        margin: "3rem auto 0",
        paddingTop: "1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <p style={{ color: "#4a5568", fontSize: "0.82rem", margin: 0 }}>
          © {new Date().getFullYear()} Qbit Labs. All rights reserved.
        </p>
        <p style={{ color: "#4a5568", fontSize: "0.82rem", margin: 0 }}>
          Built for Mission-Critical Systems
        </p>
      </div>

    </footer>
  );
}

const addrStyle = {
  color: "#7f8a9a",
  fontSize: "0.85rem",
  lineHeight: 1.6,
  margin: 0
};

const linkStyle = {
  color: "#00C8FF",
  fontSize: "0.85rem",
  textDecoration: "none",
  transition: "opacity 0.2s"
};