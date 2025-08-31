import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Star, Languages, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function GuideServicesPage() {
  const guideServices = [
    {
      name: "City Tour Guide",
      price: "AED 300",
      duration: "4-8 hours",
      languages: ["English", "Arabic", "Hindi"],
      image: "/placeholder.svg",
      specialties: ["Historical Sites", "Modern Dubai", "Shopping", "Photography"],
      description: "Expert guide for Dubai city tours covering all major attractions",
    },
    {
      name: "Desert Safari Guide",
      price: "AED 200",
      duration: "6 hours",
      languages: ["English", "Arabic"],
      image: "/placeholder.svg",
      specialties: ["Desert Culture", "Camel Riding", "Dune Bashing", "Stargazing"],
      description: "Experienced desert guide with deep knowledge of Bedouin culture",
    },
    {
      name: "Cultural Heritage Guide",
      price: "AED 350",
      duration: "4-6 hours",
      languages: ["English", "Arabic", "Urdu"],
      image: "/placeholder.svg",
      specialties: ["Islamic Culture", "Traditional Markets", "Museums", "Architecture"],
      description: "Specialist in UAE's rich cultural heritage and traditions",
    },
    {
      name: "Adventure Guide",
      price: "AED 400",
      duration: "Full Day",
      languages: ["English", "Arabic"],
      image: "/placeholder.svg",
      specialties: ["Water Sports", "Skydiving", "Rock Climbing", "Extreme Sports"],
      description: "Certified adventure guide for thrill-seekers and extreme sports",
    },
  ]

  const featuredGuides = [
    {
      name: "Ahmed Al-Rashid",
      rating: 4.9,
      experience: "8 years",
      languages: ["English", "Arabic", "French"],
      specialty: "Cultural Tours",
      image: "/placeholder.svg",
      reviews: 245,
    },
    {
      name: "Sarah Johnson",
      rating: 4.8,
      experience: "6 years",
      languages: ["English", "Spanish", "German"],
      specialty: "City Tours",
      image: "/placeholder.svg",
      reviews: 189,
    },
    {
      name: "Mohammed Hassan",
      rating: 5.0,
      experience: "12 years",
      languages: ["English", "Arabic", "Hindi"],
      specialty: "Desert Safari",
      image: "/placeholder.svg",
      reviews: 312,
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
              alt="Dubai skyline"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 to-orange-500/80" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Professional Tour Guides</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Expert local guides to make your Dubai experience unforgettable
            </p>
          </div>
        </section>

        {/* Guide Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Guide Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose from our specialized guide services tailored to your interests
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {guideServices.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-40">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Languages className="h-4 w-4" />
                          <span>{service.languages.length} langs</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Specialties:</h4>
                          <div className="flex flex-wrap gap-1">
                            {service.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div>
                            <span className="text-xl font-bold text-red-600">{service.price}</span>
                            <div className="text-xs text-muted-foreground">per day</div>
                          </div>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Book Guide
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

        {/* Featured Guides */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">Meet Our Top Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredGuides.map((guide, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                        <Image
                          src={guide.image}
                          alt={guide.name}
                          fill
                          placeholder="blur"
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{guide.name}</h3>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{guide.rating}</span>
                        <span className="text-sm text-muted-foreground">({guide.reviews} reviews)</span>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{guide.experience} experience</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Languages className="h-4 w-4" />
                          <span>{guide.languages.join(", ")}</span>
                        </div>
                        <Badge variant="secondary" className="mt-2">
                          {guide.specialty}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Why Choose Our Guides?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <User className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Licensed Professionals</h3>
                  <p className="text-muted-foreground">
                    All our guides are licensed by Dubai Tourism and highly experienced
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Languages className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Multilingual</h3>
                  <p className="text-muted-foreground">
                    Our guides speak multiple languages to serve international visitors
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Local Expertise</h3>
                  <p className="text-muted-foreground">Deep knowledge of Dubai's history, culture, and hidden gems</p>
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
