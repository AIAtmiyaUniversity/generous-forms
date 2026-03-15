import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroExtrusion from "@/assets/hero-extrusion.jpg";
import curtainWall from "@/assets/curtain-wall.jpg";
import casementInstalled from "@/assets/casement-installed.jpg";
import processDie from "@/assets/process-die.jpg";

const categories = [
  {
    title: "Sliding Windows",
    description: "22mm to 50mm systems designed for tropical conditions with full water drainage and minimum air leakage.",
    image: heroExtrusion,
    sizes: ["22mm", "25mm", "26mm", "29mm", "37mm"],
  },
  {
    title: "Casement Windows & Doors",
    description: "30mm to 50mm casement systems with single & multipoint locking for maximum security and performance.",
    image: casementInstalled,
    sizes: ["30mm", "32mm", "40mm", "50mm"],
  },
  {
    title: "Curtain Wall Systems",
    description: "38mm to 67mm structural glazing and semi-unitized curtain wall systems for modern architecture.",
    image: curtainWall,
    sizes: ["38mm", "45mm", "57mm", "67mm"],
  },
  {
    title: "Premium & Specialty",
    description: "Tilt & Turn, Lift & Slide, Bottom Hung, and Pivot window systems for premium applications.",
    image: processDie,
    sizes: ["Tilt & Turn", "Lift & Slide", "Pivot"],
  },
];

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Product Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Explore Our{" "}
            <span className="text-gradient-blue">Aluminium Systems</span>
          </h2>
          <p className="text-muted-foreground">
            Complete range of architectural door & window systems with Euro groove
            compatibility and premium hardware options.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to="/products"
                className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ample-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                    {cat.sizes.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-xs rounded-md font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
