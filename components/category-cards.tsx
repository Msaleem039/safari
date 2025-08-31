"use client"

import { Card } from "@/components/ui/card"
import { Mountain, Building2, Waves, Ticket, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Desert Safaris",
    icon: Mountain,
    gradient: "from-orange-500 to-red-500",
    href: "/tours#desert-safaris",
  },
  {
    title: "Sightseeing Tours",
    icon: Building2,
    gradient: "from-blue-500 to-cyan-500",
    href: "/tours#sightseeing",
  },
  {
    title: "Water Activities",
    icon: Waves,
    gradient: "from-cyan-500 to-blue-500",
    href: "/tours#water-activities",
  },
  {
    title: "Tickets",
    icon: Ticket,
    gradient: "from-yellow-500 to-orange-500",
    href: "/tours#tickets",
  },
  {
    title: "Holidays",
    icon: Calendar,
    gradient: "from-green-500 to-emerald-500",
    href: "/tours#holidays",
  },
]

export default function CategoryCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={category.href}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 overflow-hidden h-full">
                  <div
                    className={`bg-gradient-to-br ${category.gradient} p-6 text-center text-white relative h-full flex flex-col justify-center`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-space-grotesk font-semibold text-sm md:text-base">{category.title}</h3>
                    <ArrowRight className="w-4 h-4 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
