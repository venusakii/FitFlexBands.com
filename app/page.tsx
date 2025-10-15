import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { CategoriesSection } from "@/components/categories-section"
import { TopProductSection } from "@/components/top-product-section"
import { ResistanceSelector } from "@/components/resistance-selector"
import { TechnologySection } from "@/components/technology-section"
import { TrainingSection } from "@/components/training-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ComparisonSection } from "@/components/comparison-section"
import { GallerySection } from "@/components/gallery-section"
import { BlogSection } from "@/components/blog-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0C0D0E] text-[#EAEAEA]">
        <HeroSection />
        <WhySection />
        <CategoriesSection />
        <TopProductSection />
        <ResistanceSelector />
        <TechnologySection />
        <TrainingSection />
        <ReviewsSection />
        <ComparisonSection />
        <GallerySection />
        <BlogSection />
        <NewsletterSection />
        <ContactSection />
        <CookieBanner />
      </main>
    </>
  )
}
