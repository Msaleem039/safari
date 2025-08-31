"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/desert-dunes-camels.png",
    title: "Camel Trekking",
    category: "Desert Safari",
    description: "Traditional camel rides through golden sand dunes",
  },
  {
    id: 2,
    src: "/evening-desert-safari.png",
    title: "Evening Desert Safari",
    category: "Desert Safari",
    description: "Spectacular sunset views during evening safari",
  },
  {
    id: 3,
    src: "/luxury-desert-atv.png",
    title: "ATV Adventure",
    category: "Adventure",
    description: "Thrilling quad bike rides across desert terrain",
  },
  {
    id: 4,
    src: "/vip-desert-camp.png",
    title: "VIP Desert Camp",
    category: "Luxury",
    description: "Exclusive desert camping experience under stars",
  },
  {
    id: 5,
    src: "/desert-camping-stars.png",
    title: "Desert Camping",
    category: "Camping",
    description: "Overnight camping with traditional Bedouin experience",
  },
  {
    id: 6,
    src: "/dubai-skyline-burj-khalifa.png",
    title: "Dubai Skyline",
    category: "City Tours",
    description: "Iconic Dubai cityscape with Burj Khalifa",
  },
  {
    id: 7,
    src: "/dubai-aquarium-underwater-tunnel.png",
    title: "Dubai Aquarium",
    category: "Attractions",
    description: "Underwater tunnel experience at Dubai Mall",
  },
  {
    id: 8,
    src: "/dubai-frame-golden.png",
    title: "Dubai Frame",
    category: "Attractions",
    description: "Golden frame offering panoramic city views",
  },
  {
    id: 9,
    src: "/worlds-adventure-theme-park.png",
    title: "Adventure Parks",
    category: "Adventure",
    description: "Thrilling rides and attractions in Dubai",
  },
]

const categories = ["All", "Desert Safari", "Adventure", "Luxury", "Camping", "City Tours", "Attractions"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[40vh] bg-gradient-to-r from-orange-600  flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-20">Gallery</h1>
          <p className="text-xl md:text-2xl">Explore Our Desert Adventures</p>
        </motion.div>
      </motion.section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-red-600 hover:bg-red-700"
                  : "border-red-600 text-red-600 hover:bg-red-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div key={image.id} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(image)}>
                <CardContent className="p-0 relative">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        size={32}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <Badge variant="secondary" className="bg-red-100 text-red-700">
                        {image.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </Button>
              <div className="relative h-[60vh]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                  <Badge className="bg-red-600">{selectedImage.category}</Badge>
                </div>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
