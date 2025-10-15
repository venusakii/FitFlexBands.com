"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/reviews" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0C0D0E]/95 backdrop-blur-sm border-b border-[#00FF7F]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div className="flex items-center gap-3 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <div className="relative w-10 h-10">
                <Image src="/placeholder-logo.svg" alt="FitFlexBands" fill className="object-contain" />
              </div>
              <span className="text-2xl font-sans font-bold text-[#00FF7F]">FitFlexBands</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.span
                  className="px-5 py-2 rounded-lg bg-transparent border border-[#00FF7F]/30 text-[#EAEAEA] hover:bg-[#00FF7F] hover:text-[#0C0D0E] hover:border-[#00FF7F] transition-all font-medium cursor-pointer inline-block"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#00FF7F]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-[#00FF7F]/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.span
                  className="block py-3 px-4 mx-2 my-2 rounded-lg border border-[#00FF7F]/30 text-[#EAEAEA] hover:bg-[#00FF7F] hover:text-[#0C0D0E] transition-all cursor-pointer text-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
