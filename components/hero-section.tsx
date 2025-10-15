"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background waves */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-64 bg-gradient-to-r from-[#00FF7F]/20 via-[#FF416C]/20 to-transparent blur-3xl"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-full h-64 bg-gradient-to-l from-[#FF416C]/20 via-[#00FF7F]/20 to-transparent blur-3xl"
          animate={{
            x: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        {/* Additional animated elastic band shapes */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-2 bg-[#00FF7F] rounded-full"
          animate={{
            scaleX: [1, 2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-32 h-2 bg-[#FF416C] rounded-full"
          animate={{
            scaleX: [1, 2.5, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-sans text-6xl md:text-8xl font-bold mb-6 tracking-wider uppercase">
            <span className="text-[#00FF7F]">Stretch</span> further.
            <br />
            <span className="text-[#FF416C]">Become</span> stronger.
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-sans font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The best resistance bands and supports for home and gym workouts.
        </motion.p>

        <Link href="/reviews">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-[#00FF7F] text-[#0C0D0E] hover:bg-[#FFD166] text-lg px-8 py-6 font-sans font-semibold transition-all duration-300"
            >
              View Collection
            </Button>
          </motion.div>
        </Link>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-[#00FF7F] rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#00FF7F] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
