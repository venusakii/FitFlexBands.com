"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@fitflexbands.com",
      link: "mailto:support@fitflexbands.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Fitness Ave, Los Angeles, CA 90001",
      link: "https://maps.google.com",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0C0D0E]">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-[#00FF7F] mb-6">Get In Touch</h1>
            <p className="text-xl text-[#EAEAEA] max-w-3xl mx-auto leading-relaxed">
              Have questions about our products? Need help with your order? We're here to help!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E] rounded-2xl p-8 border border-[#00FF7F]/20"
            >
              <h2 className="text-3xl font-sans font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#EAEAEA] mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0C0D0E] border border-[#00FF7F]/30 rounded-lg text-white focus:outline-none focus:border-[#00FF7F] transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#EAEAEA] mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0C0D0E] border border-[#00FF7F]/30 rounded-lg text-white focus:outline-none focus:border-[#00FF7F] transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#EAEAEA] mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0C0D0E] border border-[#00FF7F]/30 rounded-lg text-white focus:outline-none focus:border-[#00FF7F] transition-colors"
                    placeholder="Product inquiry"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#EAEAEA] mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0C0D0E] border border-[#00FF7F]/30 rounded-lg text-white focus:outline-none focus:border-[#00FF7F] transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00FF7F] hover:bg-[#00FF7F]/90 text-[#0C0D0E] font-bold py-6 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-sans font-bold text-white mb-6">Contact Information</h2>
                <p className="text-[#EAEAEA] leading-relaxed mb-8">
                  We typically respond within 24 hours during business days. For urgent matters, please call us
                  directly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E] rounded-xl border border-[#00FF7F]/20 hover:border-[#00FF7F]/40 transition-all group"
                  >
                    <div className="p-3 bg-[#00FF7F]/10 rounded-lg group-hover:bg-[#00FF7F]/20 transition-colors">
                      <info.icon className="w-6 h-6 text-[#00FF7F]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{info.title}</h3>
                      <p className="text-[#EAEAEA]">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#1A1B1E] to-[#0C0D0E] rounded-xl p-6 border border-[#00FF7F]/20">
                <h3 className="text-xl font-sans font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-[#EAEAEA]">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-[#00FF7F]">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-[#00FF7F]">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
