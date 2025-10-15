"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const categories = [
  { name: "Resistance Bands", image: "/resistance-bands-colorful.jpg" },
  { name: "Elastic Wraps", image: "/elastic-fitness-wraps.jpg" },
  { name: "Sports Supports", image: "/sports-joint-support-braces.jpg" },
  { name: "Combo Sets", image: "/fitness-resistance-bands.png" },
  { name: "Cases & Accessories", image: "/fitness-accessories-bag.jpg" },
]

export function CategoriesSection() {
  return (
    <section className="py-24 px-4 bg-[#0A0B0C]">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Product <span className="text-[#FF416C]">Categories</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-[#0C0D0E]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-sans font-semibold uppercase tracking-wide">{category.name}</h3>
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-[#00FF7F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
