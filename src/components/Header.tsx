import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Header(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const BLUE = "#0D6EFD";
  const NAVY = "#0D47A1";
  const GREEN = "#34A853";
  const SOFT_BORDER = "#e6f7ff";

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 backdrop-blur-lg transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      } bg-white/80 border-b`}
      style={{ borderColor: SOFT_BORDER }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔥 GRID LAYOUT FOR EQUAL SPACING */}
        <div className="grid grid-cols-3 items-center h-20">

          {/* ✅ LEFT: LOGO */}
          <div className="flex items-center gap-4 justify-start">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="EeshaGlobalServices"
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <div
                  className="text-lg font-semibold"
                  style={{ color: NAVY }}
                >
                  Eesha Global
                </div>
                <div className="text-sm text-gray-500">Services</div>
              </div>
            </Link>
          </div>

          {/* ✅ CENTER: SEARCH + NAV */}
          <div className="hidden md:flex items-center justify-center gap-8">

            {/* SEARCH */}
            <div
              className="hidden md:flex flex-shrink-0 items-center rounded-lg px-3 py-2 gap-2 bg-white/70 shadow-sm"
              style={{ border: `1px solid ${SOFT_BORDER}` }}
            >
              <Search className="w-4 h-4 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Explore Programs"
                className="bg-transparent outline-none text-base w-40 text-gray-700"
              />
            </div>

            {/* NAV */}
            <nav className="flex items-center gap-8">
              {[
                ["working-professionals", "Working Professionals"],
                ["graduates", "Graduates"],
                ["about", "About"],
                ["services", "Services"],
              ].map(([path, label]) => (
                <Link
                  key={path}
                  to={`/${path}`}
                  className="text-base relative group"
                  style={{ color: NAVY }}
                >
                  <span className="group-hover:text-green-600 transition-colors duration-200">
                    {label}
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <a
                href="/study-abroad"
                className="text-base relative group"
                style={{ color: NAVY }}
              >
                <span className="group-hover:text-green-600">
                  Study Abroad
                </span>
              </a>

              <Link
                to="/visa-services"
                className="text-base relative group"
                style={{ color: NAVY }}
              >
                <span className="group-hover:text-green-600">
                  Visa Services
                </span>
              </Link>
            </nav>
          </div>

          {/* ✅ RIGHT: BUTTON + MOBILE */}
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 rounded-full text-base border transition-all duration-300 hover:bg-blue-50"
              style={{ borderColor: SOFT_BORDER, color: NAVY }}
            >
              Contact Us
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ borderColor: BLUE }}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" style={{ color: NAVY }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: BLUE }} />
              )}
            </button>
          </div>
        </div>

        {/* ✅ MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-slideDown">
            <div className="space-y-2 border-t pt-3">
              {[
                ["working-professionals", "Working Professionals"],
                ["graduates", "Graduates"],
                ["about", "About"],
                ["services", "Services"],
              ].map(([path, label]) => (
                <Link
                  key={path}
                  to={`/${path}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-base hover:bg-green-50 rounded-md"
                  style={{ color: NAVY }}
                >
                  {label}
                </Link>
              ))}

              <a
                href="/study-abroad"
                className="block px-3 py-3 text-base hover:bg-green-50 rounded-md"
                style={{ color: NAVY }}
                onClick={() => setMobileOpen(false)}
              >
                Study Abroad
              </a>

              <Link
                to="/visa-services"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-base hover:bg-green-50 rounded-md"
                style={{ color: NAVY }}
              >
                Visa Services
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-base"
                style={{ color: BLUE }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}