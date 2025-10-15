"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook, Youtube, Mail } from "lucide-react"

const socials = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Mail, href: "#" },
]

export function ContactSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-5xl md:text-6xl font-sans font-bold text-center mb-16 uppercase tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FF7F]">Contact</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Input
              placeholder="Your name"
              className="bg-[#1A1B1E] border-[#00FF7F]/20 focus:border-[#00FF7F] text-lg py-6"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#1A1B1E] border-[#00FF7F]/20 focus:border-[#00FF7F] text-lg py-6"
            />
            <Textarea
              placeholder="Your message"
              rows={6}
              className="bg-[#1A1B1E] border-[#00FF7F]/20 focus:border-[#00FF7F] text-lg"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#FF416C] hover:bg-[#FFD166] text-white font-sans font-semibold text-lg py-6"
            >
              Send Message
            </Button>
          </motion.form>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-sans font-semibold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-14 h-14 rounded-full bg-[#1A1B1E] border border-[#00FF7F]/20 flex items-center justify-center hover:border-[#00FF7F] transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-6 h-6 text-[#00FF7F]" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
