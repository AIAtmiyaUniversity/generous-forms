import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Minus,
  Layers,
  Building2,
  Wrench,
  Cpu,
  Zap,
  Fan,
  Box,
  Cog,
  LayoutGrid,
  Sun,
  Car,
  Factory,
  CircuitBoard,
  Wind,
  Hammer,
} from "lucide-react";
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

const productTypes = [
  {
    icon: Layers,
    title: "Standard Section",
    desc: "Versatile high-quality aluminium extrusion profiles for diverse industries.",
    href: "/products/standard-section",
  },
  {
    icon: Building2,
    title: "Architectural & Construction Profiles",
    desc: "Innovative profiles for modern architectural & construction applications.",
    href: "/products/architectural",
  },
  {
    icon: Wrench,
    title: "Hardware",
    desc: "Premium aluminium extrusions for diverse hardware solutions.",
    href: "/products/hardware",
  },
  {
    icon: Cpu,
    title: "Machine Manufacturing",
    desc: "Customized aluminium solutions for CNC, Textile, Medical & Automation.",
    href: "/products/machine-manufacturing",
  },
  {
    icon: Zap,
    title: "Power & Energy",
    desc: "Aluminium solutions for Solar and Wind energy sectors.",
    href: "/products/power-energy",
  },
  {
    icon: Fan,
    title: "Heat Sinks & Exchangers",
    desc: "Aluminium solutions for Heat Transfer, Heat Sinks & Cryogenic section.",
    href: "/products/heat-sinks",
  },
  {
    icon: Cog,
    title: "Pumps, Motor Body & Pneumatic Profiles",
    desc: "High-quality aluminium for Pumps, Motors, Valves & Pneumatic applications.",
    href: "/products/pumps-motor",
  },
  {
    icon: Box,
    title: "Other Aluminium Sections",
    desc: "Discover versatile aluminium sections for all your needs.",
    href: "/products/other-sections",
  },
];

const solutionItems = [
  {
    icon: Building2,
    title: "Architectural and Structural Solutions",
    desc: "Applications in Building, Construction, Structural, Hardware, Modular Furniture.",
    href: "/solutions/architectural",
  },
  {
    icon: Sun,
    title: "Solar Power and Energy Systems",
    desc: "Applications in Transmission Distribution & Power, Solar Applications.",
    href: "/solutions/solar-power",
  },
  {
    icon: Car,
    title: "Automotive, Aerospace, and Defense",
    desc: "Applications in Automotive & Commercial, Aerospace, Defense.",
    href: "/solutions/automotive",
  },
  {
    icon: Factory,
    title: "Industrial and Machinery Components",
    desc: "Applications in Machine Manufacturing, Forging, Hydraulics & Pneumatics.",
    href: "/solutions/industrial",
  },
  {
    icon: CircuitBoard,
    title: "Electrical and Medical Applications",
    desc: "Applications in Electrical & Electronics, Medical Equipment.",
    href: "/solutions/electrical-medical",
  },
  {
    icon: Wind,
    title: "HVAC and Specialized Systems",
    desc: "Applications in Air Handling Units, AC, Shipping, Railways & Textile.",
    href: "/solutions/hvac",
  },
  {
    icon: Hammer,
    title: "Customized Aluminium Extrusion Profiles",
    desc: "Customized Aluminium Extrusion profiles for all applications.",
    href: "/solutions/custom",
  },
];

const solutionProductTypes = [
  "Standard Section",
  "Architectural & Construction Profiles",
  "Hardware",
  "Machine Manufacturing",
  "Power & Energy",
  "Heat Sinks & Exchangers",
  "Pumps, Motor Body & Pneumatic Profiles",
  "Other Aluminium Sections",
];

const simpleNavItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Company Profile", href: "/about" },
      { label: "Infrastructure", href: "/about#infrastructure" },
      { label: "Quality Assurance", href: "/about#quality" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let hoverTimeout: ReturnType<typeof setTimeout>;

  const handleMouseEnter = (label: string) => {
    clearTimeout(hoverTimeout);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      {/* Price ticker */}
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
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Ample Extrusion" className="h-9 md:h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className="px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg"
            >
              Home
            </Link>

            {/* Products Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg">
                Products
                <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeDropdown === "Products" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "Products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-40 mt-0 pt-2"
                    onMouseEnter={() => handleMouseEnter("Products")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-[780px] bg-background border border-border rounded-xl shadow-lg overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                          Product Types
                        </h3>
                        <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                          {productTypes.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/60 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                                <item.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                  {item.title}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Bottom accent bar */}
                      <div className="h-1 bg-gradient-blue-light" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg">
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeDropdown === "Solutions" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "Solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-60 mt-0 pt-2"
                    onMouseEnter={() => handleMouseEnter("Solutions")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-[900px] bg-background border border-border rounded-xl shadow-lg overflow-hidden">
                      <div className="flex">
                        {/* Solutions list */}
                        <div className="flex-1 p-6">
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                            Our Solutions
                          </h3>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {solutionItems.map((item) => (
                              <Link
                                key={item.title}
                                to={item.href}
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/60 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                                  <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    {item.title}
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Product types sidebar */}
                        <div className="w-64 bg-muted/40 border-l border-border p-6">
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                            Product Types
                          </h3>
                          <div className="space-y-1">
                            {solutionProductTypes.map((label) => (
                              <Link
                                key={label}
                                to="/products"
                                className="block py-2 px-3 text-sm text-foreground hover:text-primary hover:bg-background rounded-md transition-colors font-medium"
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="h-1 bg-gradient-blue-light" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Us dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("About Us")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/about"
                className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg"
              >
                About Us
                <ChevronDown className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeDropdown === "About Us" ? "rotate-180" : ""}`} />
              </Link>

              <AnimatePresence>
                {activeDropdown === "About Us" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-0 pt-2"
                    onMouseEnter={() => handleMouseEnter("About Us")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-56 bg-background border border-border rounded-xl shadow-lg overflow-hidden">
                      {[
                        { label: "Company Profile", href: "/about" },
                        { label: "Infrastructure", href: "/about" },
                        { label: "Quality Assurance", href: "/about" },
                      ].map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-5 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                      <div className="h-0.5 bg-gradient-blue-light" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className="px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg"
            >
              Contact Us
            </Link>
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
              <div className="px-6 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
                <Link to="/" className="block py-2.5 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>

                {/* Mobile Products */}
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-foreground"
                    onClick={() => setMobileExpanded(mobileExpanded === "Products" ? null : "Products")}
                  >
                    Products
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "Products" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "Products" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-1">
                          {productTypes.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              <item.icon className="w-4 h-4 text-primary/60" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Solutions */}
                <div>
                  <button
                    className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-foreground"
                    onClick={() => setMobileExpanded(mobileExpanded === "Solutions" ? null : "Solutions")}
                  >
                    Solutions
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "Solutions" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "Solutions" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-1">
                          {solutionItems.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              <item.icon className="w-4 h-4 text-primary/60" />
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Us */}
                <Link to="/about" className="block py-2.5 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                  About Us
                </Link>

                <Link to="/contact" className="block py-2.5 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                  Contact Us
                </Link>

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
