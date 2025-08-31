"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const services = [
  {
    title: "Desert Safari Tours",
    description:
      "In a 4×4 Land Cruiser from anywhere in Dubai & Sharjah. Up to 6 guests in Land Cruiser with best services for your comfort.",
    image: "/desert-safari-group.png",
    href: "/tours#evening-safari",
  },
  {
    title: "City Tours",
    description:
      "We have brought some of the best Dubai city tour packages to explore both the historic and new‑era side of Dubai.",
    image: "/dubai-marina-luxury-resort.png",
    href: "/tours",
  },
  {
    title: "Desert Buggy Ride",
    description:
      "Safari Desert Dubai is one of the best dune buggy companies in Dubai. Quality dune buggies and quad biking tours in UAE Dubai.",
    image: "/dune-buggy-racing.png",
    href: "/services/transfers", // fallback link; adjust if you add a buggy page
  },
]

export function ServicesSection() {
  return (
    <section className="bg-[#c9ac87] py-10 relative">
      {/* Decorative dot pattern */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-[#f3b02f] font-semibold text-sm uppercase tracking-wider mb-2">Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            </div>
            <div className="flex-1">
              <p className="text-white text-lg leading-relaxed">
                You have come to the right place if you are looking for a thrill, fun, and ultimate outdoor adventure entertainment.
              </p>
            </div>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-64 flex-shrink-0">
                <Image 
                  src={s.image} 
                  alt={s.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0b1830] mb-3 border-b-2 border-[#f3b02f] pb-2">
                  {s.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm flex-grow">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="inline-block px-6 py-3 bg-[#f3b02f] text-[#0b1830] font-bold text-sm uppercase tracking-wide rounded hover:bg-[#f3b02f]/90 transition-colors duration-200 self-start"
                >
                  Learn More
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}


