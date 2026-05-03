import { useState, useEffect, useRef } from "react";
import { PRODUCT_CATEGORIES } from "../data/content";

const NAV_ITEMS = ["Home", "About", "Products", "Solutions", "Contact"];

export default function Navbar({ activePage, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowProducts(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setShowProducts(false), 180);
  };

  const handleNav = (item) => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    onNav && onNav(item);
  };

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        transition: "0.3s",
        background: scrolled || mobileOpen ? "rgba(4,7,15,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>

          {/* LOGO */}
          <div onClick={() => handleNav("Home")} style={{ cursor: "pointer" }}>
            <img src="/qbits-logo.png" style={{ height: "42px" }} alt="Qbit Labs" />
          </div>

          {/* DESKTOP NAV */}
          <div className="nav-desktop" style={{ display: "flex", gap: "2rem" }}>
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
                    onClick={() => handleNav(item)}
                    style={navBtn(activePage, item)}
                  >
                    {item}
                  </button>

                  {isProducts && showProducts && (
                    <div
                      className="mega-menu-horizontal"
                      onMouseEnter={handleEnter}
                      onMouseLeave={handleLeave}
                    >
                      <div className="mega-col">
                        {(PRODUCT_CATEGORIES || []).map((cat, index) => (
                          <div
                            key={cat.name}
                            className={`mega-title ${index === activeCategory ? "active" : ""}`}
                            onMouseEnter={() => setActiveCategory(index)}
                            onClick={() => {
                              localStorage.setItem("selectedCategory", cat.name);
                              setShowProducts(false);
                              handleNav("Products");
                            }}
                          >
                            {cat.name}
                          </div>
                        ))}
                      </div>

                      <div className="mega-col">
                        {(PRODUCT_CATEGORIES[activeCategory]?.products || []).map((p) => (
                          <div
                            key={p.id}
                            className="mega-item"
                            onClick={() => {
                              try {
                                localStorage.setItem("selectedProduct", JSON.stringify(p));
                              } catch (e) {
                                console.error("Storage error:", e);
                              }
                              setShowProducts(false);
                              handleNav("ProductDetail");
                            }}
                          >
                            {p.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* HAMBURGER */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "1px solid rgba(0,200,255,0.3)",
              borderRadius: "6px",
              padding: "6px 10px",
              cursor: "pointer",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: mobileOpen ? "#00C8FF" : "#fff",
              transition: "0.3s",
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: "#fff",
              opacity: mobileOpen ? 0 : 1,
              transition: "0.3s"
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px",
              background: mobileOpen ? "#00C8FF" : "#fff",
              transition: "0.3s",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
            }} />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {mobileOpen && (
        <div style={{
          position: "fixed",
          top: "70px",
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(4,7,15,0.98)",
          zIndex: 999,
          overflowY: "auto",
          padding: "1.5rem",
          borderTop: "1px solid rgba(0,200,255,0.1)"
        }}>
          {NAV_ITEMS.map((item) => {
            const isProducts = item === "Products";
            return (
              <div key={item}>
                <div
                  onClick={() => {
                    if (isProducts) {
                      setMobileProductsOpen(!mobileProductsOpen);
                    } else {
                      handleNav(item);
                    }
                  }}
                  style={{
                    padding: "1rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    color: activePage === item ? "#00C8FF" : "#d4dce8",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  {item}
                  {isProducts && (
                    <span style={{
                      color: "#00C8FF",
                      fontSize: "0.8rem",
                      transform: mobileProductsOpen ? "rotate(180deg)" : "none",
                      transition: "0.3s"
                    }}>▼</span>
                  )}
                </div>

                {/* MOBILE PRODUCTS SUBMENU */}
                {isProducts && mobileProductsOpen && (
                  <div style={{ paddingLeft: "1rem", marginBottom: "0.5rem" }}>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <div key={cat.name}>
                        <div
                          style={{
                            padding: "0.6rem 0",
                            color: "#00C8FF",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                            cursor: "pointer"
                          }}
                          onClick={() => {
                            localStorage.setItem("selectedCategory", cat.name);
                            handleNav("Products");
                          }}
                        >
                          {cat.name}
                        </div>
                        {cat.products.map((p) => (
                          <div
                            key={p.id}
                            style={{
                              padding: "0.5rem 0.8rem",
                              color: "#9aa4b2",
                              fontSize: "0.85rem",
                              cursor: "pointer",
                              borderBottom: "1px solid rgba(255,255,255,0.03)"
                            }}
                            onClick={() => {
                              try {
                                localStorage.setItem("selectedProduct", JSON.stringify(p));
                              } catch (e) {}
                              handleNav("ProductDetail");
                            }}
                          >
                            {p.name}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
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