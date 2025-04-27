import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Archivo } from "next/font/google"

const archivo = Archivo({ subsets: ["latin"] })

export default function Footer() {
  return (
    <footer className={`bg-[#211f17] text-white py-32 ${archivo.className}`}>
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col justify-between h-full">
            <div /> {/* Empty div to push content to bottom */}
            <div>
              <Image
                src="/Users/indrafahlevy/black-diamond/black-diamond-website/images/bdBigLogo.png"
                alt="Black Diamondz Property Concierge"
                width={400}
                height={100}
                className="mb-4"
              />
              <div className="font-archivo font-light text-base leading-6 tracking-normal text-white">
                © 2005–2023 • Black Diamondz Corp.
              </div>
            </div>
          </div>

          {/* Newsletter and Contact Section */}
          <div className="space-y-16">
            {/* Newsletter */}
            <div>
              <div className="font-archivo font-light text-base leading-6 tracking-normal text-[#A1A1AA]">
                BLACK DIAMONDZ NEWSLETTER
              </div>
              <h3 className="font-archivo font-normal text-xl leading-[21.76px] tracking-normal text-[#FBF4E4] mb-4">
                Looking for something specific?
              </h3>
              <Link
                href="/submit-interest"
                className="inline-flex items-center text-[#D4AF37] hover:text-[#e5c04b] transition-colors group"
              >
                <span className="font-archivo font-light text-base leading-6 tracking-normal text-[#FBF4E4] border-b border-[#D4AF37] group-hover:border-[#e5c04b]">
                  Submit your interest
                </span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Contact */}
            <div>
              <div className="font-archivo font-light text-base leading-6 tracking-normal text-[#A1A1AA] mb-8">
                OUR CONTACT
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Monika Tu */}
                <div>
                  <h4 className="font-archivo font-normal text-xl leading-[21.76px] tracking-normal text-[#FBF4E4] mb-1">
                    Monika Tu
                  </h4>
                  <div className="font-archivo font-light text-base leading-6 tracking-normal text-[#71717A] mb-4">
                    Founder & Director
                  </div>
                  <Link
                    href="tel:0409-898-888"
                    className="block font-archivo font-light text-base leading-6 tracking-normal text-[#D4AF37] hover:text-[#e5c04b] transition-colors mb-2"
                  >
                    0409-898-888
                  </Link>
                  <Link
                    href="mailto:monika@blackdiamondz.co.au"
                    className="block font-archivo font-light text-base leading-6 tracking-normal text-[#D4AF37] hover:text-[#e5c04b] transition-colors"
                  >
                    monika@blackdiamondz.co.au
                  </Link>
                </div>

                {/* Jad Khatta */}
                <div>
                  <h4 className="font-archivo font-normal text-xl leading-[21.76px] tracking-normal text-[#FBF4E4] mb-1">
                    Jad Khatta
                  </h4>
                  <div className="font-archivo font-light text-base leading-6 tracking-normal text-[#71717A] mb-4">
                    Director
                  </div>
                  <Link
                    href="tel:0432-669-287"
                    className="block font-archivo font-light text-base leading-6 tracking-normal text-[#D4AF37] hover:text-[#e5c04b] transition-colors mb-2"
                  >
                    0432-669-287
                  </Link>
                  <Link
                    href="mailto:jad@blackdiamondz.co.au"
                    className="block font-archivo font-light text-base leading-6 tracking-normal text-[#D4AF37] hover:text-[#e5c04b] transition-colors"
                  >
                    jad@blackdiamondz.co.au
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


