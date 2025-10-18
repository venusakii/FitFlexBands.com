"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0A0B0C] border-t border-[#00FF7F]/20 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#EAEAEA]/60">
          <div className="text-center md:text-left">
            <p>© 2025 FitFlexBands.com. All rights reserved.</p>
            <p className="mt-1">As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#00FF7F] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-[#00FF7F] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
