export const dynamic = 'force-dynamic'
export const revalidate = 0

import { HeroSection } from "@/components/hero-section"
import { TourPackages } from "@/components/tour-packages"
import { FAQ } from "@/components/faq"
import { ServicesSection } from "@/components/services-section"
import { apiService, Product } from "@/lib/api"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WelcomePopup } from "@/components/welcome-popup"

export default async function HomePage() {
  const response = await apiService.getAllProducts()
  const products: Product[] = response.data || []


  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <HeroSection />
        <TourPackages products={products} />
        <ServicesSection />
        <FAQ />
        <Footer/>
      </main>
      <WelcomePopup />
    </div>
  )
}
