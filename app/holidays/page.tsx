import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Users, Plane } from "lucide-react"
import Image from "next/image"

export default function HolidaysPage() {
  const packages = [
    {
      name: "Dubai Explorer - 4 Days",
      price: "AED 2,499",
      originalPrice: "AED 3,200",
      rating: 4.8,
      duration: "4 Days / 3 Nights",
      group: "2-8 People",
      image: "/dubai-skyline-burj-khalifa.png",
      includes: ["Hotel Stay", "Desert Safari", "City Tour", "Burj Khalifa", "Airport Transfer"],
      highlights: ["Luxury 4* Hotel", "All Meals", "Professional Guide"],
    },
    {
      name: "Ultimate Dubai - 7 Days",
      price: "AED 4,999",
      originalPrice: "AED 6,500",
      rating: 4.9,
      duration: "7 Days / 6 Nights",
      group: "2-10 People",
      image: "/dubai-marina-luxury-resort.png",
      includes: ["5* Hotel", "All Tours", "Theme Parks", "Dhow Cruise", "Shopping Tour"],
      highlights: ["5-Star Luxury", "Private Guide", "VIP Experiences"],
    },
    {
      name: "Dubai & Abu Dhabi - 5 Days",
      price: "AED 3,299",
      originalPrice: "AED 4,200",
      rating: 4.7,
      duration: "5 Days / 4 Nights",
      group: "2-6 People",
      image: "/placeholder-6nd9l.png",
      includes: ["Hotel Stay", "Both Cities", "Ferrari World", "Louvre Museum", "Desert Safari"],
      highlights: ["Two Emirates", "Cultural Sites", "Adventure Parks"],
    },
    {
      name: "Family Fun Dubai - 6 Days",
      price: "AED 3,799",
      originalPrice: "AED 4,800",
      rating: 4.6,
      duration: "6 Days / 5 Nights",
      group: "Families",
      image: "/placeholder.svg",
      includes: ["Family Hotel", "Theme Parks", "Aquarium", "Beach Resort", "Kids Activities"],
      highlights: ["Kid-Friendly", "Theme Parks", "Beach Access"],
    },
    {
      name: "Luxury Dubai - 5 Days",
      price: "AED 7,999",
      originalPrice: "AED 10,000",
      rating: 5.0,
      duration: "5 Days / 4 Nights",
      group: "2-4 People",
      image: "/placeholder.svg",
      includes: ["7* Hotel", "Private Tours", "Helicopter Ride", "Yacht Charter", "Fine Dining"],
      highlights: ["Ultra Luxury", "Private Experiences", "Exclusive Access"],
    },
    {
      name: "Dubai Honeymoon - 4 Days",
      price: "AED 3,999",
      originalPrice: "AED 5,200",
      rating: 4.8,
      duration: "4 Days / 3 Nights",
      group: "Couples",
      image: "/placeholder.svg",
      includes: ["Romantic Hotel", "Couple Spa", "Private Dinner", "Desert Romance", "City Lights"],
      highlights: ["Romantic", "Couple Activities", "Special Moments"],
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
              src="/dubai-skyline-burj-khalifa.png"
              alt="Dubai holidays hero skyline"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 to-orange-500/80" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Dubai Holiday Packages</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Complete vacation packages with hotels, tours, and unforgettable experiences
            </p>
          </div>
        </section>

        {/* Holiday Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Complete Holiday Packages</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Everything included - hotels, tours, meals, and transfers for a hassle-free Dubai vacation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-48">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-red-600">
                        Save{" "}
                        {Math.round(
                          ((Number.parseInt(pkg.originalPrice.replace("AED ", "").replace(",", "")) -
                            Number.parseInt(pkg.price.replace("AED ", "").replace(",", ""))) /
                            Number.parseInt(pkg.originalPrice.replace("AED ", "").replace(",", ""))) *
                            100,
                        )}
                        %
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{pkg.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{pkg.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{pkg.group}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Package Includes:</h4>
                          <div className="flex flex-wrap gap-1">
                            {pkg.includes.map((item, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {pkg.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div>
                            <span className="text-2xl font-bold text-red-600">{pkg.price}</span>
                            <span className="text-sm text-muted-foreground line-through ml-2">{pkg.originalPrice}</span>
                            <div className="text-xs text-muted-foreground">per person</div>
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

        {/* Why Choose Our Packages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Why Choose Our Holiday Packages?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Plane className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">All-Inclusive</h3>
                  <p className="text-muted-foreground">
                    Hotels, tours, meals, and transfers - everything is included in one package
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Expert Planning</h3>
                  <p className="text-muted-foreground">
                    Carefully crafted itineraries by local experts who know Dubai best
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Round-the-clock assistance throughout your entire Dubai vacation
                  </p>
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
