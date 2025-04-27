import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Properties from "@/components/properties"
import Stats from "@/components/Stats"
import AboutUs from "@/components/AboutUs"
import ExploreCity from "@/components/ExploreCity"
import Recommended from "@/components/Recommended"
import Historical from "@/components/Historical"
import Footer from "@/components/Footer.js"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#211f17]">
      <Header />
      <Hero />
      <Properties />
      <Stats />
      <AboutUs />
      <ExploreCity />
      <Recommended />
      <Historical />
      <Footer />
    </main>
  )
}

