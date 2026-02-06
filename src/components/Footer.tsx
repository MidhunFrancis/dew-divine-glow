import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Brand */}
          <div>
            <img 
              src={logo} 
              alt="Dew & Divine Logo" 
              className="h-20 md:h-24 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 max-w-sm">
              Glow at Home – Luxury Salon & Spa Services
            </p>
          </div>

          {/* Right - Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Trivandrum & Kollam, Kerala
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                9746396988
              </span>
              <a
                href="https://www.instagram.com/dew_and_divine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @dew_and_divine
              </a>
            </div>

            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Dew & Divine. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
