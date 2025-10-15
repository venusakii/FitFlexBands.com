"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const athletes = [
  { name: "Maria", image: "/woman-athlete-training-with-resistance-bands.jpg" },
  { name: "Alex", image: "/man-athlete-workout-resistance-bands.jpg" },
  { name: "Irina", image: "/female-fitness-trainer-resistance-bands.jpg" },
  { name: "Sergey", image: "/male-fitness-enthusiast-resistance-bands.jpg" },
  { name: "Olga", image: "/woman-home-workout-resistance-bands.jpg" },
  { name: "Paul", image: "/man-gym-training-resistance-bands.jpg" },
]

export function GallerySection() {
  return (
    <section className="py-24 px-4 bg-[#0A0B0C]">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Athlete <span className="text-[#00FF7F]">Gallery</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {athletes.map((athlete, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={athlete.image || "/placeholder.svg"} alt={athlete.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xl font-sans font-semibold text-[#00FF7F]">{athlete.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
