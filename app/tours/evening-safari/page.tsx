import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star, Sunset } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EveningSafariPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/evening-desert-safari.png')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Evening Desert Safari</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Experience the magic of the desert at sunset with our spectacular evening safari tours
            </p>
          </div>
        </section>

        {/* Tour Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Evening Desert Safari Experience</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Discover the enchanting beauty of the Arabian desert as the sun sets, painting the sky 
                    with breathtaking colors. Our evening safari combines adventure with cultural immersion.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Enjoy thrilling dune bashing, traditional activities, and a sumptuous BBQ dinner with 
                    live entertainment at our authentic Bedouin camp.
                  </p>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      <Clock className="w-4 h-4 mr-2" />
                      6-7 Hours
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <Sunset className="w-4 h-4 mr-2" />
                      Sunset Views
                    </Badge>
                  </div>
                </div>
                <div>
                  <Image
                    src="/evening-desert-safari.png"
                    alt="Evening Desert Safari"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Tour Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sunset className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle>Sunset Magic</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Witness the spectacular sunset over the golden sand dunes of the Arabian desert
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle>Cultural Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Immerse yourself in traditional Bedouin culture with authentic activities
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle>BBQ Dinner</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Enjoy a delicious BBQ dinner under the stars with live entertainment
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing & Booking */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-6">Tour Pricing</h3>
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                  <div className="text-4xl font-bold text-primary mb-4">AED 399</div>
                  <p className="text-muted-foreground mb-6">per person (adults)</p>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Hotel pickup and drop-off</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Professional English-speaking guide</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>4WD vehicle with safety equipment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Camel ride</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>BBQ dinner with soft drinks</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Book Now
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
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
