import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C0D0E] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-sans font-bold text-[#00FF7F] mb-4">404</h1>
        <h2 className="text-3xl font-sans font-bold mb-4">Product Not Found</h2>
        <p className="text-[#EAEAEA] mb-8 text-lg">Sorry, we couldn't find the product you're looking for.</p>
        <Link href="/reviews">
          <Button className="bg-[#00FF7F] text-[#0C0D0E] hover:bg-[#FFD166]">Back to Reviews</Button>
        </Link>
      </div>
    </div>
  )
}
