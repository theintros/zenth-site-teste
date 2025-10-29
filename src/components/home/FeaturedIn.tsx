"use client";

import { motion } from "framer-motion";

export default function FeaturedIn() {
  const logos = [
    "TechCrunch",
    "Forbes",
    "Bloomberg",
    "Wired",
    "Fast Company",
    "The Verge",
  ];

  return (
    <section className="relative py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Presente em
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors">
                {logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}