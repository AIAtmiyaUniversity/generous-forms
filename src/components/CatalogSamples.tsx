import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import catalogSliding from "@/assets/catalog-sliding.jpg";
import catalogCasement from "@/assets/catalog-casement.jpg";
import catalogEuro from "@/assets/catalog-euro.jpg";

const profiles = [
  {
    image: catalogSliding,
    title: "25mm Sliding Window",
    sectionNo: "955388",
    weight: "0.795 kg/m",
    perimeter: "328.15 mm",
    features: [
      "Shutter Depth: 25mm",
      "Glass Range: 4-6mm",
      "Max Height: 2100mm",
      "Hardware: SCHLEGEL GIESSE",
    ],
  },
  {
    image: catalogCasement,
    title: "26mm Sleek Sliding",
    sectionNo: "992012",
    weight: "1.015 kg/m",
    perimeter: "427.68 mm",
    features: [
      "Shutter Depth: 26mm",
      "Sightline: 87mm",
      "2 Track Depth: 50mm",
      "Corner: 90 degree",
    ],
  },
  {
    image: catalogEuro,
    title: "Euro Groove System",
    sectionNo: "C001",
    weight: "Varies",
    perimeter: "Multiple profiles",
    features: [
      "Flexible hardware options",
      "17 standard profiles",
      "Compatible with all series",
      "Precision milled groove",
    ],
  },
];

const CatalogSamples = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-ample-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            From Our Catalogue
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-3 mb-4">
            Sample Profile{" "}
            <span className="text-primary">Specifications</span>
          </h2>
          <p className="text-ample-silver">
            A selection from our extensive catalogue of door & window profiles with
            detailed technical specifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-foreground/5 border border-foreground/10 rounded-xl overflow-hidden group hover:border-primary/40 transition-colors"
            >
              <div className="relative h-48 overflow-hidden bg-foreground/5">
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-primary-foreground mb-3">
                  {profile.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-ample-silver">Section No.</span>
                    <span className="text-primary-foreground font-medium">
                      {profile.sectionNo}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-ample-silver">Weight/Mtr</span>
                    <span className="text-primary-foreground font-medium">
                      {profile.weight}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-ample-silver">Perimeter</span>
                    <span className="text-primary-foreground font-medium">
                      {profile.perimeter}
                    </span>
                  </div>
                </div>
                <div className="border-t border-foreground/10 pt-4">
                  <p className="text-xs text-ample-silver uppercase tracking-wider mb-2 font-medium">
                    Key Features
                  </p>
                  <ul className="space-y-1.5">
                    {profile.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-ample-silver flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSamples;
