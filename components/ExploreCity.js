import { Taviraj } from "next/font/google"
import Image from "next/image"

const taviraj = Taviraj({ subsets: ["latin"], weight: ["300"] })

const cities = [
  {
    id: 1,
    name: "Sydney",
    image: "/images/sydney.png",
  },
  {
    id: 2,
    name: "Melbourne",
    image: "/images/melbourne.png",
  },
  {
    id: 3,
    name: "Brisbane",
    image: "/images/brisbane.png",
  },
  {
    id: 4,
    name: "Perth",
    image: "/images/perth.jpg",
  },
  {
    id: 5,
    name: "Adelaide",
    image: "/images/adelaide.jpg",
  },
]

export default function ExploreCity() {
  return (
    <div className={taviraj.className}>
      <div className="bg-[#211f17] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#E8D09A] text-[48px] font-light leading-[60px] tracking-[2px] mb-8">
              Explore your perfect city
            </h2>

            {/* Diamond Separator */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/diamondSeparator.png"
                alt="Decorative diamond separator"
                width={120}
                height={8}
              />
            </div>
          </div>

          {/* City Scroll */}
          <div className="relative px-5">
            <div className="flex overflow-x-auto scrollbar-hide gap-5 p-[12px_20px] bg-black">
              {cities.map((city) => (
                <div
                  key={city.id}
                  className="relative flex-none w-[508px] h-[460px] min-w-[210px] max-w-[720px] min-h-[460px] group cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={city.image || "/placeholder.svg"}
                    alt={`${city.name} cityscape`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* City Name */}
                  <div className="absolute bottom-8 left-8">
                    <h3 className="font-taviraj font-light text-[32px] leading-[54.59px] text-white">{city.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

