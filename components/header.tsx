"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import Facebook from "@/lib/Facebook"
import Instagram from "@/lib/Instagram"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import LanguageSelector from "@/components/language-selector"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-form")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openWhatsApp = () => {
    const message = "Hello! I'm interested in booking a desert safari tour. Can you please provide more information?"
    window.open(`https://wa.me/971507585440?text=${encodeURIComponent(message)}`, "_blank")
  }



  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white sticky">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <Image src="/logo.jpeg" alt="Logo" width={100} height={100} />
      
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-800 leading-tight">Fs Royal Desert Safari Dubai</span>
            <span className="text-xs text-gray-600">ADVENTURE TOURS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            HOME
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            ABOUT US
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-colors font-medium">
              DESERT SAFARI TOURS <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[240px] bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl p-2">
              <DropdownMenuItem asChild className="px-4 py-2.5 rounded-md text-gray-800 hover:bg-orange-50">
                <Link href="/tours">All Desert Tours</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="px-4 py-2.5 rounded-md text-gray-800 hover:bg-orange-50">
                <Link href="/tours/morning-safari">Morning Safari</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="px-4 py-2.5 rounded-md text-gray-800 hover:bg-orange-50">
                <Link href="/tours/evening-safari">Evening Safari</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="px-4 py-2.5 rounded-md text-gray-800 hover:bg-orange-50">
                <Link href="/tours/overnight-safari">Overnight Safari</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/gallery" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            GALLERY
          </Link>

          <Link href="/blogs" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            BLOGS
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            CONTACT US
          </Link>

          <div className="flex items-center gap-4 ml-4">
            {/* <LanguageSelector /> */}
            <a
              href="https://www.facebook.com/share/164Yefp5JT/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/fsroyaldesertsafaridubai?igsh=MTQwdzc2ZWU5YTN3eA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Instagram />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/tours"
              className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DESERT SAFARI TOURS
            </Link>
            <Link
              href="/gallery"
              className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GALLERY
            </Link>
            <Link
              href="/blogs"
              className="block text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BLOGS
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
            <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
           
              <a
                href="https://www.facebook.com/share/164Yefp5JT/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/fsroyaldesertsafaridubai?igsh=MTQwdzc2ZWU5YTN3eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
