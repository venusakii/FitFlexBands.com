"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const brands = [
  {
    name: "TheraBand",
    quality: true,
    durability: true,
    grip: true,
    levels: 5,
    recommended: true,
  },
  {
    name: "Fit Simplify",
    quality: true,
    durability: true,
    grip: false,
    levels: 5,
    recommended: false,
  },
  {
    name: "LetsFit",
    quality: true,
    durability: false,
    grip: true,
    levels: 3,
    recommended: false,
  },
  {
    name: "Insonder",
    quality: false,
    durability: false,
    grip: false,
    levels: 3,
    recommended: false,
  },
]

export function ComparisonSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Model <span className="text-[#FF416C]">Comparison</span>
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto">
            <thead>
              <tr className="border-b border-[#00FF7F]/20">
                <th className="text-left p-4 font-sans font-semibold text-lg">Brand</th>
                <th className="text-center p-4 font-sans font-semibold text-lg">Quality</th>
                <th className="text-center p-4 font-sans font-semibold text-lg">Durability</th>
                <th className="text-center p-4 font-sans font-semibold text-lg">Grip</th>
                <th className="text-center p-4 font-sans font-semibold text-lg">Levels</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, index) => (
                <motion.tr
                  key={index}
                  className={`border-b border-[#EAEAEA]/10 ${brand.recommended ? "bg-[#00FF7F]/10" : ""}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(0, 255, 127, 0.05)" }}
                >
                  <td className="p-4">
                    <span className="font-sans font-semibold text-lg">{brand.name}</span>
                    {brand.recommended && (
                      <span className="ml-2 text-xs bg-[#00FF7F] text-[#0C0D0E] px-2 py-1 rounded">BEST</span>
                    )}
                  </td>
                  <td className="text-center p-4">
                    {brand.quality ? (
                      <Check className="w-6 h-6 text-[#00FF7F] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-[#FF416C] mx-auto" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {brand.durability ? (
                      <Check className="w-6 h-6 text-[#00FF7F] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-[#FF416C] mx-auto" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {brand.grip ? (
                      <Check className="w-6 h-6 text-[#00FF7F] mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-[#FF416C] mx-auto" />
                    )}
                  </td>
                  <td className="text-center p-4 font-semibold">{brand.levels}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
