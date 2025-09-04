"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const posts = [
  {
    title: "Why a Desert Safari in Dubai Should Be on Your Bucket List",
    excerpt:
      "Our unforgettable Desert Safari in Dubai offers adventure & culture in one experience you won't forget.",
    image: "/evening-desert-safari.png",
    date: "May 6, 2025",
  },
  {
    title: "Experience the Thrill of Desert Safari in Dubai",
    excerpt:
      "From dune bashing and camel riding to BBQ dinner & live shows, here's why it's a must-do.",
    image: "/golden-dune-sunset.png",
    date: "March 26, 2025",
  },
  {
    title: "Discover the Best Morning Desert Safari Tours in Dubai",
    excerpt:
      "Beat the heat and enjoy calm dunes at sunrise with our top morning safari picks.",
    image: "/morning-desert-safari-sunrise.png",
    date: "April 1, 2025",
  },
  {
    title: "Unforgettable Private Desert Safari in Dubai",
    excerpt:
      "Comfort, privacy & custom itinerary—why our private safari is perfect for families.",
    image: "/vip-desert-camp.png",
    date: "April 9, 2025",
  },
  {
    title: "Red Dune Safari with VIP Service in Dubai",
    excerpt:
      "Discover the thrill of the high red dunes with VIP service for your comfort.",
    image: "/desert-dunes-camels.png",
    date: "March 26, 2025",
  },
  {
    title: "Experience the Magic of an Evening Desert Safari in Dubai",
    excerpt:
      "Witness the desert glow at sunset and enjoy live entertainment with dinner.",
    image: "/evening-desert-safari.png",
    date: "April 6, 2025",
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <div className="relative h-72 md:h-96 mt-20">
        <Image
          src="/dune-buggy-racing.png"
          alt="Blogs Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full container mx-auto px-4 flex items-end pb-8">
          <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white">Blogs</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="uppercase text-xs tracking-wider text-gray-500 mb-2">Articles</p>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-3">Explore More</h2>
          <p className="text-gray-600 text-sm">
            At Safari Desert Dubai, we are passionate about bringing you the best of the desert—tips, stories and
            insights we&apos;ve gathered while based in Dubai. Whether you&apos;re a seasoned traveler or a first timer, we have
            something for everyone.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-44">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-[11px] text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-lg font-semibold leading-snug mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-3">{post.excerpt}</p>
                <Link href="#" className="text-xs font-semibold text-blue-600 hover:underline">
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  )
}


