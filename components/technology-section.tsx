"use client"

import { motion } from "framer-motion"

export function TechnologySection() {
  return (
    <section className="py-24 px-4 bg-[#0A0B0C]">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technology & <span className="text-[#00FF7F]">Materials</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[#00FF7F]/20 to-[#FF416C]/20 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-64 h-8 bg-gradient-to-r from-[#00FF7F] via-[#FFD166] to-[#FF416C] rounded-full"
              animate={{
                scaleX: [1, 1.5, 1],
                scaleY: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Premium Quality Latex", desc: "Natural material of the highest grade" },
              { title: "Non-Slip Coating", desc: "Reliable grip in any conditions" },
              { title: "Wear Resistance", desc: "Durability up to 10,000+ stretches" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-[#1A1B1E] border border-[#00FF7F]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ borderColor: "#00FF7F" }}
              >
                <h3 className="text-xl font-sans font-semibold mb-2 text-[#00FF7F]">{item.title}</h3>
                <p className="text-[#EAEAEA]/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
