import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image src="/globe.svg" alt="EduKonet Logo" width={36} height={36} className="text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            EduKonet
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Our Services
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            About Us
          </Link>
          <Link href="#resources" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Resources
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="font-medium">
            Login
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  )
}
