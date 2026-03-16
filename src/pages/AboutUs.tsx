import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Factory,
  Cog,
  Wind,
  CircleDot,
  Flame,
  Thermometer,
  Droplets,
  FlaskConical,
  Shield,
  Wrench,
  Users,
  Award,
} from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import aboutDie from "@/assets/about-die-making.jpg";
import aboutLab from "@/assets/about-quality-lab.jpg";
import factory1 from "@/assets/factory-1.jpg";
import factory2 from "@/assets/factory-2.jpg";

const infrastructure = [
  {
    icon: Factory,
    title: "Press Line",
    desc: "1450 TON pressing capacity with completely automated systems for high-volume, precision extrusion.",
  },
  {
    icon: Cog,
    title: "Handling Systems",
    desc: "Completely automated puller to enhance productivity and ensure consistent quality across all profiles.",
  },
  {
    icon: Wind,
    title: "Belted Run Out Systems",
    desc: "Extruded products are handled on belted run-out systems to minimize handling damages and faults.",
  },
  {
    icon: CircleDot,
    title: "Finish Cut Saw",
    desc: "Extremely high-speed circular saw delivering the finest end cuts, completely free of burring.",
  },
  {
    icon: CircleDot,
    title: "Billet Cutter",
    desc: "High-speed band saw for a fine cut and efficient capacity utilization throughout the process.",
  },
  {
    icon: Flame,
    title: "Billet Heater",
    desc: "Three-zone automatic temperature-controlled billet furnace for even heating, plus a hot log shear for higher recovery and better product quality.",
  },
  {
    icon: Droplets,
    title: "Cooling Systems",
    desc: "Water and air quenching systems cool material rapidly to achieve required hardness levels with appropriate chemical structure.",
  },
  {
    icon: Thermometer,
    title: "Casting & Melting Furnace",
    desc: "Hot top casting procedure ensures high-quality billet casting, resulting in a higher-grade final product.",
  },
];

const qualityItems = [
  "Universal Tensile Testing Machine",
  "Rockwell's & Webster's Hardness Testers",
  "Brinell Hardness Testers",
  "UTI Machine",
  "Spectrometer",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const AboutUs = () => {
  const infraRef = useRef(null);
  const qualityRef = useRef(null);
  const teamRef = useRef(null);
  const infraInView = useInView(infraRef, { once: true, margin: "-80px" });
  const qualityInView = useInView(qualityRef, { once: true, margin: "-80px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src={aboutHero}
          alt="Ample Extrusion manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--ample-dark)/0.85)] to-[hsl(var(--ample-dark)/0.6)]" />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Since 2007
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4"
          >
            About <span className="text-gradient-blue">Ample Extrusion</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            Manufacturing excellence in aluminium extrusion since 2007 — 1450 M.T. capacity, fully automated, quality-driven.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
                Pioneering Aluminium{" "}
                <span className="text-gradient-blue">Extrusion Excellence</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ample Extrusion has installed the most modern extrusion plant of 1450 M.T. capacity along with various other modern handling equipment for producing quality products. Our commitment to precision and innovation sets us apart in the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our backward and forward integrations include our sister firm <strong className="text-foreground">Ample Aluminium</strong> (established 2007) with 650 M.T. capacity, giving us complete control over the supply chain from raw material to finished profiles.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "1450", unit: "M.T.", label: "Press Capacity" },
                  { value: "650", unit: "M.T.", label: "Casting Capacity" },
                  { value: "17+", unit: "Years", label: "Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.unit}</div>
                    <div className="text-sm font-medium text-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={factory1}
                alt="Ample Extrusion factory"
                className="w-full h-56 object-cover rounded-2xl shadow-card-hover"
              />
              <img
                src={factory2}
                alt="Production line"
                className="w-full h-56 object-cover rounded-2xl shadow-card-hover mt-8"
              />
              <img
                src={aboutDie}
                alt="Die making process"
                className="w-full h-56 object-cover rounded-2xl shadow-card-hover -mt-4"
              />
              <img
                src={aboutLab}
                alt="Quality lab"
                className="w-full h-56 object-cover rounded-2xl shadow-card-hover mt-4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 md:py-28 bg-ample-light" ref={infraRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={infraInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
              State-of-the-Art{" "}
              <span className="text-gradient-blue">Manufacturing</span>
            </h2>
            <p className="text-muted-foreground">
              Our fully automated extrusion facility is equipped with the latest technology to deliver consistent, high-quality aluminium profiles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                animate={infraInView ? "visible" : "hidden"}
                variants={fadeUp}
                className="bg-background rounded-xl p-6 shadow-sm hover:shadow-card-hover transition-shadow duration-300 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance & Die Making */}
      <section className="py-20 md:py-28" ref={qualityRef}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={qualityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={aboutLab}
                  alt="Quality testing laboratory"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ample-dark)/0.6)] to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-display font-semibold">ISO Quality Standards</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={qualityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
                Stringent <span className="text-gradient-blue">Quality Control</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our fully equipped laboratory checks the consistency and quality of every product. We implement stringent quality measures using industry-leading testing instruments:
              </p>
              <ul className="space-y-3 mb-8">
                {qualityItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">
                      In-House Die Making
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our factory includes a dedicated die shop, ensuring all dies are manufactured and maintained in-house for maximum security, precision, and rapid turnaround.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20 md:py-28 bg-gradient-blue text-primary-foreground" ref={teamRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Users className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our People, Our Strength
            </h2>
            <p className="text-lg leading-relaxed opacity-90 mb-8">
              Our people are our biggest strength. Excellent management practices, a high level of professionalism, and unparalleled commitment to work are features that distinguish us in a field that is highly competitive.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              {[
                { icon: Award, label: "Excellence" },
                { icon: Shield, label: "Integrity" },
                { icon: Users, label: "Teamwork" },
              ].map((val) => (
                <div key={val.label} className="flex flex-col items-center gap-2">
                  <val.icon className="w-8 h-8 opacity-80" />
                  <span className="text-sm font-semibold opacity-90">{val.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote strip */}
      <section className="py-10 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg md:text-xl font-display font-semibold text-foreground italic">
            "Quality Is Not An Art, It Is A Habit"
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
