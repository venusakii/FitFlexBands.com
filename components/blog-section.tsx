"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const articles = [
  {
    title: "How to Choose Resistance Level?",
    excerpt: "Complete guide to choosing the right band for your goals",
    image: "/resistance-bands-different-colors-levels.jpg",
  },
  {
    title: "Resistance Bands vs Dumbbells",
    excerpt: "Comparing effectiveness and benefits of each method",
    image: "/resistance-bands-vs-dumbbells-comparison.jpg",
  },
  {
    title: "TOP-10 Exercises for Home",
    excerpt: "Best resistance band exercises for home workouts",
    image: "/home-workout-resistance-bands-exercises.jpg",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Blog & <span className="text-[#FF416C]">Tips</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-2xl font-sans font-semibold mb-2 group-hover:text-[#00FF7F] transition-colors">
                {article.title}
              </h3>
              <p className="text-[#EAEAEA]/70">{article.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
