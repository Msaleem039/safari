import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Facebook from "@/lib/Facebook"
import Instagram from "@/lib/Instagram"

export function Footer() {
  return (
    <footer className="bg-[#F8F9FB] text-gray-800">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Brand Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐪</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">SAFARI DESERT DUBAI</h3>
                <p className="text-sm text-gray-600">سفاري ديزرت دبي</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              You have come to the right place if you are looking for a thrill, fun, and ultimate outdoor adventure entertainment.
            </p>
          </div>

          {/* Middle Column - Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 text-center">SUBSCRIBE TO NEWSLETTER</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border-gray-300 focus:border-orange-500"
              />
              <Button className="bg-[#FDCB4E] hover:bg-[#FDCB4E]/90 text-gray-900 font-bold text-sm px-4">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          {/* Right Column - Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 text-center">FOLLOW US</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/share/164Yefp5JT/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1A2B48] rounded-full flex items-center justify-center hover:bg-[#1A2B48]/90 transition-colors"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/fsroyaldesertsafaridubai?igsh=MTQwdzc2ZWU5YTN3eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1A2B48] rounded-full flex items-center justify-center hover:bg-[#1A2B48]/90 transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Al Aweer Dubai.</li>
              <li>fsroyaldesertsafaridubai@gmail.com</li>
              <li>+971507585440</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Desert Safari Tours</li>
            </ul>
          </div>

          {/* Quick Menu */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">QUICK MENU</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="/gallery" className="hover:text-orange-600 transition-colors">Gallery</a></li>
              <li><a href="/blogs" className="hover:text-orange-600 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">CUSTOMER SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="/about" className="hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-orange-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
