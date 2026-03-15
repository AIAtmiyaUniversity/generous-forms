import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Settings, Award } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Complete Solution",
    description:
      "End-to-end solutions from die design to finished profiles. Our in-house die shop and fully equipped lab ensure consistency across all products.",
  },
  {
    icon: Zap,
    title: "Advanced Infrastructure",
    description:
      "1450 TON press with fully automated puller, belted run-out systems, and three-zone temperature-controlled billet furnace for uniform quality.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Universal tensile testing, Rockwell & Webster hardness testers, Brinell testers, UTI machine, and spectrometer for stringent quality control.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Since 2007, serving architects, fabricators, and builders with premium aluminium profiles. Powder coating, wood finish, and anodizing options available.",
  },
];

const WhyChooseUs = () => {
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Why{" "}
            <span className="text-gradient-blue">Ample Extrusion</span>?
          </h2>
          <p className="text-muted-foreground">
            Our commitment to quality, innovation, and customer satisfaction sets us
            apart in the aluminium extrusion industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-blue group-hover:shadow-blue transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
