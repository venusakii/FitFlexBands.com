"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1A1B1E] border border-[#00FF7F]/30 rounded-lg p-6 shadow-lg shadow-[#00FF7F]/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#EAEAEA]/90 text-balance">
                  This website uses cookies to improve your experience and analyze site usage. By continuing, you
                  consent to the use of cookies.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleAccept}
                    className="bg-[#00FF7F] hover:bg-[#FFD166] text-[#0C0D0E] font-sans font-semibold whitespace-nowrap"
                  >
                    Accept
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
