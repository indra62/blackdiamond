import Link from "next/link"
import Image from "next/image"
import { Taviraj } from "next/font/google"

const taviraj = Taviraj({ subsets: ["latin"], weight: ["300"] })

export default function AboutUs() {
  return (
    <div className={taviraj.className}>
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/aboutUs.png"
            alt="Luxury interior with person sitting in chair"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-[#211F17] to-[#211F17]"
            style={{ "--tw-gradient-stops": "transparent 43.13%, #211F17 76.99%, #211F17 100%" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-[#E8D09A] text-[48px] font-light leading-[60px] tracking-[2px] mb-8">
              Experience your life
              <br />
              the luxury way
            </h2>

            {/* Diamond Separator */}
            <div className="mb-8">
              <Image
                src="/images/diamondSeparator.png"
                alt="Decorative diamond separator"
                width={120}
                height={8}
              />
            </div>

            <p className="text-[#E2DBCC] font-archivo font-light text-base leading-6 mb-12 max-w-xl">
              Black Diamondz Group seamlessly merges global expertise with local insight, offering bespoke luxury
              property and lifestyle solutions that redefine how you live and invest.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-[#d4af37] hover:text-[#e5c04b] transition-colors group"
            >
              <span className="mr-2 font-archivo font-light text-base leading-6">Learn more about us</span>
              <Image
                src="/images/shape.png"
                alt="Arrow icon"
                width={20}
                height={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

