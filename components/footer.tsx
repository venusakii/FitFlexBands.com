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
            <h4 className="font-sans font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#EAEAEA]/70">
              <li>
                <a href="#" className="hover:text-[#00FF7F] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00FF7F] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00FF7F] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-[#EAEAEA]/70">
              <li>
                <a href="#" className="hover:text-[#00FF7F] transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00FF7F] transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00FF7F] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-[#EAEAEA]/70">
              <li>
                <a href="#" className="hover:text-[#00FF7F] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00FF7F] transition-colors">
                  Terms of Use
                </a>
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
