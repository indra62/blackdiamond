"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [scrollCount, setScrollCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const count = Math.min(Math.floor(window.scrollY / 10), 100)
      setScrollCount(count)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/image-2.png"
          alt="Sydney Harbour aerial view with Opera House and Harbour Bridge"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[#FFD700] text-4xl md:text-5xl lg:text-6xl font-light max-w-5xl leading-normal md:leading-normal lg:leading-normal mb-8">
          Premier luxury real estate and lifestyle strategic excellence
        </h1>

        <div className="text-white text-xl mb-2">
          Hello, <span className="text-[#FFD700]">George</span>
        </div>
        <div className="text-white text-lg">Let's find the best property for you.</div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center">
          <div className="text-[#FFD700] text-2xl mb-2">{scrollCount}</div>
          <div className="text-white text-sm mb-2">Scroll to start</div>
          <ChevronDown className="text-[#FFD700] animate-bounce" />
        </div>
      </div>
    </div>
  )
}

