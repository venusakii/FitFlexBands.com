"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function TopProductSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent"
        animate={{ x: [-1000, 1000] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FF416C] to-transparent"
        animate={{ x: [1000, -1000] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FFD166] text-lg font-sans font-semibold uppercase tracking-wider">
            Top of the Week
          </span>
          <h2 className="text-5xl md:text-6xl font-sans font-bold mt-4 uppercase tracking-wider">
            TheraBand <span className="text-[#00FF7F]">Resistance Bands</span> Set
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/theraband-resistance-bands-set-colorful-profession.jpg"
                alt="TheraBand Resistance Bands Set"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-4 border-[#00FF7F]/50 rounded-lg" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#00FF7F] text-[#00FF7F]" />
              ))}
              <span className="text-lg ml-2">(2,847 reviews)</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#00FF7F] text-xl">✓</span>
                <span className="text-lg">Premium quality latex</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FF7F] text-xl">✓</span>
                <span className="text-lg">Non-slip coating</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FF7F] text-xl">✓</span>
                <span className="text-lg">Wear resistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FF7F] text-xl">✓</span>
                <span className="text-lg">5 resistance levels</span>
              </li>
            </ul>

            <Link href="/reviews">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-[#FF416C] hover:bg-[#FFD166] text-white text-lg px-8 py-6 font-sans font-semibold w-full md:w-auto"
                >
                  Read Review
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
