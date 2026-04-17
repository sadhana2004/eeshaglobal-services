import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png"; 

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const BLUE = "#0D6EFD";
  const GREEN = "#34A853";

  return (
    <>
      <footer
        className="text-white relative"
        style={{
          background: `linear-gradient(135deg, ${BLUE} 0%, ${GREEN} 100%)`,
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

            {/* LOGO */}
            <div>
              <img
                src={logo}
                alt="EeshaGlobal Services"
                className="h-20 w-auto mb-4 transition-transform duration-300 hover:scale-105"
              />
              <p className="text-white/80 text-sm max-w-xs">
                Your trusted partner in making global education accessible.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  ["Home", "home"],
                  ["About Us", "about"],
                  ["Services", "services"],
                  ["Contact", "contact"],
                ].map(([label, id]) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-white/80 hover:text-white text-sm relative group"
                    >
                      {label}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white group-hover:w-full transition-all"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* DESTINATIONS */}
            <div>
              <h3 className="font-bold text-lg mb-4">Popular Destinations</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="hover:text-white">USA</li>
                <li className="hover:text-white">UK</li>
                <li className="hover:text-white">Canada</li>
                <li className="hover:text-white">Australia</li>
                <li className="hover:text-white">Germany</li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>

              <div className="flex items-center gap-5 mb-6">

                {/* Instagram */}
                <div className="relative group flex items-center justify-center">
                  <a
                    href="https://www.instagram.com/Eeshaglobalservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-pink-500 transition-all duration-300 hover:scale-110 shadow-md flex items-center justify-center"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <span className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
                    Follow us on Instagram
                  </span>
                </div>

                {/* WhatsApp */}
                <div className="relative group flex items-center justify-center">
                  <a
                    href="https://wa.me/917093548281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-green-500 transition-all duration-300 hover:scale-110 shadow-md flex items-center justify-center"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <span className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
                    Chat on WhatsApp
                  </span>
                </div>

                {/* Email */}
                <div className="relative group flex items-center justify-center">
                  <a
                    href="mailto:eeshaglobalservices@gmail.com"
                    className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-blue-500 transition-all duration-300 hover:scale-110 shadow-md flex items-center justify-center"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <span className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
                    Send Email
                  </span>
                </div>

              </div>

              {/* TEXT */}
              <div className="text-sm text-white/90 space-y-1">
                <p>eeshaglobalservices@gmail.com</p>
                <p>+91 7093548281</p>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-white/25 pt-6 text-center text-sm text-white/80">
            © {new Date().getFullYear()} EeshaGlobalServices. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/917093548281"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
};

export default Footer;