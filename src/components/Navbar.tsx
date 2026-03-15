import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-ample.png";

const aluminiumPrices = [
  { label: "Aluminium (LME)", price: "₹2,38,500", change: "+1.2%", trend: "up" as const },
  { label: "Aluminium Alloy", price: "₹2,42,800", change: "+0.8%", trend: "up" as const },
  { label: "Aluminium Ingot", price: "₹2,35,200", change: "-0.3%", trend: "down" as const },
  { label: "Billets 6063", price: "₹2,55,000", change: "+1.5%", trend: "up" as const },
  { label: "Billets 6061", price: "₹2,60,500", change: "0.0%", trend: "neutral" as const },
  { label: "Primary Aluminium", price: "₹2,40,100", change: "+0.6%", trend: "up" as const },
];

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Sliding Windows", href: "/products/sliding-windows" },
      { label: "Casement Windows", href: "/products/casement-windows" },
      { label: "Casement Doors", href: "/products/casement-doors" },
      { label: "Premium Windows", href: "/products/premium-windows" },
      { label: "Tilt & Turn", href: "/products/tilt-turn" },
      { label: "Curtain Wall", href: "/products/curtain-wall" },
      { label: "Lift & Slide", href: "/products/lift-slide" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Architectural Solutions", href: "/solutions/architectural" },
      { label: "Industrial Profiles", href: "/solutions/industrial" },
      { label: "Custom Extrusions", href: "/solutions/custom" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Company Profile", href: "/about/profile" },
      { label: "Infrastructure", href: "/about/infrastructure" },
      { label: "Quality Assurance", href: "/about/quality" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Price ticker top bar */}
      <div className="bg-ample-dark text-primary-foreground py-1.5 text-xs hidden lg:block overflow-hidden">
        <div className="relative">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...aluminiumPrices, ...aluminiumPrices].map((item, i) => {
              const TrendIcon = item.trend === "up" ? TrendingUp : item.trend === "down" ? TrendingDown : Minus;
              const trendColor = item.trend === "up" ? "text-green-400" : item.trend === "down" ? "text-red-400" : "text-ample-silver";
              return (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="text-ample-silver font-medium">{item.label}</span>
                  <span className="text-primary-foreground font-semibold">{item.price}/MT</span>
                  <span className={`inline-flex items-center gap-0.5 ${trendColor}`}>
                    <TrendIcon className="w-3 h-3" />
                    {item.change}
                  </span>
                  <span className="text-ample-silver/30 ml-4">│</span>
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-background"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Ample Extrusion" className="h-9 md:h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 mt-0.5" />}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-60 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-5 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-blue text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-blue"
            >
              Enquire Now
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="block py-2.5 text-sm font-medium text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="block mt-4 text-center bg-gradient-blue text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
