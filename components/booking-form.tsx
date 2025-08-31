"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from "lucide-react"

export function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tourDate: "",
    address: "",
    adults: "",
    children: "",
    tour: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    const requiredFields = ["fullName", "email", "phone", "tourDate", "address", "adults", "children", "tour"]
    const missingFields = requiredFields.filter((field) => !formData[field as keyof typeof formData])

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(", ")}`)
      return
    }

    // Here you would typically send the data to your backend
   
    alert("Thank you for your booking request! We will contact you shortly to confirm your desert safari adventure.")

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      tourDate: "",
      address: "",
      adults: "",
      children: "",
      tour: "",
      message: "",
    })
  }

  const handleWhatsAppBooking = () => {
    // Basic validation for WhatsApp booking
    const requiredFields = ["fullName", "phone", "tourDate", "adults", "children", "tour"]
    const missingFields = requiredFields.filter((field) => !formData[field as keyof typeof formData])

    if (missingFields.length > 0) {
      alert(`Please fill in required fields for WhatsApp booking: ${missingFields.join(", ")}`)
      return
    }

    const message = `Hi! I would like to book a desert safari tour.

Booking Details:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Tour Date: ${formData.tourDate}
- Address: ${formData.address}
- Adults: ${formData.adults}
- Children: ${formData.children}
- Selected Tour: ${formData.tour}
- Additional Message: ${formData.message || "None"}

Please confirm availability and provide booking details. Thank you!`

    const whatsappUrl = `https://wa.me/+971507585440?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="booking-form" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">Book Your Desert Adventure</CardTitle>
              <p className="text-center text-muted-foreground">
                Fill out the form below and we'll get back to you with the best package options and pricing.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone / WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tourDate">Tour Date *</Label>
                  <Input
                    id="tourDate"
                    type="date"
                    required
                    value={formData.tourDate}
                    onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address / Room No *</Label>
                  <Input
                    id="address"
                    placeholder="Enter your address or hotel room number"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="adults">Adult *</Label>
                    <Select
                      value={formData.adults}
                      onValueChange={(value) => setFormData({ ...formData, adults: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select adults" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Adult{num > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="children">Child ( 3 to 10 Years ) *</Label>
                    <Select
                      value={formData.children}
                      onValueChange={(value) => setFormData({ ...formData, children: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select children" />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Child{num !== 1 ? "ren" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tour">Select Tour *</Label>
                  <Select value={formData.tour} onValueChange={(value) => setFormData({ ...formData, tour: value })}>
                    <SelectTrigger data-tour-select>
                      <SelectValue placeholder="Choose your tour package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="evening-safari" data-tour-option>
                        Evening Desert Safari
                      </SelectItem>
                      <SelectItem value="evening-safari-atv" data-tour-option>
                        Evening Desert Safari + ATV
                      </SelectItem>
                      <SelectItem value="vip-safari" data-tour-option>
                        VIP Desert Safari
                      </SelectItem>
                      <SelectItem value="vip-safari-atv" data-tour-option>
                        VIP Desert Safari + ATV
                      </SelectItem>
                      <SelectItem value="overnight-safari" data-tour-option>
                        Overnight Desert Safari
                      </SelectItem>
                      <SelectItem value="private-safari" data-tour-option>
                        Private Desert Safari
                      </SelectItem>
                      <SelectItem value="morning-safari" data-tour-option>
                        Morning Desert Safari
                      </SelectItem>
                      <SelectItem value="morning-safari-atv" data-tour-option>
                        Morning Desert Safari + ATV
                      </SelectItem>
                      <SelectItem value="private-morning-safari" data-tour-option>
                        Private Morning Safari
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Any special requests or additional information..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 text-lg py-6">
                    SUBMIT
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleWhatsAppBooking}
                    className="flex-1 text-lg py-6 bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
