import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

const PAGE_MAP = {
  Home: HomePage,
  Products: ProductsPage,
};

export default function AnimatedPage({ pageKey, onNav }) {
  const Page = PAGE_MAP[pageKey] || HomePage;
  return <Page onNav={onNav} />;
}