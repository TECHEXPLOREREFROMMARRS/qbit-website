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

import injectFonts from "./utils/injectFonts";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  const [page, setPage] = useState("Home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    injectFonts();
  }, []);

  const renderPage = () => {
    switch (page) {
      case "ProductDetail":
  return (
    <ProductDetailPage
      product={selectedProduct}
      onNav={setPage}
    />
  );
      case "About":
        return <AboutPage onNav={setPage} />;
      case "Products":
        return <ProductsPage onNav={setPage} />;
      case "Solutions":
        return <SolutionsPage onNav={setPage} />;
      case "Technology":
        return <TechnologyPage onNav={setPage} />;
      case "Resources":
        return <ResourcesPage onNav={setPage} />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage onNav={setPage} />;
    }
  };

  return (
    <>
      <Navbar activePage={page} onNav={setPage} />

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

      <Footer onNav={setPage} />
    </>
  );
}