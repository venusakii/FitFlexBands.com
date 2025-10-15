"use client"

import { motion } from "framer-motion"
import { Dumbbell, Heart, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Muscle Strengthening",
    description: "Effective workouts for all muscle groups",
  },
  {
    icon: Heart,
    title: "Rehabilitation & Recovery",
    description: "Safe recovery after injuries",
  },
  {
    icon: Zap,
    title: "Versatility",
    description: "Suitable for any fitness level",
  },
  {
    icon: Shield,
    title: "Non-Slip Materials",
    description: "Premium quality and durability",
  },
]

export function WhySection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why <span className="text-[#00FF7F]">FitFlexBands</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-lg bg-[#1A1B1E] border border-[#00FF7F]/20 hover:border-[#00FF7F] transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 rounded-full bg-[#00FF7F]/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-[#00FF7F]" />
              </motion.div>
              <h3 className="text-xl font-sans font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#EAEAEA]/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
