import { Taviraj } from "next/font/google"
import Image from "next/image"

const taviraj = Taviraj({ subsets: ["latin"], weight: ["300"] })

const properties = [
  {
    id: 1,
    type: "House | Heritage",
    name: "Victorian Manor",
    address: "42 Heritage Lane",
    location: "Sydney, 2000",
    price: "$4,800,000",
    image: "/images/victorian.png.jpeg",
    features: {
      bedrooms: 5,
      bathrooms: 4,
      parking: 2,
      floors: 3,
      rooms: 12,
      additional: 3,
    },
  },
  {
    id: 2,
    type: "Manor | Colonial",
    name: "Belmont House",
    address: "15 Colonial Drive",
    location: "Melbourne, 3000",
    price: "$3,900,000",
    image: "/images/belmont.png.jpeg",
    features: {
      bedrooms: 6,
      bathrooms: 4,
      parking: 3,
      floors: 2,
      rooms: 14,
      additional: 4,
    },
  },
  {
    id: 3,
    type: "Estate | Federation",
    name: "Federation Estate",
    address: "78 Heritage Street",
    location: "Brisbane, 4000",
    price: "$5,250,000",
    image: "/images/federation.png.jpeg",
    features: {
      bedrooms: 7,
      bathrooms: 5,
      parking: 4,
      floors: 3,
      rooms: 16,
      additional: 5,
    },
  },
  {
    id: 4,
    type: "Mansion | Gothic",
    name: "Gothic Revival",
    address: "123 Victorian Avenue",
    location: "Adelaide, 5000",
    price: "$4,200,000",
    image: "/federation.png.jpeg",
    features: {
      bedrooms: 8,
      bathrooms: 6,
      parking: 4,
      floors: 4,
      rooms: 18,
      additional: 6,
    },
  },
]

export default function Historical() {
  return (
    <div className={taviraj.className}>
      <div className="bg-[#211f17] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-taviraj font-light text-[48px] leading-[60px] tracking-[2px] text-center text-[#D4AF37] mb-8">
              Historical Gems
            </h2>

            {/* Diamond Separator */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#d4af37]"></div>
              <div className="w-2 h-2 bg-[#d4af37] rotate-45"></div>
              <div className="w-12 h-[1px] bg-[#d4af37]"></div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <div key={property.id} className="group bg-[#1A1814] rounded-lg overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Property Details */}
                <div className="p-6 space-y-3">
                  <div className="text-[#E2DBCC] font-archivo font-light text-base leading-6">{property.type}</div>
                  <h3 className="text-[#E8D09A] text-xl font-light">{property.name}</h3>
                  <div className="space-y-1">
                    <div className="text-[#E2DBCC] font-archivo font-light text-base leading-6">{property.address}</div>
                    <div className="text-[#E2DBCC] font-archivo font-light text-base leading-6">
                      {property.location}
                    </div>
                  </div>
                  <div className="text-[#D4AF37] font-archivo font-light text-base leading-6">{property.price}</div>

                  {/* Property Features */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <span className="flex items-center gap-1 text-[#E2DBCC] font-archivo font-light text-base leading-6">
                      <Image
                        src="/images/bedroom.png"                        
                        alt="Bedrooms"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span>{property.features.bedrooms}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#E2DBCC] font-archivo font-light text-base leading-6">
                      <Image
                        src="/images/shower.png"
                        alt="Bathrooms"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span>{property.features.bathrooms}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#E2DBCC] font-archivo font-light text-base leading-6">
                      <Image
                        src="/images/carpark.png"
                        alt="Parking"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span>{property.features.parking}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#E2DBCC] font-archivo font-light text-base leading-6">
                      <Image
                        src="/images/window.png"
                        alt="Floors"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span>{property.features.floors}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#E2DBCC] font-archivo font-light text-base leading-6">
                      <Image
                        src="/images/bedroom.png"
                        alt="Rooms"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span>{property.features.rooms}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#E2DBCC] font-archivo font-light text-base leading-6">
                      <Image
                        src="/images/pool.png"
                        alt="Additional"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span>{property.features.additional}</span>
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className="flex-1 py-3 rounded flex items-center justify-center gap-2 text-[#D4AF37] border border-[#656565] hover:bg-[#211F17] transition-colors">
                      <Image
                        src="/images/smallMap.png"
                        alt="Map icon"
                        width={16}
                        height={16}
                      />
                      <span className="font-archivo font-light text-base leading-6">See map</span>
                    </button>
                    <button className="flex-1 py-3 rounded flex items-center justify-center gap-2 text-[#D4AF37] border border-[#656565] hover:bg-[#211F17] transition-colors">
                      <Image
                        src="/images/smallLogo.png"
                        alt="Agent icon"
                        width={16}
                        height={16}
                      />
                      <span className="font-archivo font-light text-base leading-6">Agent</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

