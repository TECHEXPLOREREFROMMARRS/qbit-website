import { useState, useEffect, useRef } from "react";
import { PRODUCT_CATEGORIES } from "../data/content";

const NAV_ITEMS = ["Home", "About", "Products", "Solutions", "Contact"];

export default function Navbar({ activePage, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowProducts(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setShowProducts(false), 180);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        transition: "0.3s",
        background: scrolled ? "rgba(4,7,15,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none"
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative"   /* ← anchor for the dropdown */
        }}
      >
        {/* LOGO */}
        <div onClick={() => onNav && onNav("Home")} style={{ cursor: "pointer" }}>
          <img src="/qbits-logo.png" style={{ height: "42px" }} />
        </div>

        {/* NAV ITEMS */}
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_ITEMS.map((item) => {
            const isProducts = item === "Products";

            return (
              <div
                key={item}
                style={{ position: "relative", display: "flex", alignItems: "center" }}
                onMouseEnter={isProducts ? handleEnter : undefined}
                onMouseLeave={isProducts ? handleLeave : undefined}
              >
                <button
                  onClick={() => onNav && onNav(item)}
                  style={navBtn(activePage, item)}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>

        {/* DROPDOWN — anchored to the full navbar container, not the button */}
        {showProducts && (
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{
              position: "absolute",
              top: "70px",
              right: 0,                              /* ← flush to right edge of container */
              background: "rgba(4,7,15,0.97)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "10px",
              display: "flex",
              gap: "0",
              minWidth: "520px",
              maxWidth: "680px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              zIndex: 999,
              overflow: "hidden"
            }}
          >
            {/* COLUMN 1 — CATEGORIES */}
            <div
              style={{
                minWidth: "160px",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                padding: "0.5rem 0"
              }}
            >
              {(PRODUCT_CATEGORIES || []).map((cat, index) => (
                <div
                  key={cat.name}
                  onMouseEnter={() => setActiveCategory(index)}
                  onClick={() => {
                    localStorage.setItem("selectedCategory", cat.name);
                    setShowProducts(false);
                    onNav && onNav("Products");
                  }}
                  style={{
                    padding: "10px 20px",
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    color: index === activeCategory ? "#00C8FF" : "#9aa4b2",
                    background:
                      index === activeCategory
                        ? "rgba(0,200,255,0.06)"
                        : "transparent",
                    borderLeft:
                      index === activeCategory
                        ? "2px solid #00C8FF"
                        : "2px solid transparent",
                    transition: "0.15s",
                    whiteSpace: "nowrap"
                  }}
                >
                  {cat.name}
                </div>
              ))}
            </div>

            {/* COLUMN 2 — PRODUCTS */}
            <div
              style={{
                flex: 1,
                padding: "0.5rem 0",
                overflowY: "auto",
                maxHeight: "420px"
              }}
            >
              {(PRODUCT_CATEGORIES[activeCategory]?.products || []).map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    try {
                      localStorage.setItem("selectedProduct", JSON.stringify(p));
                    } catch (e) {
                      console.error("Storage error:", e);
                    }
                    setShowProducts(false);
                    onNav && onNav("ProductDetail");
                  }}
                  style={{
                    padding: "9px 20px",
                    fontSize: "0.85rem",
                    color: "#9aa4b2",
                    cursor: "pointer",
                    transition: "0.15s",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#9aa4b2";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const navBtn = (activePage, item) => ({
  background: "none",
  border: "none",
  color: activePage === item ? "#00C8FF" : "#9aa4b2",
  cursor: "pointer",
  fontSize: "0.95rem",
  letterSpacing: "0.04em",
  transition: "0.2s"
});