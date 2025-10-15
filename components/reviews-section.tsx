"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    name: "Anna K.",
    rating: 5,
    text: "Excellent bands! I use them every day for home workouts. Top quality!",
    date: "March 15, 2024",
  },
  {
    name: "Dmitry M.",
    rating: 5,
    text: "Helped me recover from a knee injury. Highly recommend to everyone!",
    date: "March 8, 2024",
  },
  {
    name: "Elena S.",
    rating: 5,
    text: "Best fitness purchase! Compact, convenient, effective.",
    date: "March 2, 2024",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-24 px-4 bg-[#0A0B0C]">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Customer <span className="text-[#00FF7F]">Reviews</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            className="bg-[#1A1B1E] p-8 rounded-lg border border-[#00FF7F]/20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div className="flex items-center gap-2 mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#00FF7F] text-[#00FF7F]" />
              ))}
            </div>
            <p className="text-xl mb-6 text-pretty">{reviews[currentIndex].text}</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-sans font-semibold text-lg">{reviews[currentIndex].name}</p>
                <p className="text-[#EAEAEA]/60 text-sm">{reviews[currentIndex].date}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#00FF7F] w-8" : "bg-[#EAEAEA]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
