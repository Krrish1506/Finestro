import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    { name: "Products", path: "products" },
    { name: "Features", path: "features" },
    { name: "Dashboard", path: "dashboard" },
    { name: "Security", path: "security" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/40 border-b border-cyan-100/50 shadow-ambient">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400/50 via-blue-400/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group hover:opacity-85 transition-all duration-200" onClick={() => onNavigate("home")}>
            <motion.div 
              className="bg-gradient-to-br from-cyan-300 to-blue-600 p-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-hover"
              whileHover={{ scale: 1.08, rotate: -5 }}
            >
              {/* Finestro Logo SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-white" fill="currentColor">
                <path d="M16 2C8.27 2 2 8.27 2 16s6.27 14 14 14 14-6.27 14-14S23.73 2 16 2zm0 2c6.63 0 12 5.37 12 12s-5.37 12-12 12S4 22.63 4 16 9.37 4 16 4zm3-1v6h-2V5h2zm-6 0v6h-2V5h2zm3 8v8h-2v-8h2zm-6 0v8h-2v-8h2z"/>
              </svg>
            </motion.div>
            <motion.div 
              className="flex flex-col leading-none"
              whileHover={{ x: 2 }}
            >
              <span className="text-xl font-black text-blue-600 tracking-tight">Finestro</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  currentPage === item.path
                    ? "text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100/80 shadow-ambient"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50/80"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-200/30">
              <Button onClick={() => onNavigate("dashboard")} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-hover text-white rounded-full px-6 font-semibold shadow-ambient transition-all duration-200 hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6 space-y-2 overflow-hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.path
                      ? "text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100/80 shadow-ambient"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50/80"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button onClick={() => {
                  onNavigate("dashboard");
                  setMobileMenuOpen(false);
                }} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-6 font-semibold shadow-ambient transition-all hover:scale-105">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
