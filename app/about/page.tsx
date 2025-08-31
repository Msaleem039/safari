import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/desert-safari-group.png')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Emirates Desert Tour</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Your trusted partner for unforgettable desert adventures in Dubai
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Emirates Desert Tour has been providing exceptional desert safari experiences in Dubai for over a
                    decade. We are passionate about sharing the beauty and culture of the Arabian desert with visitors
                    from around the world.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our team of experienced guides and drivers are dedicated to ensuring your safety while delivering an
                    authentic and thrilling desert adventure. From traditional camel rides to exhilarating dune bashing,
                    we offer a complete range of desert activities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We pride ourselves on our commitment to sustainable tourism and supporting local Bedouin
                    communities, ensuring that our tours benefit both visitors and the local environment.
                  </p>
                </div>
                <div>
                  <Image
                    src="/desert-safari-group.png"
                    alt="Desert Safari Group"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Tour Packages</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </CardContent>
                </Card>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide safe, authentic, and unforgettable desert experiences that showcase the natural beauty
                      and rich cultural heritage of the Arabian desert while promoting sustainable tourism practices.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the leading desert tour operator in Dubai, recognized for our exceptional service,
                      commitment to safety, and dedication to preserving the desert environment for future generations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-8">Certifications & Awards</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  TripAdvisor Certificate of Excellence
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Dubai Tourism Licensed
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  ISO 9001 Certified
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Sustainable Tourism Award
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
