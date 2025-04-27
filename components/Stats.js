import { Diamond } from "lucide-react"
import { Taviraj } from "next/font/google"
import Image from "next/image"

const taviraj = Taviraj({ subsets: ["latin"], weight: ["400"] })

export default function Stats() {
  return (
    <div className={taviraj.className}>
      <div className="bg-[#211f17] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Black Diamondz Stats */}
            <div className="flex-1 mb-12 lg:mb-0">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-archivo font-normal text-[20px] leading-[21.76px] text-[#E2DBCC]">
                  Black Diamondz
                </h2>
                <button className="px-6 py-2 border border-[#656565] text-[#d4af37] hover:border-[#d4af37] transition-colors font-archivo font-light text-base leading-6">
                  More about Black Diamondz
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="font-taviraj font-normal text-[48px] leading-[81.89px] text-[#D4AF37] mb-2">9</div>
                  <div className="font-archivo font-light text-base leading-6 text-[#E2DBCC]">Project</div>
                </div>
                <div className="text-center">
                  <div className="font-taviraj font-normal text-[48px] leading-[81.89px] text-[#D4AF37] mb-2">34</div>
                  <div className="font-archivo font-light text-base leading-6 text-[#E2DBCC]">Units</div>
                </div>
                <div className="text-center">
                  <div className="font-taviraj font-normal text-[48px] leading-[81.89px] text-[#D4AF37] mb-2">9428</div>
                  <div className="font-archivo font-light text-base leading-6 text-[#E2DBCC]">Total SQM</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex flex-col items-center mx-12">
              <div className="flex-1 w-[1px] bg-[#656565]"></div>
              <div className="my-4">
                <Diamond className="text-[#d4af37] w-3 h-3" />
              </div>
              <div className="flex-1 w-[1px] bg-[#656565]"></div>
            </div>

            {/* Australian Market Stats */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-archivo font-normal text-[20px] leading-[21.76px] text-[#E2DBCC]">
                  Australian Market
                </h2>
                <button className="px-6 py-2 border border-[#656565] text-[#d4af37] hover:border-[#d4af37] transition-colors">
                  See Market Insight
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="font-taviraj font-normal text-[48px] leading-[81.89px] text-[#D4AF37] mb-2">4</div>
                  <div className="font-archivo font-light text-base leading-6 text-[#E2DBCC]">Project</div>
                </div>
                <div className="text-center">
                  <div className="font-taviraj font-normal text-[48px] leading-[81.89px] text-[#D4AF37] mb-2">24</div>
                  <div className="font-archivo font-light text-base leading-6 text-[#E2DBCC]">Units</div>
                </div>
                <div className="text-center">
                  <div className="font-taviraj font-normal text-[48px] leading-[81.89px] text-[#D4AF37] mb-2">7325</div>
                  <div className="font-archivo font-light text-base leading-6 text-[#E2DBCC]">Total SQM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

