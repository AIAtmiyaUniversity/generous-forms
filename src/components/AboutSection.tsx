import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import productsShowcase from "@/assets/products-showcase.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-ample-light" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={productsShowcase}
                alt="Ample Extrusion aluminium profiles"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-gradient-blue text-primary-foreground px-6 py-4 rounded-xl shadow-blue">
              <div className="text-3xl font-display font-bold">17+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
              Excellence in Aluminium{" "}
              <span className="text-gradient-blue">Extrusion Manufacturing</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ample Extrusion has installed the most modern extrusion plant of 1450 M.T.
              capacity with completely automated systems. Our backward and forward
              integrations include Ample Aluminium with 650 M.T. capacity, ensuring
              complete control over the production process.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From die making to finished profiles, we maintain stringent quality measures
              using universal tensile testing machines, hardness testers, spectrometers,
              and more. Our people are our biggest strength — excellent management
              practices and unparalleled commitment distinguish us.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Press Line", desc: "1450 TON fully automated" },
                { title: "Die Making", desc: "In-house die shop" },
                { title: "Quality Testing", desc: "Spectrometer & UTI" },
                { title: "Casting", desc: "Hot top casting procedure" },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-primary pl-4">
                  <h4 className="font-display font-semibold text-foreground text-sm">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
