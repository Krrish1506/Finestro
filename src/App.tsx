import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProductsPage } from "./components/ProductsPage";
import { DashboardPage } from "./components/DashboardPage";
import { ContactPage } from "./components/ContactPage";
import { SecurityPage } from "./components/SecurityPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { Toaster } from "./components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";

type PageType = "home" | "about" | "products" | "features" | "dashboard" | "contact" | "security";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "products":
        return <ProductsPage />;
      case "features":
        return <FeaturesPage />;
      case "dashboard":
        return <DashboardPage />;
      case "contact":
        return <ContactPage />;
      case "security":
        return <SecurityPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster position="top-right" richColors />
    </div>
  );
}
