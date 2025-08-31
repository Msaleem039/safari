"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, CheckCircle2, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Skeleton } from "../../../components/ui/skeleton"

interface TourDetail {
  _id: string
  title: string
  description: string
  price: string
  duration: string
  inclusions: string[]
  image: string
  type: string
  button: string
  createdAt: string
  updatedAt: string
}

export default function TourDetailPage() {
  const { id } = useParams()
  const [tour, setTour] = useState<TourDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTour = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.fsroyaldesertsafaridubai.com/api/singleproduct/${id}`
        )
        const data = await response.json()
        if (data.product) {
          setTour(data.product)
        }
      } catch (error) {
        console.error("Error fetching tour:", error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchTour()
    }
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Skeleton className="w-full h-[400px] rounded-lg" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    )
  }

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Tour not found</h2>
        <Link href="/tours" className="text-blue-600 hover:underline">
          Back to all tours
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/tours" 
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Tours
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tour Images */}
          <div className="space-y-4">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={tour.image || "/placeholder.jpg"}
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Remove the image grid since we only have one image */}
          </div>

          {/* Tour Details */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  {tour.title}
                </h1>
                <div className="flex items-center text-yellow-500 ">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'fill-current' : ''}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">4.8 (120 reviews)</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold text-black">
                  {tour.price}
                </div>
                {/* <div className="text-sm text-gray-500">per person</div> */}
              </div>
            </div>

            {/* <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                <span>Small group (max 15 people)</span>
              </div>
            </div> */}

            <div className="prose max-w-none mb-2">
              <p className="text-gray-700 leading-relaxed">
                {tour.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.inclusions?.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* <Link href={`/book?tour=${encodeURIComponent(tour.title)}`} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
                  {tour.button || 'Book Now'}
                </Button>
              </Link> */}
              <Button 
                variant="outline" 
                className="w-full sm:w-auto text-lg py-6 px-8"
                onClick={() => {
                  const message = `Hi! I'm interested in booking the ${tour.title} for ${tour.price}.`;
                  const whatsappUrl = `https://wa.me/+971507585440?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
