"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Clock, Users, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { apiService, Product } from "@/lib/api";

export function TourPackages({ products }: { products: Product[] }) {
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null)
console.log("products", products)
  const handleBookNow = (tourTitle: string) => {
    const bookingSection = document.getElementById("booking-form")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })

      // Pre-select the tour in the booking form
      setTimeout(() => {
        const tourSelect = document.querySelector("[data-tour-select]") as HTMLElement
        if (tourSelect) {
          tourSelect.click()
          // Find and click the matching tour option
          setTimeout(() => {
            const tourOptions = document.querySelectorAll("[data-tour-option]")
            tourOptions.forEach((option) => {
              if (option.textContent?.includes(tourTitle)) {
                ;(option as HTMLElement).click()
              }
            })
          }, 100)
        }
      }, 500)
    }
  }

  const handleWhatsAppBooking = (tour: Product) => {
    const message = `Hi! I'm interested in booking the ${tour.title} for ${tour.price}. 

Tour Details:
- Duration: ${tour.duration}
- Price: ${tour.price})
- Description: ${tour.description}

Please provide more information and help me with the booking process.`

    const whatsappUrl = `https://wa.me/+971507585440?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-space-grotesk font-bold text-gray-900 mb-4">Most Popular Desert Safari Tours</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-dm-sans">
            Experience the thrill of the Arabian desert with our carefully curated safari packages. From traditional
            camel rides to luxury VIP experiences, we offer adventures for every traveler.
          </p>

          {/* TripAdvisor Logo */}
      
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((tour, index) => (
            <motion.div
              key={tour._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
            <Card
              className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md cursor-pointer h-full flex flex-col"
              onClick={() => (window.location.href = `/tours/${tour._id}`)}
            >
              <CardHeader className="p-0 flex-shrink-0">
                <div className="px-4 pt-4 pb-2 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wide text-gray-500 font-dm-sans">From</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-red-600 font-bold text-base font-space-grotesk">{tour.price}</span>
                      {/* <span className="text-[10px] text-gray-500 font-dm-sans">/Per Person</span> */}
                    </div>
                  </div>
                  <Button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black text-[10px] px-3 py-1 h-auto"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.location.href = `/tours/${tour._id}`
                    }}
                  >
                    BOOK NOW
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-red-600 text-white font-dm-sans px-3 py-1 text-sm font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    {tour.duration}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="text-xl mb-3 font-space-grotesk font-bold text-gray-900 leading-tight">
                  {tour.title}
                </CardTitle>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor((tour.rating as number) || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-dm-sans font-medium">
                    {tour.rating} ({tour.reviews} reviews)
                  </span>
                </div>

                <p className="text-gray-600 mb-4 font-dm-sans leading-relaxed text-sm">{tour.description}</p>

                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-600 font-space-grotesk">{tour.price}</span>
                    {/* <span className="text-sm text-gray-500 line-through font-dm-sans">{tour.originalPrice}</span> */}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    {/* <Users className="w-4 h-4 mr-1" /> */}
                    {/* <span className="font-dm-sans">Per Person</span> */}
                  </div>
                </div>

                {tour.inclusions && (
                  <ul className="mt-3 space-y-1 max-h-56 overflow-y-auto pr-1 flex-grow">
                    {tour.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[11px] text-gray-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>

              <CardFooter className="p-4 pt-0 flex-shrink-0">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleWhatsAppBooking(tour)
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Now
                </Button>
              </CardFooter>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
