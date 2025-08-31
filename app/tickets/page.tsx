import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, MapPin } from "lucide-react"

export default function TicketsPage() {
  const attractions = [
    {
      name: "Burj Khalifa",
      price: "AED 149",
      originalPrice: "AED 199",
      rating: 4.8,
      duration: "1-2 hours",
      category: "Observation Deck",
      image: "/dubai-skyline-burj-khalifa.png",
      features: ["Skip the Line", "124th Floor", "Audio Guide"],
    },
    {
      name: "Dubai Aquarium & Underwater Zoo",
      price: "AED 120",
      originalPrice: "AED 150",
      rating: 4.6,
      duration: "2-3 hours",
      category: "Aquarium",
      image: "/dubai-aquarium-underwater-tunnel.png",
      features: ["Tunnel Walk", "Underwater Zoo", "Shark Encounter"],
    },
    {
      name: "Dubai Frame",
      price: "AED 50",
      originalPrice: "AED 75",
      rating: 4.5,
      duration: "1 hour",
      category: "Landmark",
      image: "/dubai-frame-golden.png",
      features: ["Sky Deck", "Museum", "Glass Bridge"],
    },
    {
      name: "IMG Worlds of Adventure",
      price: "AED 300",
      originalPrice: "AED 350",
      rating: 4.7,
      duration: "Full Day",
      category: "Theme Park",
      image: "/worlds-adventure-theme-park.png",
      features: ["All Rides", "Marvel Zone", "Cartoon Network"],
    },
    {
      name: "Dubai Miracle Garden",
      price: "AED 55",
      originalPrice: "AED 75",
      rating: 4.4,
      duration: "2-3 hours",
      category: "Garden",
      image: "/dubai-miracle-garden-flowers.png",
      features: ["Flower Displays", "Butterfly Garden", "Photo Spots"],
    },
    {
      name: "Global Village",
      price: "AED 25",
      originalPrice: "AED 35",
      rating: 4.3,
      duration: "3-4 hours",
      category: "Cultural Park",
      image: "/global-village-dubai-pavilions.png",
      features: ["Cultural Pavilions", "Shopping", "Food Courts"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/dubai-skyline-burj-khalifa.png')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 to-orange-500/80" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Dubai Attraction Tickets</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Skip the lines and save money with our exclusive attraction tickets
            </p>
          </div>
        </section>

        {/* Tickets Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Popular Attractions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Book your tickets in advance and enjoy exclusive discounts on Dubai's top attractions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {attractions.map((attraction, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-red-600">
                        Save{" "}
                        {Math.round(
                          ((Number.parseInt(attraction.originalPrice.replace("AED ", "")) -
                            Number.parseInt(attraction.price.replace("AED ", ""))) /
                            Number.parseInt(attraction.originalPrice.replace("AED ", ""))) *
                            100,
                        )}
                        %
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{attraction.name}</CardTitle>
                        <Badge variant="outline">{attraction.category}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{attraction.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{attraction.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {attraction.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-red-600">{attraction.price}</span>
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              {attraction.originalPrice}
                            </span>
                          </div>
                          <Button className="bg-red-600 hover:bg-red-700">Book Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Book With Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Why Book Tickets With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Skip the Lines</h3>
                  <p className="text-muted-foreground">
                    Fast-track entry to all major attractions with our pre-booked tickets
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Best Prices</h3>
                  <p className="text-muted-foreground">
                    Exclusive discounts and combo deals you won't find anywhere else
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Instant Confirmation</h3>
                  <p className="text-muted-foreground">Receive your tickets instantly via email and WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
