import Hero from "@/components/hero"
import FeatureSection from "@/components/feature-section"
import ServicesSection from "@/components/services-section"
import LatestSection from "@/components/latest-section"
import LatestTours from "@/components/latest-tours"
import FormSection from "@/components/form-section"


export default function Home() {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        
        <Hero />
        <FeatureSection />
        
        <LatestSection />
        <LatestTours />
        
      </div>
  )
}
