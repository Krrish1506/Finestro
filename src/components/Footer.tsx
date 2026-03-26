import {
  Shield,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer 
      className="bg-hero-blue-1 text-slate-300 border-t border-blue-900/20 py-12"
      style={{ backgroundColor: '#0052CC' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-blue-600" />
              <span className="text-2xl text-white">
                Finestro
              </span>
            </div>
            <p className="text-sm mb-4">
              Empowering insurance and mutual fund agents with
              unified workflow solutions across India.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("products")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("dashboard")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Agent Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("security")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Security & Compliance
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Health Insurance
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Life Insurance
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                General Insurance
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Mutual Funds
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:support@finestro.in"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@finestro.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+911800123456"
                  className="hover:text-blue-400 transition-colors"
                >
                  1800-123-456
                </a>
              </li>
            </ul>
            <button
              onClick={() => onNavigate("contact")}
              className="mt-4 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; 2025 Finestro. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}