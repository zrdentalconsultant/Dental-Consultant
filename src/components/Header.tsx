import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Our Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="w-full bg-background sticky top-0 z-50 shadow-sm">
        {/* Top Bar  */}
        <div className="border-b border-border">
          <div className="container-wide flex items-center justify-between py-3">

            {/* Logo + Text */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={logo} alt="Dental Consultants Logo" />
              </div>

              <span className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Dental Consultants
              </span>
            </Link>

            {/* Desktop Info */}
            <div className="hidden md:flex items-center gap-8">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    +92 331 6403406, +92 333 8792525
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Call for appointment
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center">
                  <Clock className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Monday - Saturday
                  </p>
                  <p className="text-muted-foreground text-xs">
                    10AM - 9PM
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Navbar */}
        <div className="container-wide">
          <nav className="flex items-center justify-between py-3">

            {/* Menu Links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 pb-1 border-b-2 ${location.pathname === link.path
                      ? "text-primary border-primary"
                      : "text-foreground border-transparent hover:text-primary hover:border-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center gap-4">

              {/* Social Media - Only Instagram and TikTok */}
              <a 
                href="https://www.instagram.com/dentalconsultants/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-600 text-white hover:scale-110 transition"
              >
                <FaInstagram size={14} />
              </a>

              <a 
                href="https://www.tiktok.com/@dental_consultants" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-600 text-white hover:scale-110 transition"
              >
                <FaTiktok size={14} />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/923316403406?text=Hello%20I%20want%20to%20book%20a%20dental%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-green-600 transition"
              >
                <FaWhatsapp size={16} />
                Appointment
              </a>

            </div>

          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <ul className="container-wide py-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-sm font-semibold uppercase py-2 ${location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li className="pt-2 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">
                    +92 331 6403406, +92 333 8792525
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Mon-Sat: 10AM - 9PM
                  </p>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923316403406?text=Hello%20I%20want%20to%20book%20a%20dental%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg animate-pulse hover:scale-110 transition"
      >
        <FaWhatsapp size={26} />
      </a>
    </>
  );
};

export default Header;