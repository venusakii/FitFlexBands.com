"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-5xl md:text-6xl font-sans font-bold mb-4 text-[#00FF7F]">Privacy Policy</h1>
          <p className="text-[#EAEAEA]/70 mb-12">Last updated: January 2025</p>

          <div className="space-y-8 text-[#EAEAEA]">
            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                At FitFlexBands, we collect information that you provide directly to us when you visit our website, make
                a purchase, sign up for our newsletter, or contact us for support.
              </p>
              <p className="leading-relaxed">
                This may include your name, email address, shipping address, payment information, and any other
                information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and shipping updates</li>
                <li>Respond to your questions and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">3. Amazon Affiliate Disclosure</h2>
              <p className="leading-relaxed">
                FitFlexBands is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com. When you click on product links and make a purchase, we may earn a commission at no
                additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">4. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with a small amount of data that may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no method of transmission over the Internet or electronic storage is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">6. Third-Party Services</h2>
              <p className="leading-relaxed">
                We may employ third-party companies and individuals to facilitate our service, provide the service on
                our behalf, perform service-related services, or assist us in analyzing how our service is used. These
                third parties have access to your personal information only to perform these tasks on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-sans font-bold mb-4 text-white">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="leading-relaxed mt-4">
                Email: privacy@fitflexbands.com
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
