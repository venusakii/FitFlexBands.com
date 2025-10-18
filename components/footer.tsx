"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0A0B0C] border-t border-[#00FF7F]/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-sans font-bold mb-4 text-[#00FF7F]">FitFlexBands</h3>
            <p className="text-[#EAEAEA]/70 text-sm">The best resistance bands for your workouts</p>
          </div>
          
          
          <div>
            <h4 className="font-sans font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-[#EAEAEA]/70">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#00FF7F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-[#00FF7F] transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#EAEAEA]/10 pt-8 text-center text-sm text-[#EAEAEA]/60">
          <p>© 2025 FitFlexBands.com. All rights reserved.</p>
          <p className="mt-2">As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
