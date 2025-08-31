"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import WhatsApp from "@/lib/WhatsApp"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export function HeroSection() {
  const openWhatsApp = () => {
    const message =
      "Hello! I'm interested in booking a desert safari tour. Can you please provide more information about your packages and pricing?"
    window.open(`https://wa.me/+971507585440?text=${encodeURIComponent(message)}`, "_blank")
  }

  const makeCall = () => {
    window.open("tel:+971528201226", "_self")
  }

  const slides = [
    {
      title: "Fs Royal Desert Safari Dubai",
      subtitle: "Experience the thrill of Desert Safari",
      image: "https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1682919499/blog/thbxksjod4jsuva68agf.jpg",
    },
    {
      title: "Dune Bashing Adventure",
      subtitle: "Feel the adrenaline in Dubai desert",
      image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1920,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/cveb14fvzqtatudlboaq/DesertSafariandInlandSeaTourinDoha.jpg",
    },
    {
      title: "Camel Ride & Desert Tours",
      subtitle: "Unforgettable experiences in Dubai",
      image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1920,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/twtwb5adrjmxgnvouqmq/TharDesertCamelSafarifromJodhpur.jpg",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  }

  return (
    <section className="relative h-screen">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0" />
            <div className="relative z-10 text-white max-w-4xl mx-auto px-8 flex flex-col justify-center h-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-orange-400 text-sm font-medium mb-4 tracking-wider uppercase"
              >
                {slide.title}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                {slide.subtitle}
              </motion.h1>
            </div>
          </div>
        ))}
      </Slider>

      {/* Call & WhatsApp buttons */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsApp}
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg"
        >
          <WhatsApp className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={makeCall}
          className="bg-white text-red-500 p-3 rounded-full shadow-lg"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}