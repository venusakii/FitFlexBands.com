"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

const videos = [
  { title: "5 Exercises with TheraBand", duration: "8:45" },
  { title: "How to Properly Support Joints", duration: "6:20" },
  { title: "Full Body Workout in 15 Minutes", duration: "15:30" },
]

export function TrainingSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How to <span className="text-[#FF416C]">Train</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-[#00FF7F] flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Play className="w-10 h-10 text-[#0C0D0E] ml-1" fill="currentColor" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#0C0D0E]/80 px-3 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-sans font-semibold">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
