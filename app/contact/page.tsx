import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Get in touch with our team to plan your perfect desert adventure
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader className="text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>Call Us</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg font-semibold mb-2">+971528201226</p>
                    <p className="text-muted-foreground">Available 24/7 for bookings</p>
                    <Button className="mt-4 bg-transparent" variant="outline">
                      <a href="tel:+971528201226">Call Now</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>WhatsApp</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg font-semibold mb-2">+971507585440</p>
                    <p className="text-muted-foreground">Quick responses via WhatsApp</p>
                    <Button className="mt-4 bg-transparent" variant="outline">
                      <a href="https://wa.me/+971507585440" target="_blank" rel="noopener noreferrer">
                        Message Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg font-semibold mb-2">fsroyaldesertsafaridubai@gmail.com</p>
                    <p className="text-muted-foreground">Send us your inquiries</p>
                    <Button className="mt-4 bg-transparent" variant="outline">
                      Send Email
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Fs Royal Desert Safari Dubai
                      <br />
                      Dubai, United Arab Emirates
                      <br />
                      Near Dubai Mall, Downtown Dubai
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We provide pickup services from all major hotels and locations in Dubai.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Operating Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Sunday:</span>
                        <span className="font-semibold">24/7 Available</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Office Hours:</span>
                        <span className="font-semibold">8:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency Support:</span>
                        <span className="font-semibold">24/7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <BookingForm />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What should I wear for the desert safari?</h3>
                    <p className="text-sm text-muted-foreground">
                      Wear comfortable, loose-fitting clothes and closed shoes. Bring a light jacket for evening tours
                      as it can get cool.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Do you provide hotel pickup?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, we provide complimentary pickup and drop-off from all major hotels and locations in Dubai.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Is the tour suitable for children?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, our tours are family-friendly. Children aged 3-10 get special rates, and we have activities
                      suitable for all ages.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Can I cancel or reschedule my booking?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, you can cancel or reschedule up to 24 hours before your tour date for a full refund.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
