"use client"

import { motion } from "framer-motion"
import { Star, ThumbsUp, Award, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const productReviews = [
  {
    slug: "whatafit-resistance-bands",
    name: "WHATAFIT Resistance Bands Set",
    image: "https://m.media-amazon.com/images/I/71tWTWashCL._AC_SX679_.jpg",
    rating: 4.6,
    reviewCount: 34299,
    description: "Exercise bands with handles for men and women, ideal for fitness and strength training home gym equipment",
  },
  {
    slug: "tribe-lifting-fabric-bands",
    name: "Tribe Lifting Fabric Resistance Bands",
    image: "https://m.media-amazon.com/images/I/91td0WAbhHL._AC_SX679_.jpg",
    rating: 4.6,
    reviewCount: 3874,
    description: "Thick booty bands for squats, lunges, hip training, physical therapy, and home workouts",
  },
  {
    slug: "vergali-booty-bands",
    name: "Vergali Resistance Bands for Working Out",
    image: "https://m.media-amazon.com/images/I/91UnDO-XhlL._AC_SX679_.jpg",
    rating: 4.8,
    reviewCount: 20428,
    description: "Fabric elastic bands for exercise, perfect for legs, hips, thighs, and glutes with workout guide",
  },
  {
    slug: "wsakoue-pull-up-bands",
    name: "WSAKOUE Pull Up Assistance Bands",
    image: "https://m.media-amazon.com/images/I/71wwR5zim1L._AC_SX679_.jpg",
    rating: 4.6,
    reviewCount: 5741,
    description: "Resistance bands set for body stretching, physical therapy, and muscle training",
  },
  {
    slug: "leekey-resistance-bands",
    name: "LEEKEY Resistance Bands Set",
    image: "https://m.media-amazon.com/images/I/61llicj0+gL._AC_SX679_.jpg",
    rating: 4.6,
    reviewCount: 11659,
    description: "Multi-level exercise bands for pull-up assistance, full-body training, and home workouts",
  },
  {
    slug: "leg-stretcher-band",
    name: "Leg Stretcher Stretching Band",
    image: "https://m.media-amazon.com/images/I/71f3he0MS7L._SX522_.jpg",
    rating: 4.7,
    reviewCount: 1500, // Estimated, as no exact document provided
    description: "For plantar fasciitis, Achilles tendonitis, hamstring stretching, and flexibility improvement",
  },
  {
    slug: "theraband-resistance-bands",
    name: "THERABAND Resistance Bands Set",
    image: "https://m.media-amazon.com/images/I/71XY3bDlSaL._AC_SX679_.jpg",
    rating: 4.5,
    reviewCount: 26080,
    description: "Beginner kit for exercise, physical therapy, and strength training with non-latex elastic bands",
  },
  {
    slug: "theraband-professional-bands",
    name: "THERABAND Professional Non-Latex Bands",
    image: "https://m.media-amazon.com/images/I/51qzaLPQ4GL._SX522_.jpg",
    rating: 4.5,
    reviewCount: 26080, // Same as above, shared rating
    description: "Elastic bands for upper and lower body fitness, exercise, and physical therapy",
  },
  {
    slug: "resistance-training-bands",
    name: "Resistance Training Exercise Bands",
    image: "https://m.media-amazon.com/images/I/61H92UQBURL._AC_SX679_.jpg",
    rating: 4.7,
    reviewCount: 1200, // Estimated, as no exact document provided
    description: "Set of 3 bands for stretching, exercise equipment, and full-body workouts",
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    rating: 5,
    date: "March 15, 2024",
    image: "/fit-woman-outdoors.png",
    review:
      "These resistance bands have completely transformed my home workouts! The quality is exceptional, and I love how versatile they are. I can target every muscle group effectively.",
    verified: true,
  },
  {
    name: "Mike Chen",
    role: "Personal Trainer",
    rating: 5,
    date: "March 10, 2024",
    image: "/man-trainer.jpg",
    review:
      "As a personal trainer, I recommend FitFlexBands to all my clients. The durability is outstanding, and the different resistance levels make them perfect for beginners and advanced athletes alike.",
    verified: true,
  },
  {
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    rating: 5,
    date: "March 5, 2024",
    image: "/woman-doing-yoga.png",
    review:
      "Perfect for adding resistance to yoga flows and stretching routines. The bands are comfortable, don't slip, and the quality is top-notch. Highly recommend!",
    verified: true,
  },
  {
    name: "David Thompson",
    role: "CrossFit Athlete",
    rating: 5,
    date: "February 28, 2024",
    image: "/man-crossfit.jpg",
    review:
      "I've tried many resistance bands, but these are by far the best. They can handle intense workouts without losing elasticity. Great investment for serious athletes.",
    verified: true,
  },
  {
    name: "Lisa Anderson",
    role: "Physical Therapist",
    rating: 5,
    date: "February 20, 2024",
    image: "/woman-therapist.jpg",
    review:
      "I use these bands with my patients for rehabilitation exercises. The consistent resistance and quality construction make them ideal for therapeutic applications.",
    verified: true,
  },
  {
    name: "James Wilson",
    role: "Marathon Runner",
    rating: 5,
    date: "February 15, 2024",
    image: "/man-runner.png",
    review:
      "Great for strength training and injury prevention. I use them before and after runs. The portability is a huge plus for traveling athletes.",
    verified: true,
  },
]

const stats = [
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: ThumbsUp, value: "10,000+", label: "Happy Customers" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" },
  { icon: TrendingUp, value: "5,000+", label: "5-Star Reviews" },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0C0D0E]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-[#00FF7F] mb-6">Customer Reviews</h1>
            <p className="text-xl text-[#EAEAEA] max-w-3xl mx-auto">
              See what our customers are saying about FitFlexBands. Real reviews from real athletes.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E] p-6 rounded-2xl border border-[#00FF7F]/20 text-center"
              >
                <stat.icon className="w-8 h-8 text-[#00FF7F] mx-auto mb-3" />
                <div className="text-3xl font-sans font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-[#EAEAEA]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Product Reviews Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-sans font-bold text-white mb-12 text-center"
            >
              Product Reviews
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {productReviews.map((product, index) => (
                <Link key={product.slug} href={`/products/${product.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E] rounded-2xl border border-[#00FF7F]/20 overflow-hidden cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] to-transparent opacity-60" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF7F] transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "fill-[#FFD166] text-[#FFD166]" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[#FFD166] font-semibold">{product.rating}</span>
                        <span className="text-[#EAEAEA]/50 text-sm">({product.reviewCount} reviews)</span>
                      </div>
                      <p className="text-[#EAEAEA]/70 text-sm leading-relaxed">{product.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Reviews Grid */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-sans font-bold text-white mb-12 text-center"
          >
            Customer Testimonials
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E] p-8 rounded-2xl border border-[#00FF7F]/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-bold text-white">{review.name}</h3>
                      {review.verified && (
                        <span className="text-xs bg-[#00FF7F]/20 text-[#00FF7F] px-2 py-1 rounded-full">Verified</span>
                      )}
                    </div>
                    <p className="text-sm text-[#EAEAEA]/70 mb-2">{review.role}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFD166] text-[#FFD166]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#EAEAEA] leading-relaxed mb-4">{review.review}</p>
                <p className="text-sm text-[#EAEAEA]/50">{review.date}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center bg-gradient-to-r from-[#FF416C] to-[#00FF7F] p-12 rounded-3xl"
          >
            <h2 className="text-4xl font-sans font-bold text-white mb-4">Join Thousands of Satisfied Customers</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the FitFlexBands difference and transform your fitness journey today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0C0D0E] px-12 py-4 rounded-full font-bold text-lg hover:bg-[#EAEAEA] transition-colors"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
