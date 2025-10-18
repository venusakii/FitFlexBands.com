"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#0C0D0E] text-white">
      {/* Header */}
      <header className="border-b border-[#00FF7F]/20 py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-sans font-bold text-[#00FF7F]">
            FitFlexBands
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-[#0C0D0E] bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 text-[#00FF7F]">Terms of Use</h1>
          <p className="text-[#EAEAEA]/70 mb-12">Last updated: January 2025</p>

          <div className="space-y-8 text-[#EAEAEA]">
            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using FitFlexBands.com, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">2. Use License</h2>
              <p className="leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on FitFlexBands.com for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to reverse engineer any software contained on FitFlexBands.com</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">3. Amazon Affiliate Program</h2>
              <p className="leading-relaxed">
                FitFlexBands.com participates in the Amazon Services LLC Associates Program. Product links on our
                website may redirect you to Amazon.com where purchases can be made. We may earn a commission from
                qualifying purchases at no additional cost to you. All product information, pricing, and availability
                are subject to Amazon's terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">4. Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                The materials on FitFlexBands.com are provided on an 'as is' basis. FitFlexBands makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="leading-relaxed">
                We do not warrant or make any representations concerning the accuracy, likely results, or reliability of
                the use of the materials on our website or otherwise relating to such materials or on any sites linked
                to this site.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">5. Product Information</h2>
              <p className="leading-relaxed">
                While we strive to provide accurate product information and reviews, we cannot guarantee the accuracy,
                completeness, or usefulness of any information provided. Product specifications, availability, and
                pricing are subject to change without notice. Always verify product details on the retailer's website
                before making a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">6. Limitations</h2>
              <p className="leading-relaxed">
                In no event shall FitFlexBands or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on FitFlexBands.com, even if FitFlexBands or an authorized
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">7. Revisions</h2>
              <p className="leading-relaxed">
                The materials appearing on FitFlexBands.com could include technical, typographical, or photographic
                errors. FitFlexBands does not warrant that any of the materials on its website are accurate, complete,
                or current. FitFlexBands may make changes to the materials contained on its website at any time without
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">8. Links</h2>
              <p className="leading-relaxed">
                FitFlexBands has not reviewed all of the sites linked to its website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by FitFlexBands
                of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">9. Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of California, USA,
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">10. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <p className="leading-relaxed mt-4">
                Email: legal@fitflexbands.com
                <br />
                Address: 123 Fitness Street, Wellness City, CA 90210
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
