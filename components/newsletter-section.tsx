"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-24 px-4 bg-[#0A0B0C]">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 uppercase tracking-wider">
            Want to become <span className="text-[#00FF7F]">more flexible</span> and{" "}
            <span className="text-[#FF416C]">stronger</span>?
          </h2>
          <p className="text-xl mb-8 text-[#EAEAEA]/80">Subscribe for tips and discounts!</p>

          <motion.form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" whileHover={{ scale: 1.02 }}>
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-[#1A1B1E] border-[#00FF7F]/20 focus:border-[#00FF7F] text-lg py-6"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-[#00FF7F] hover:bg-[#FFD166] text-[#0C0D0E] font-sans font-semibold text-lg px-8 py-6"
            >
              Stretch Your Potential
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
