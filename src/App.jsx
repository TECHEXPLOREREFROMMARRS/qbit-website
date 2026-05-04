import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import SolutionsPage from "./pages/SolutionsPage";
import TechnologyPage from "./pages/TechnologyPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import injectFonts from "./utils/injectFonts";

export default function App() {
  const [page, setPage] = useState("Home");

  const [selectedProduct, setSelectedProduct] = useState(() => {
    try {
      const saved = localStorage.getItem("selectedProduct");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    injectFonts();
  }, []);

  // Keep selectedProduct fresh whenever we navigate to ProductDetail
  const handleNav = (targetPage) => {
    if (targetPage === "ProductDetail") {
      try {
        const saved = localStorage.getItem("selectedProduct");
        if (saved) setSelectedProduct(JSON.parse(saved));
      } catch {
        setSelectedProduct(null);
      }
    }
    setPage(targetPage);
  };

  const renderPage = () => {
    switch (page) {
      case "ProductDetail":
        return <ProductDetailPage product={selectedProduct} onNav={handleNav} />;
      case "About":
        return <AboutPage onNav={handleNav} />;
      case "Products":
        return <ProductsPage onNav={handleNav} />;
      case "Solutions":
        return <SolutionsPage onNav={handleNav} />;
      case "Technology":
        return <TechnologyPage onNav={handleNav} />;
      case "Resources":
        return <ResourcesPage onNav={handleNav} />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage onNav={handleNav} />;
    }
  };

  return (
    <>
      <Navbar activePage={page} onNav={handleNav} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer onNav={handleNav} />
    </>
  );
}