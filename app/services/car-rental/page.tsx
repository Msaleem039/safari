import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Users, Settings, Shield, Clock } from "lucide-react"
import Image from "next/image"

export default function CarRentalPage() {
  const carCategories = [
    {
      name: "Economy Cars",
      price: "AED 120",
      example: "Nissan Sunny, Toyota Yaris",
      passengers: "4-5",
      luggage: "2 bags",
      image: "/placeholder.svg",
      features: ["AC", "Manual", "Fuel Efficient", "City Driving"],
    },
    {
      name: "Compact SUV",
      price: "AED 180",
      example: "Nissan X-Trail, Honda CR-V",
      passengers: "5-7",
      luggage: "4 bags",
      image: "/placeholder.svg",
      features: ["AC", "Automatic", "Spacious", "Family Friendly"],
    },
    {
      name: "Luxury Sedan",
      price: "AED 300",
      example: "BMW 5 Series, Mercedes E-Class",
      passengers: "4-5",
      luggage: "3 bags",
      image: "/placeholder.svg",
      features: ["Premium", "Leather Seats", "GPS", "Bluetooth"],
    },
    {
      name: "Sports Car",
      price: "AED 800",
      example: "Ferrari, Lamborghini, McLaren",
      passengers: "2",
      luggage: "1 bag",
      image: "/placeholder.svg",
      features: ["Exotic", "High Performance", "Prestige", "Photo Ready"],
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
              src="/dubai-frame-golden.png"
              alt="Car rental Dubai hero"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 to-orange-500/80" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Car Rental Dubai</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Rent the perfect car for your Dubai adventure - from economy to luxury sports cars
            </p>
          </div>
        </section>

        {/* Car Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Choose Your Perfect Car</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From budget-friendly economy cars to exotic supercars - we have the right vehicle for every need
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {carCategories.map((category, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-40">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{category.example}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{category.passengers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Car className="h-4 w-4" />
                          <span>{category.luggage}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {category.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div>
                            <span className="text-xl font-bold text-red-600">{category.price}</span>
                            <div className="text-xs text-muted-foreground">per day</div>
                          </div>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Rent Now
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

        {/* Rental Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-red-600">1</span>
                  </div>
                  <h3 className="font-semibold">Choose Your Car</h3>
                  <p className="text-sm text-muted-foreground">Select from our wide range of vehicles</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-red-600">2</span>
                  </div>
                  <h3 className="font-semibold">Book Online</h3>
                  <p className="text-sm text-muted-foreground">Complete your booking with instant confirmation</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-red-600">3</span>
                  </div>
                  <h3 className="font-semibold">Pick Up</h3>
                  <p className="text-sm text-muted-foreground">Collect your car from our convenient locations</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-red-600">4</span>
                  </div>
                  <h3 className="font-semibold">Enjoy Dubai</h3>
                  <p className="text-sm text-muted-foreground">Explore Dubai at your own pace</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Why Rent With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Fully Insured</h3>
                  <p className="text-muted-foreground">All vehicles come with comprehensive insurance coverage</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Settings className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Well Maintained</h3>
                  <p className="text-muted-foreground">Regular maintenance and cleaning for optimal performance</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock roadside assistance and customer support</p>
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
