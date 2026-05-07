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

  // SHADOW ON SCROLL
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
      } bg-white/90 border-b`}
      style={{ borderColor: SOFT_BORDER }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* MAIN NAVBAR */}
        <div className="flex items-center justify-between gap-3 h-20">

          {/* LEFT - LOGO */}
          <div className="flex items-center gap-2 min-w-0">

            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              {/* LOGO */}
              <img
                src={logo}
                alt="EeshaGlobalServices"
                className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />

              {/* TEXT */}
              <div className="block leading-tight">
                <div
                  className="text-[13px] md:text-lg font-semibold whitespace-nowrap"
                  style={{ color: NAVY }}
                >
                  Eesha Global
                </div>

                <div className="text-[11px] md:text-sm text-gray-500 whitespace-nowrap">
                  Services
                </div>
              </div>
            </Link>
          </div>

          {/* CENTER - SEARCH + NAV */}
          <div className="hidden lg:flex items-center justify-center gap-8 flex-1">

            {/* SEARCH */}
            <div
              className="flex items-center rounded-full px-3 py-2 gap-2 bg-white shadow-sm"
              style={{
                border: `1px solid ${SOFT_BORDER}`,
              }}
            >
              <Search className="w-4 h-4 text-gray-400" />

              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Explore Programs"
                className="bg-transparent outline-none text-sm w-40 text-gray-700"
              />
            </div>

            {/* NAV LINKS */}
            <nav className="flex items-center gap-6">

              {[
                ["working-professionals", "Working Professionals"],
                ["graduates", "Graduates"],
                ["about", "About"],
                ["services", "Services"],
              ].map(([path, label]) => (
                <Link
                  key={path}
                  to={`/${path}`}
                  className="text-sm relative group"
                  style={{ color: NAVY }}
                >
                  <span className="group-hover:text-green-600 transition-colors duration-200">
                    {label}
                  </span>

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <Link
                to="/study-abroad"
                className="text-sm relative group"
                style={{ color: NAVY }}
              >
                <span className="group-hover:text-green-600">
                  Study Abroad
                </span>
              </Link>

              <Link
                to="/visa-services"
                className="text-sm relative group"
                style={{ color: NAVY }}
              >
                <span className="group-hover:text-green-600">
                  Visa Services
                </span>
              </Link>

            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2 rounded-full text-sm border transition-all duration-300 hover:bg-blue-50"
              style={{
                borderColor: SOFT_BORDER,
                color: NAVY,
              }}
            >
              Contact Us
            </Link>

            {/* MOBILE SEARCH */}
            <div
              className="flex lg:hidden items-center rounded-full px-2 py-2 gap-1 bg-white shadow-sm max-w-[140px]"
              style={{
                border: `1px solid ${SOFT_BORDER}`,
              }}
            >
              <Search className="w-4 h-4 text-gray-400" />

              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Explore"
                className="bg-transparent outline-none text-xs w-20 text-gray-700"
              />
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border"
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

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 animate-slideDown">

            <div className="space-y-2 border-t pt-4">

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
                  className="block px-3 py-3 text-sm hover:bg-green-50 rounded-md"
                  style={{ color: NAVY }}
                >
                  {label}
                </Link>
              ))}

              <Link
                to="/study-abroad"
                className="block px-3 py-3 text-sm hover:bg-green-50 rounded-md"
                style={{ color: NAVY }}
                onClick={() => setMobileOpen(false)}
              >
                Study Abroad
              </Link>

              <Link
                to="/visa-services"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm hover:bg-green-50 rounded-md"
                style={{ color: NAVY }}
              >
                Visa Services
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm rounded-md bg-blue-50"
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
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
