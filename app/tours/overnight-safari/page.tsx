import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star, Moon, Tent } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OvernightSafariPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/desert-camping-stars.png')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Overnight Desert Safari</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Spend a magical night under the stars in the heart of the Arabian desert
            </p>
          </div>
        </section>

        {/* Tour Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Overnight Desert Safari Experience</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Experience the ultimate desert adventure with our overnight safari package. Spend a 
                    complete day and night in the desert, from thrilling activities to peaceful stargazing.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    This comprehensive experience includes all-day activities, a luxurious dinner, 
                    comfortable overnight accommodation, and a beautiful sunrise breakfast.
                  </p>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      <Clock className="w-4 h-4 mr-2" />
                      24+ Hours
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <Tent className="w-4 h-4 mr-2" />
                      Overnight Camp
                    </Badge>
                  </div>
                </div>
                <div>
                  <Image
                    src="/desert-camping-stars.png"
                    alt="Overnight Desert Safari"
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
                      <Clock className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle>Full Day Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Enjoy a complete day of desert activities including dune bashing, camel riding, and sandboarding
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Moon className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle>Stargazing Night</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Experience the magical desert night sky with traditional Bedouin storytelling and music
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Tent className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle>Luxury Camping</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      Stay in comfortable, traditional-style tents with modern amenities and bedding
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing & Booking */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-6">Tour Pricing</h3>
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                  <div className="text-4xl font-bold text-primary mb-4">AED 699</div>
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
                      <span>All-day desert activities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>BBQ dinner and breakfast</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Overnight camping accommodation</span>
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
