"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Users, MapPin, Shield, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import WhatsApp from "@/lib/WhatsApp"

const tourPackages = [
  {
    id: 1,
    title: "Evening Desert Safari",
    image: "/evening-desert-safari.png",
    rating: 4.5,
    reviews: 1250,
    duration: "6 Hours",
    price: "AED 95",
    originalPrice: "AED 120",
    description: "Experience the magic of the desert with dune bashing, camel riding, and traditional entertainment.",
    fullDescription:
      "Embark on an unforgettable evening desert safari adventure that combines thrilling activities with authentic Arabian culture. Watch the sunset over golden dunes while enjoying traditional entertainment, delicious BBQ dinner, and stargazing under the clear desert sky.",
    includes: [
      "Hotel pickup and drop-off in 4WD vehicle",
      "Dune bashing with professional driver",
      "Camel riding experience",
      "Sandboarding on the dunes",
      "Traditional henna painting",
      "BBQ dinner with vegetarian options",
      "Live entertainment (belly dance, fire show)",
      "Unlimited soft drinks, tea, and coffee",
      "Traditional Arabic costumes for photos",
    ],
    itinerary: [
      { time: "3:00 PM", activity: "Hotel pickup" },
      { time: "4:00 PM", activity: "Arrive at desert camp" },
      { time: "4:30 PM", activity: "Dune bashing adventure" },
      { time: "5:30 PM", activity: "Camel riding & sandboarding" },
      { time: "6:30 PM", activity: "Sunset photography" },
      { time: "7:00 PM", activity: "Traditional activities & henna" },
      { time: "8:00 PM", activity: "BBQ dinner & entertainment" },
      { time: "9:30 PM", activity: "Return to hotel" },
    ],
    location: "Lahbab Desert, Dubai",
    groupSize: "Up to 6 people per vehicle",
    gallery: [
      "/evening-desert-safari.png",
      "/golden-dune-sunset.png",
      "/desert-camping-stars.png",
      "/vip-desert-camp.png"
    ]
  },
  {
    id: 2,
    title: "Evening Desert Safari + Atv",
    image: "https://avatars.mds.yandex.net/i?id=211ced4c3a7c74104ee115752cb362b6fca58771-9685031-images-thumbs&n=13",
    rating: 4.8,
    reviews: 890,
    duration: "6 Hours",
    price: "AED 149",
    originalPrice: "AED 180",
    description: "Combine traditional desert safari with thrilling ATV quad biking adventure.",
    fullDescription:
      "Take your desert adventure to the next level with our Evening Desert Safari + ATV package. Experience the thrill of quad biking across sand dunes before enjoying all the traditional safari activities including camel riding, BBQ dinner, and live entertainment.",
    includes: [
      "Hotel pickup and drop-off",
      "30-minute ATV quad biking",
      "Safety equipment and brief training",
      "Dune bashing experience",
      "Camel riding",
      "Sandboarding",
      "BBQ dinner with drinks",
      "Live entertainment shows",
      "Traditional activities",
    ],
    itinerary: [
      { time: "3:00 PM", activity: "Hotel pickup" },
      { time: "4:00 PM", activity: "ATV safety briefing" },
      { time: "4:15 PM", activity: "ATV quad biking (30 mins)" },
      { time: "5:00 PM", activity: "Dune bashing" },
      { time: "6:00 PM", activity: "Traditional activities" },
      { time: "7:00 PM", activity: "Sunset & photography" },
      { time: "8:00 PM", activity: "Dinner & entertainment" },
      { time: "9:30 PM", activity: "Return journey" },
    ],
    location: "Al Awir Desert, Dubai",
    groupSize: "Individual ATV, shared transport",
    gallery: [
      "/dune-buggy-racing.png",
      "/luxury-desert-atv.png",
      "/evening-desert-safari.png",
      "/desert-dunes-camels.png"
    ]
  },
  {
    id: 3,
    title: "Vip Desert Safari",
    image: "/vip-desert-camp.png",
    rating: 4.9,
    reviews: 567,
    duration: "6 Hours",
    price: "AED 199",
    originalPrice: "AED 250",
    description:
      "Premium desert experience with exclusive camp, gourmet dining, and personalized service.",
    fullDescription:
      "Enjoy a premium desert safari with VIP seating, table service, and a more intimate experience at our exclusive camp. This package is designed for travelers who want comfort, convenience, and top-tier service while still enjoying the thrill of the dunes.",
    includes: [
      "Hotel pickup and drop-off in 4x4 vehicle",
      "VIP seating and table service",
      "Adventurous dune bashing",
      "Sand boarding & camel ride",
      "Arabic coffee, fresh dates & soft drinks",
      "Sheesha (designated area)",
      "Henna painting",
      "Gourmet BBQ dinner with live entertainment",
    ],
    itinerary: [
      { time: "3:00 PM", activity: "Hotel pickup in 4x4" },
      { time: "4:00 PM", activity: "Arrive at VIP camp & welcome drinks" },
      { time: "4:30 PM", activity: "Dune bashing adventure" },
      { time: "5:30 PM", activity: "Camel ride & sandboarding" },
      { time: "6:30 PM", activity: "Sunset photos at scenic point" },
      { time: "7:30 PM", activity: "VIP dining & live entertainment" },
      { time: "9:30 PM", activity: "Drop-off back at hotel" },
    ],
    location: "Lahbab Desert, Dubai",
    groupSize: "Up to 6 people per vehicle",
    gallery: [
      "/vip-desert-camp.png",
      "/desert-camping-stars.png",
      "/evening-desert-safari.png",
      "/golden-dune-sunset.png"
    ]
  },
  {
    id: 4,
    title: "Vip Desert Safari + Atv",
    image: "/luxury-desert-atv.png",
    rating: 4.7,
    reviews: 423,
    duration: "6 Hours",
    price: "AED 349",
    originalPrice: "AED 420",
    description:
      "Ultimate luxury desert adventure combining VIP treatment with ATV excitement.",
    fullDescription:
      "Elevate the VIP safari with an added burst of adrenaline: a guided ATV ride across the dunes. After the thrill, unwind at our exclusive camp with gourmet dining and table service.",
    includes: [
      "Hotel pickup and drop-off in 4x4 vehicle",
      "VIP seating and dedicated service",
      "35–45 minutes quad bike ride",
      "Dune bashing, sand boarding & camel ride",
      "Arabic coffee, fresh dates & soft drinks",
      "Sheesha (designated area)",
      "Gourmet BBQ dinner with live entertainment",
    ],
    itinerary: [
      { time: "3:00 PM", activity: "Pickup & transfer to desert" },
      { time: "4:00 PM", activity: "ATV briefing and guided ride" },
      { time: "4:45 PM", activity: "Dune bashing session" },
      { time: "5:45 PM", activity: "Camel ride & photo stop" },
      { time: "7:00 PM", activity: "VIP dinner & shows" },
      { time: "9:30 PM", activity: "Return to hotel" },
    ],
    location: "Al Awir Desert, Dubai",
    groupSize: "Individual ATV, shared transport",
    gallery: [
      "/luxury-desert-atv.png",
      "/dune-buggy-racing.png",
      "/vip-desert-camp.png",
      "/evening-desert-safari.png"
    ]
  },
  {
    id: 5,
    title: "Overnight Desert Safari",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/5f/5f/ba.jpg",
    rating: 4.6,
    reviews: 789,
    duration: "15 Hours",
    price: "AED 399",
    originalPrice: "AED 480",
    description:
      "Sleep under the stars in traditional Bedouin camp with full desert experience.",
    fullDescription:
      "Experience the desert by night. After an evening of activities and BBQ dinner, stay overnight in a comfortable tent at the camp. Wake up to sunrise views and a light breakfast before drop-off.",
    includes: [
      "Hotel pickup and drop-off in 4x4 vehicle",
      "Dune bashing, sand boarding & camel ride",
      "Sunset picture point",
      "BBQ dinner with live entertainment",
      "Overnight stay at desert camp (tents & bedding)",
      "Stargazing and campfire experience",
      "Breakfast in the morning",
      "Unlimited soft drinks, tea, coffee, and water",
    ],
    itinerary: [
      { time: "3:00 PM", activity: "Pickup & transfer to camp" },
      { time: "4:30 PM", activity: "Dune bashing & activities" },
      { time: "7:30 PM", activity: "Dinner & live shows" },
      { time: "10:30 PM", activity: "Campfire & stargazing" },
      { time: "6:00 AM", activity: "Sunrise & light breakfast" },
      { time: "8:00 AM", activity: "Drop-off at hotel" },
    ],
    location: "Lahbab Desert, Dubai",
    groupSize: "Shared camp experience",
    gallery: [
      "/desert-camping-stars.png",
      "/evening-desert-safari.png",
      "/vip-desert-camp.png",
      "/golden-dune-sunset.png"
    ]
  },
  {
    id: 6,
    title: "Private Desert Safari",
    image: "https://img.grouponcdn.com/deal/2qTxsegS9jB2eqn8M2NQArikiQew/2q-1333x1333/v1/c870x524.jpg",
    rating: 4.8,
    reviews: 234,
    duration: "6 Hours",
    price: "AED 1500",
    originalPrice: "AED 1800",
    description:
      "Exclusive private desert safari with dedicated guide and customized itinerary.",
    fullDescription:
      "Discover the desert at your own pace with a private 4x4 and professional driver. Perfect for families and groups seeking privacy, flexibility, and personalized service.",
    includes: [
      "Private 4x4 vehicle & professional driver",
      "Flexible pickup time from your hotel",
      "Dune bashing tailored to preference",
      "Sand boarding & camel ride",
      "Sunset photo stop",
      "Refreshments & soft drinks",
      "BBQ dinner with private seating",
    ],
    itinerary: [
      { time: "Flexible", activity: "Private pickup from hotel" },
      { time: "—", activity: "Customizable dune activities" },
      { time: "—", activity: "Camel ride & sandboarding" },
      { time: "—", activity: "Sunset stop & photos" },
      { time: "Evening", activity: "Dinner & return" },
    ],
    location: "Various desert locations, Dubai",
    groupSize: "Private vehicle (up to 6 guests)",
    gallery: [
      "/desert-dunes-camels.png",
      "/evening-desert-safari.png",
      "/vip-desert-camp.png",
      "/desert-camping-stars.png"
    ]
  },
  {
    id: 7,
    title: "Morning Desert Safari",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/9c/ff/1d.jpg",
    rating: 4.4,
    reviews: 456,
    duration: "4 Hours",
    price: "AED 149",
    originalPrice: "AED 180",
    description:
      "Early morning desert adventure with sunrise views and peaceful dune experience.",
    fullDescription:
      "Beat the heat and enjoy the tranquility of the desert at sunrise. This morning safari focuses on dune bashing, sandboarding, and photos in soft early light.",
    includes: [
      "Hotel pickup and drop-off in 4x4 vehicle",
      "Sunrise picture point",
      "Dune bashing with professional driver",
      "Sand boarding",
      "Camel ride",
      "Soft drinks and water",
    ],
    itinerary: [
      { time: "7:00 AM", activity: "Pickup from hotel" },
      { time: "7:45 AM", activity: "Dune bashing" },
      { time: "8:30 AM", activity: "Sandboarding & camel ride" },
      { time: "9:15 AM", activity: "Photo stops" },
      { time: "10:00 AM", activity: "Return to hotel" },
    ],
    location: "Lahbab Desert, Dubai",
    groupSize: "Up to 6 people per vehicle",
    gallery: [
      "/morning-desert-safari-sunrise.png",
      "/desert-dunes-camels.png",
      "/evening-desert-safari.png",
      "/golden-dune-sunset.png"
    ]
  },
  {
    id: 8,
    title: "Morning Desert Safari + Atv",
    image: "https://live.staticflickr.com/65535/52891944623_5ee94d6675_b.jpg",
    rating: 4.6,
    reviews: 345,
    duration: "4 Hours",
    price: "AED 199",
    originalPrice: "AED 240",
    description:
      "Morning desert safari enhanced with exciting ATV quad biking experience.",
    fullDescription:
      "Add a dose of adventure to your morning with a guided ATV ride across the dunes, followed by dune bashing and more.",
    includes: [
      "Hotel pickup and drop-off in 4x4 vehicle",
      "25–35 minutes quad bike ride",
      "Dune bashing & sand boarding",
      "Camel ride",
      "Soft drinks and water",
    ],
    itinerary: [
      { time: "7:00 AM", activity: "Pickup & transfer to desert" },
      { time: "7:45 AM", activity: "ATV briefing & ride" },
      { time: "8:30 AM", activity: "Dune bashing" },
      { time: "9:15 AM", activity: "Photos & refreshments" },
      { time: "10:00 AM", activity: "Return to hotel" },
    ],
    location: "Al Awir Desert, Dubai",
    groupSize: "Individual ATV, shared transport",
    gallery: [
      "/dune-buggy-racing.png",
      "/morning-desert-safari-sunrise.png",
      "/luxury-desert-atv.png",
      "/desert-dunes-camels.png"
    ]
  },
  {
    id: 9,
    title: "Private Morning Safari",
    image: "https://miro.medium.com/v2/resize:fit:1358/1*zABNIqqLfVY6o865DjkB3A.jpeg",
    rating: 4.7,
    reviews: 123,
    duration: "4 Hours",
    price: "AED 1200",
    originalPrice: "AED 1440",
    description:
      "Exclusive morning desert experience with private guide and personalized service.",
    fullDescription:
      "A peaceful private morning out on the dunes with a flexible schedule and activities tailored to your interests.",
    includes: [
      "Private 4x4 vehicle & professional driver",
      "Flexible pickup time from your hotel",
      "Dune bashing tailored to preference",
      "Sand boarding & camel ride",
      "Photo stops at scenic dunes",
      "Soft drinks and water",
    ],
    itinerary: [
      { time: "Flexible", activity: "Private pickup" },
      { time: "—", activity: "Custom dune bashing" },
      { time: "—", activity: "Camel ride & sandboarding" },
      { time: "—", activity: "Photo stops & refreshments" },
      { time: "—", activity: "Return to hotel" },
    ],
    location: "Various desert locations, Dubai",
    groupSize: "Private vehicle (up to 6 guests)",
    gallery: [
      "/morning-desert-safari-sunrise.png",
      "/desert-dunes-camels.png",
      "/evening-desert-safari.png",
      "/vip-desert-camp.png"
    ]
  },
]

interface TourDetailPageProps {
  params: {
    id: string
  }
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = tourPackages.find((t) => t.id === Number.parseInt(params.id))

  if (!tour) {
    notFound()
  }

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'm interested in booking the ${tour.title} for ${tour.price}. 

Tour Details:
- Duration: ${tour.duration}
- Price: ${tour.price} (Original: ${tour.originalPrice})
- Location: ${tour.location}

Please provide more information and help me with the booking process.`

    const whatsappUrl = `https://wa.me/+971507585440?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCall = () => {
    window.open("tel:+971528201226", "_self")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-600 to-red-600">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <nav className="mb-4">
              <Link href="/" className="text-white/80 hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/tours" className="text-white/80 hover:text-white">
                Tours
              </Link>
              <span className="mx-2">/</span>
              <span>{tour.title}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{tour.rating}</span>
              </div>
              <span>•</span>
              <span>{tour.reviews} reviews</span>
              <span>•</span>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                <span>{tour.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Image */}
            <Card>
              <CardContent className="p-0">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                </div>
              </CardContent>
            </Card>
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Tour Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tour.gallery?.map((image, index) => (
                    <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${tour.title} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{tour.fullDescription}</p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-gray-600">{tour.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold">Group Size</p>
                      <p className="text-sm text-gray-600">{tour.groupSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold">Safety</p>
                      <p className="text-sm text-gray-600">Fully Insured</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-2">
                  {tour.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <Badge variant="outline" className="min-w-fit">
                        {item.time}
                      </Badge>
                      <p className="text-gray-700">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-red-600">{tour.price}</span>
                    <span className="text-lg text-gray-500 line-through">{tour.originalPrice}</span>
                  </div>
                  <p className="text-gray-600">Per Person</p>
                </div>

                <div className="space-y-3 mb-6">
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                    onClick={handleWhatsAppBooking}
                  >
                    <WhatsApp className="w-4 h-4 mr-2" />
                    Book via WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full py-3 bg-transparent" onClick={handleCall}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>

                <div className="border-t pt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Free Cancellation</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instant Confirmation</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mobile Voucher</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
