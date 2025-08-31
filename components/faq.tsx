"use client"

import { useState } from "react"

const faqs = [
  {
    q: "What is a desert safari in Dubai?",
    a: "A desert safari is an adventurous journey into the Arabian Desert with dune bashing, camel riding, sandboarding, live shows and BBQ dinner.",
  },
  {
    q: "What activities are included in your desert safari packages?",
    a: "Depending on the package: pickup and drop-off, dune bashing, camel ride, sandboarding, henna, sheesha (designated area), live shows and BBQ dinner.",
  },
  { q: "Are your safaris suitable for families and children?", a: "Yes, families are welcome. We tailor the drive intensity and provide guidance for young guests." },
  { q: "What should I wear for a desert safari?", a: "Comfortable clothing and closed shoes are recommended. Bring a light jacket in winter evenings." },
  { q: "How do I book a desert safari?", a: "Select a tour and click Book Now or message us on WhatsApp for instant assistance." },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-8">Frequently Asked Questions</h2>
        <div className="divide-y rounded-xl bg-white shadow-sm">
          {faqs.map((item, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-5 focus:outline-none"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-lg">{item.q}</p>
                <span className="text-xl">{open === i ? "−" : "+"}</span>
              </div>
              {open === i && <p className="mt-2 text-gray-600">{item.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}


