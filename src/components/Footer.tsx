import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-ample.png";

const Footer = () => {
  return (
    <footer className="bg-ample-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Ample Extrusion" className="h-12 mb-4 brightness-200" />
            <p className="text-ample-silver text-sm leading-relaxed mb-4">
              Mfg. all types of aluminium profiles — architectural, industrial
              sections & other aluminium products since 2007.
            </p>
            <p className="text-ample-silver text-xs italic">
              "Quality Is Not An Art, It Is A Habit"
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-primary-foreground font-display font-semibold mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {[
                "Sliding Windows",
                "Casement Windows",
                "Casement Doors",
                "Premium Windows",
                "Tilt & Turn",
                "Curtain Wall",
                "Lift & Slide",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-ample-silver text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-display font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Solutions", href: "/solutions" },
                { label: "Infrastructure", href: "/about/infrastructure" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-ample-silver text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-display font-semibold mb-4">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-ample-silver text-sm hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@ampleextrusion.com"
                className="flex items-start gap-3 text-ample-silver text-sm hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                info@ampleextrusion.com
              </a>
              <div className="flex items-start gap-3 text-ample-silver text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Gujarat, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ample-silver text-sm">
            © {new Date().getFullYear()} Ample Extrusion. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-ample-silver text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-ample-silver text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
