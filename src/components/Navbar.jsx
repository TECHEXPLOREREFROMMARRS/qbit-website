import { useState } from "react";
import { C, FD, FB } from "../styles/theme";

const NAV_ITEMS = ["Home", "About", "Products", "Solutions", "Contact"];

export default function Navbar({ activePage, onNav }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        background: "rgba(4,7,15,0.9)",
        borderBottom: `1px solid ${C.border}`
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "1rem",
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* LOGO */}
       <div
  onClick={() => onNav("Home")}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer"
  }}
>
  <img
    src="/qbits-logo.png"
    alt="Qbit Labs"
    style={{
      height: "60px",
      width: "auto",
      objectFit: "contain",
      filter: "drop-shadow(0 0 6px rgba(0,200,255,0.5))",
      transition: "0.3s"
    }}
    onMouseOver={(e) => {
      e.target.style.transform = "scale(1.08)";
      e.target.style.filter = "drop-shadow(0 0 10px rgba(0,200,255,0.8))";
    }}
    onMouseOut={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.filter = "drop-shadow(0 0 6px rgba(0,200,255,0.5))";
    }}
  />

  {/* OPTIONAL TEXT BRAND */}
  <span style={{
    fontFamily: "Orbitron, sans-serif",
    fontSize: "1rem",
    letterSpacing: "0.08em",
    color: "#fff"
  }}>
    
  </span>
</div>

        {/* DESKTOP MENU */}
        <div
          className="nav-desktop"
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "1rem"
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => onNav(item)}
              style={{
                background: "none",
                border: "none",
                color: activePage === item ? C.cyan : C.textMid,
                cursor: "pointer"
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* HAMBURGER */}
        <div
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          style={{
            marginLeft: "auto",
            cursor: "pointer",
            display: "none"
          }}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="nav-mobile"
          style={{
            background: C.bgCard,
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNav(item);
                setOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                color: C.text,
                textAlign: "left",
                fontSize: "1rem"
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}