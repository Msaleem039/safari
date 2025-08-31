import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Users, Clock, Shield, MapPin } from "lucide-react"
import Image from "next/image"

export default function TransfersPage() {
  const transferTypes = [
    {
      name: "Airport Transfer",
      price: "AED 120",
      vehicle: "Sedan (1-3 pax)",
      duration: "45-60 mins",
      image: "/placeholder.svg",
      features: ["Meet & Greet", "Flight Tracking", "Free Waiting", "Professional Driver"],
    },
    {
      name: "Group Transfer",
      price: "AED 200",
      vehicle: "Van (4-7 pax)",
      duration: "45-60 mins",
      image: "/placeholder.svg",
      features: ["Spacious Vehicle", "Luggage Space", "AC & WiFi", "Group Friendly"],
    },
    {
      name: "Luxury Transfer",
      price: "AED 300",
      vehicle: "Premium Car",
      duration: "45-60 mins",
      image: "/placeholder.svg",
      features: ["Premium Vehicle", "VIP Service", "Refreshments", "Red Carpet"],
    },
    {
      name: "City Transfer",
      price: "AED 80",
      vehicle: "Any Vehicle",
      duration: "30-45 mins",
      image: "/placeholder.svg",
      features: ["City Routes", "Hotel to Hotel", "Shopping Malls", "Tourist Areas"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/dubai-marina-luxury-resort.png"
              alt="Dubai transfer services background"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 to-orange-500/80" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Airport Transfers</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Reliable, comfortable, and professional transfer services in Dubai
            </p>
          </div>
        </section>

        {/* Transfer Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Transfer Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose from our range of transfer options to suit your needs and budget
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {transferTypes.map((transfer, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-40">
                      <Image
                        src={transfer.image}
                        alt={transfer.name}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{transfer.name}</CardTitle>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          <span>{transfer.vehicle}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{transfer.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {transfer.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div>
                            <span className="text-xl font-bold text-red-600">{transfer.price}</span>
                            <div className="text-xs text-muted-foreground">one way</div>
                          </div>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">Popular Routes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Dubai Airport → Downtown Dubai</h3>
                      <Badge>AED 120</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>45-60 minutes • 35 km</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Dubai Airport → Dubai Marina</h3>
                      <Badge>AED 150</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>50-70 minutes • 45 km</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Dubai Airport → Jumeirah Beach</h3>
                      <Badge>AED 140</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>40-55 minutes • 30 km</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Dubai Airport → Palm Jumeirah</h3>
                      <Badge>AED 160</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>55-75 minutes • 50 km</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Transfers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Why Choose Our Transfer Service?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Safe & Reliable</h3>
                  <p className="text-muted-foreground">
                    Professional drivers with clean vehicles and full insurance coverage
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">On-Time Service</h3>
                  <p className="text-muted-foreground">Flight tracking and punctual service with free waiting time</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock customer support for all your transfer needs</p>
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
