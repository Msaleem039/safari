"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import WhatsApp from "@/lib/WhatsApp"

export function HeroSection() {
  const openWhatsApp = () => {
    const message =
      "Hello! I'm interested in booking a desert safari tour. Can you please provide more information about your packages and pricing?"
    window.open(`https://wa.me/+971507585440?text=${encodeURIComponent(message)}`, "_blank")
  }

  const makeCall = () => {
    window.open("tel:+971528201226", "_self")
  }

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn-imgix.headout.com/media/images/f3262b0c04e656b15376d4946e347b0a-407-dubai-01-dubai--dubai-desert-safari_morning-desert-safari-01.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-white max-w-4xl mx-auto px-8 text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-orange-400 text-sm font-medium mb-4 tracking-wider uppercase"
        >
          Fs Royal Desert Safari Dubai
        </motion.div>

        {/* <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          EXPERIENCE THE THRILL OF DESERT SAFARI DUBAI
        </motion.h1> */}

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed opacity-90"
        >
          Dubai Desert Safari, Dune Bashing, Camel Ride, Desert Tours, Dubai Adventure and Desert Camping
        </motion.p> */}

        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={makeCall}
          className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
          title="Call us"
        >
          <Phone className="h-7 w-7 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openWhatsApp}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          title="Chat on WhatsApp"
        >
          <WhatsApp className="h-7 w-7 text-white" />
        </motion.button>
      </motion.div>
    </section>
  )
}
