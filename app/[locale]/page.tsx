import { HeroSection } from "@/components/hero-section"
import { TourPackages } from "@/components/tour-packages"
import { FAQ } from "@/components/faq"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { apiService, Product } from "@/lib/api"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const response = await apiService.getAllProducts()
  const products: Product[] = response.data || []

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <TourPackages products={products} />
        <ServicesSection />
        <FAQ />
      </main>
    </div>
  )
}
