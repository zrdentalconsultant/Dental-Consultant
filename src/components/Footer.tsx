import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";
// Switched to react-icons for better social icon support (Instagram & TikTok)
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/dentalconsultants/"
    },
    {
      Icon: FaTiktok,
      href: "https://www.tiktok.com/@dental_consultants"
    },
  ];

  return (
    <footer className="section-dark">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="w-10 h-10 overflow-hidden">
                  <img src={logo} alt="Dental Consultants Logo" />
                </div>
              </div>
              <span className="font-heading text-xl font-bold">Dental Consultants</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A team of dentists working to ensure you receive the best treatment at affordable prices.
            </p>

            {/* Social Links - Updated to only Instagram and TikTok */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Our Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : item === "Our Team" ? "/team" : `/${item.toLowerCase()}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["General Dentistry", "Implants", "Dental Surgery", "Alignment", "Whitening", "Prosthesis"].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">+92 331 6403406 <br /> +92 333 8792525</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">abdullahramzan825@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">Bhimber Road, Mukabbir University, Model Town, Gujrat.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm opacity-60">
            Copyright © 2026 – Dental Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;