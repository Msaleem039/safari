import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TourPackages } from "@/components/tour-packages"
import { apiService, Product } from "@/lib/api";

export default async function ToursPage() {
  const response = await apiService.getAllProducts();
  const products: Product[] = response.data || [];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/desert-safari-group.png')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Desert Tours</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Discover our complete range of desert safari experiences in Dubai
            </p>
          </div>
        </section>

        {/* Tours Section */}
        <TourPackages products={products} />

        {/* Additional Info Section */}
        <section className="py-16bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Desert Tours?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Expert Guides</h3>
                  <p className="text-muted-foreground">
                    Our experienced guides ensure your safety while providing fascinating insights into desert culture
                    and wildlife.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Premium Vehicles</h3>
                  <p className="text-muted-foreground">
                    Modern 4WD vehicles equipped with safety features for the ultimate dune bashing experience.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Authentic Experience</h3>
                  <p className="text-muted-foreground">
                    Traditional Bedouin camps with authentic cuisine, entertainment, and cultural activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
