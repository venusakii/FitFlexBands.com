"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const resistanceLevels = [
  { level: 1, color: "#FFD166", name: "Light", weight: "2-5 kg" },
  { level: 2, color: "#00FF7F", name: "Medium", weight: "5-10 kg" },
  { level: 3, color: "#FF416C", name: "Heavy", weight: "10-15 kg" },
  { level: 4, color: "#9D4EDD", name: "Very Heavy", weight: "15-20 kg" },
  { level: 5, color: "#E63946", name: "Extra Heavy", weight: "20+ kg" },
]

export function ResistanceSelector() {
  const [selectedLevel, setSelectedLevel] = useState(2)

  return (
    <section className="py-24 px-4 bg-[#0A0B0C]">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-8 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Choose Your <span className="text-[#00FF7F]">Resistance</span> Level
        </motion.h2>

        <motion.p
          className="text-center text-xl mb-12 text-[#EAEAEA]/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Interactive resistance selection for your fitness goals
        </motion.p>

        <div className="space-y-6">
          {resistanceLevels.map((item) => (
            <motion.div
              key={item.level}
              className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedLevel === item.level ? "border-[#00FF7F] bg-[#00FF7F]/10" : "border-[#EAEAEA]/20 bg-[#1A1B1E]"
              }`}
              onClick={() => setSelectedLevel(item.level)}
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-16 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                    animate={{
                      scaleX: selectedLevel === item.level ? [1, 1.3, 1] : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: selectedLevel === item.level ? Number.POSITIVE_INFINITY : 0,
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-sans font-semibold">{item.name}</h3>
                    <p className="text-[#EAEAEA]/60">{item.weight}</p>
                  </div>
                </div>
                {selectedLevel === item.level && (
                  <motion.div className="text-[#00FF7F] text-2xl" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    ✓
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
