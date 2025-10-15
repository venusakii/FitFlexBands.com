"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Users, Award, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower everyone to achieve their fitness goals with high-quality, innovative resistance bands that make training accessible anywhere, anytime.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe in building a supportive community of fitness enthusiasts who inspire and motivate each other to reach new heights.",
    },
    {
      icon: Award,
      title: "Quality Promise",
      description:
        "Every FitFlexBands product undergoes rigorous testing to ensure durability, safety, and performance that exceeds expectations.",
    },
    {
      icon: Heart,
      title: "Wellness Focus",
      description:
        "We're committed to promoting holistic wellness through functional fitness that strengthens both body and mind.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/fit-woman-outdoors.png",
      bio: "Former Olympic athlete with 15+ years in fitness industry",
    },
    {
      name: "Mike Chen",
      role: "Head of Product",
      image: "/man-trainer.jpg",
      bio: "Biomechanics expert and certified strength coach",
    },
    {
      name: "Emma Rodriguez",
      role: "Community Manager",
      image: "/woman-doing-yoga.png",
      bio: "Yoga instructor and wellness advocate",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0C0D0E]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-[#00FF7F] mb-6">About FitFlexBands</h1>
            <p className="text-xl text-[#EAEAEA] max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize fitness training with innovative resistance bands that deliver
              professional results without the need for expensive gym equipment.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E] rounded-2xl p-8 md:p-12 mb-20 border border-[#00FF7F]/20"
          >
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-[#EAEAEA] leading-relaxed">
              <p>
                FitFlexBands was born from a simple observation: traditional gym equipment is expensive, bulky, and
                inaccessible to many people who want to stay fit. Our founder, Sarah Johnson, a former Olympic athlete,
                experienced this firsthand while traveling for competitions.
              </p>
              <p>
                In 2019, she partnered with biomechanics experts and material scientists to create resistance bands that
                could truly replicate gym-quality workouts. After two years of research and development, FitFlexBands
                launched with a revolutionary latex-free formula that provides consistent resistance across all
                movements.
              </p>
              <p>
                Today, we're proud to serve over 10,000 customers worldwide, from professional athletes to fitness
                beginners, all united by the goal of achieving their best physical health on their own terms.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E] rounded-xl p-8 border border-[#00FF7F]/20 hover:border-[#00FF7F]/40 transition-all"
                >
                  <value.icon className="w-12 h-12 text-[#00FF7F] mb-4" />
                  <h3 className="text-2xl font-sans font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-[#EAEAEA] leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#00FF7F]">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#00FF7F] font-medium mb-2">{member.role}</p>
                  <p className="text-[#EAEAEA] text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
