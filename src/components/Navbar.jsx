import { useState, useEffect, useRef } from "react";
import { PRODUCT_CATEGORIES } from "../data/content";

const NAV_ITEMS = ["Home", "About", "Products", "Solutions", "Contact"];

export default function Navbar({ activePage, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const timeoutRef = useRef(null);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SAFE OPEN
  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowProducts(true);
  };

  // DELAY CLOSE (NO FLICKER)
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowProducts(false);
    }, 180);
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
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "none"
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
          justifyContent: "space-between"
        }}
      >
        {/* LOGO */}
        <div
          onClick={() => onNav && onNav("Home")}
          style={{ cursor: "pointer" }}
        >
          <img src="/qbits-logo.png" style={{ height: "42px" }} />
        </div>

        {/* NAV ITEMS */}
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_ITEMS.map((item) => {
            const isProducts = item === "Products";

            return (
              <div
                key={item}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center"
                }}
                onMouseEnter={isProducts ? handleEnter : undefined}
                onMouseLeave={isProducts ? handleLeave : undefined}
              >
                {/* BUTTON */}
                <button
                  onClick={() => onNav && onNav(item)}
                  style={navBtn(activePage, item)}
                >
                  {item}
                </button>

                {/* PRODUCTS DROPDOWN */}
                {isProducts && showProducts && (
                  <div
                    className="mega-menu-horizontal"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    {/* COLUMN 1 — CATEGORIES */}
                    <div className="mega-col">
                      {(PRODUCT_CATEGORIES || []).map((cat, index) => (
                        <div
                          key={cat.name}
                          className={`mega-title ${
                            index === activeCategory ? "active" : ""
                          }`}
                          onMouseEnter={() => setActiveCategory(index)}
                          onClick={() => {
                            localStorage.setItem(
                              "selectedCategory",
                              cat.name
                            );
                            setShowProducts(false);
                            onNav && onNav("Products");
                          }}
                        >
                          {cat.name}
                        </div>
                      ))}
                    </div>

                    {/* COLUMN 2 — PRODUCTS */}
                    <div className="mega-col">
                      {(PRODUCT_CATEGORIES[activeCategory]?.products || []).map(
                        (p) => (
                          <div
                            key={p.id}
                            className="mega-item"
                            onClick={() => {
                              try {
                                localStorage.setItem(
                                  "selectedProduct",
                                  JSON.stringify(p)
                                );
                              } catch (e) {
                                console.error("Storage error:", e);
                              }

                              setShowProducts(false);
                              onNav && onNav("ProductDetail");
                            }}
                          >
                            {p.name}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

/* BUTTON STYLE */
const navBtn = (activePage, item) => ({
  background: "none",
  border: "none",
  color: activePage === item ? "#00C8FF" : "#9aa4b2",
  cursor: "pointer",
  fontSize: "0.95rem",
  letterSpacing: "0.04em",
  transition: "0.2s"
});