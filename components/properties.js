"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Taviraj } from "next/font/google"

const taviraj = Taviraj({ subsets: ["latin"], weight: ["400"] })

const categories = [
  { id: "buy", label: "Buy", type: "text" },
  { id: "sell", label: "Sell", type: "text" },
  {
    id: "city",
    label: "City",
    type: "icon",
  },
  {
    id: "country",
    label: "Country",
    type: "icon",
  },
  {
    id: "beachfront",
    label: "Beachfront",
    type: "icon",
  },
  {
    id: "apartment",
    label: "Apartment",
    type: "icon",
  },
  {
    id: "suburbs",
    label: "Suburbs",
    type: "icon",
  },
  {
    id: "pool",
    label: "Pool",
    type: "icon",
  },
]

const properties = [
  {
    id: 1,
    image: "/images/anandes.png",
    type: "House",
    location: "Beachfront",
    name: "Anandes Hotel",
    address: "5408/101 Middle Street",
    city: "Sydney",
    postcode: "2000",
    price: "Contact Agent for Sell Price",
    features: {
      bedrooms: 3,
      bathrooms: 5,
      parking: 1,
      floors: 6,
      rooms: 8,
      additional: 2,
    },
    categories: ["buy", "beachfront", "city"],
  },
  {
    id: 2,
    image: "/images/pacific.png",
    type: "Apartment",
    location: "City View",
    name: "Pacific Plaza",
    address: "2309/45 Business Avenue",
    city: "Melbourne",
    postcode: "3000",
    price: "$1,200,000",
    features: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      floors: 4,
      rooms: 3,
      additional: 1,
    },
    categories: ["buy", "apartment", "city"],
  },
  {
    id: 3,
    image: "/images/sunrise.png",
    type: "Villa",
    location: "Mountain View",
    name: "Sunrise Retreat",
    address: "1254/78 Serenity Way",
    city: "Brisbane",
    postcode: "4000",
    price: "Contact Agent for Sell Price",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      floors: 5,
      rooms: 6,
      additional: 3,
    },
    categories: ["sell", "country"],
  },
  {
    id: 4,
    image: "/images/azure.png",
    type: "Penthouse",
    location: "Ocean View",
    name: "Azure Heights",
    address: "601/15 Waterfront Avenue",
    city: "Gold Coast",
    postcode: "4217",
    price: "$3,500,000",
    features: {
      bedrooms: 5,
      bathrooms: 4,
      parking: 3,
      floors: 7,
      rooms: 9,
      additional: 4,
    },
    categories: ["buy", "beachfront", "apartment"],
  },
]

const extendedProperties = [
  ...properties,
  {
    id: 5,
    image:
      "/images/azure.png",
    type: "Villa",
    location: "Beachfront",
    name: "Coastal Haven",
    address: "789 Seaside Boulevard",
    city: "Gold Coast",
    postcode: "4217",
    price: "$4,200,000",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      floors: 2,
      rooms: 8,
      additional: 3,
    },
    categories: ["buy", "beachfront", "pool"],
  },
  {
    id: 6,
    image:
      "/images/azure.png",
    type: "Penthouse",
    location: "City View",
    name: "Sky Tower",
    address: "1010 High Street",
    city: "Sydney",
    postcode: "2000",
    price: "$5,800,000",
    features: {
      bedrooms: 4,
      bathrooms: 4,
      parking: 3,
      floors: 1,
      rooms: 7,
      additional: 2,
    },
    categories: ["sell", "apartment", "city"],
  },
  {
    id: 7,
    image:
      "/images/azure.png",
    type: "House",
    location: "Suburbs",
    name: "Garden Estate",
    address: "42 Maple Avenue",
    city: "Melbourne",
    postcode: "3000",
    price: "$2,900,000",
    features: {
      bedrooms: 5,
      bathrooms: 3,
      parking: 2,
      floors: 2,
      rooms: 9,
      additional: 4,
    },
    categories: ["buy", "suburbs", "pool"],
  },
  {
    id: 8,
    image:
      "/images/azure.png",
    type: "Apartment",
    location: "Ocean View",
    name: "Waves Residence",
    address: "567 Coast Road",
    city: "Perth",
    postcode: "6000",
    price: "$1,800,000",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      floors: 1,
      rooms: 5,
      additional: 1,
    },
    categories: ["buy", "apartment", "beachfront"],
  },
  {
    id: 9,
    image:
      "/images/azure.png",
    type: "Villa",
    location: "Mountain View",
    name: "Highland Retreat",
    address: "123 Summit Drive",
    city: "Brisbane",
    postcode: "4000",
    price: "$3,400,000",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      floors: 2,
      rooms: 7,
      additional: 3,
    },
    categories: ["sell", "country", "pool"],
  },
  {
    id: 10,
    image:
      "/images/azure.png",
    type: "Penthouse",
    location: "City View",
    name: "Urban Heights",
    address: "789 Central Avenue",
    city: "Sydney",
    postcode: "2000",
    price: "$4,500,000",
    features: {
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      floors: 1,
      rooms: 6,
      additional: 2,
    },
    categories: ["buy", "apartment", "city"],
  },
  {
    id: 11,
    image:
      "/images/azure.png",
    type: "House",
    location: "Beachfront",
    name: "Sunset Villa",
    address: "321 Beach Road",
    city: "Gold Coast",
    postcode: "4217",
    price: "$6,200,000",
    features: {
      bedrooms: 5,
      bathrooms: 4,
      parking: 3,
      floors: 2,
      rooms: 10,
      additional: 4,
    },
    categories: ["sell", "beachfront", "pool"],
  },
  {
    id: 12,
    image:
      "/images/azure.png",
    type: "Apartment",
    location: "Harbor View",
    name: "Harbor Lights",
    address: "456 Marina Way",
    city: "Sydney",
    postcode: "2000",
    price: "$2,800,000",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      floors: 1,
      rooms: 5,
      additional: 2,
    },
    categories: ["buy", "apartment", "city"],
  },
]

export default function Properties({ showFilters = true, showNavigation = true, propertyCount = 4 }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedFilters, setSelectedFilters] = useState(["buy", "city"])
  const [activeTab, setActiveTab] = useState("buy")
  const [filteredProperties, setFilteredProperties] = useState(extendedProperties)
  const itemsPerPage = 4

  useEffect(() => {
    const newFilteredProperties = extendedProperties.filter((property) =>
      selectedFilters.every((filter) => property.categories.includes(filter)),
    )
    setFilteredProperties(newFilteredProperties)
    setCurrentPage(0)
  }, [selectedFilters])

  const displayProperties = showNavigation
    ? filteredProperties.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : filteredProperties.slice(0, propertyCount)

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev))
  }

  const toggleFilter = (filterId) => {
    if (filterId === "buy" || filterId === "sell") {
      setActiveTab(filterId)
      setSelectedFilters((prev) => [filterId, ...prev.filter((id) => id !== "buy" && id !== "sell")])
    } else {
      setSelectedFilters((prev) =>
        prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId],
      )
    }
  }

  return (
    <div className="bg-[#211f17] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Only show filters if showFilters prop is true */}
        {showFilters && (
          <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-12">
            <div className="flex gap-8">
              {categories
                .filter((cat) => cat.type === "text")
                .map((category) => (
                  <div
                    key={category.id}
                    className={`cursor-pointer ${activeTab === category.id ? "text-[#D4AF37]" : "text-[#656565]"}`}
                    onClick={() => toggleFilter(category.id)}
                  >
                    <span className="font-archivo font-light text-base leading-6 text-center">{category.label}</span>
                    {activeTab === category.id && <div className="w-full h-[2px] bg-[#D4AF37] mt-2" />}
                  </div>
                ))}
            </div>

            <div className="flex gap-8">
              {categories
                .filter((cat) => cat.type === "icon")
                .map((category) => (
                  <div
                    key={category.id}
                    className={`flex flex-col items-center cursor-pointer ${
                      selectedFilters.includes(category.id) ? "text-[#D4AF37]" : "text-[#656565]"
                    }`}
                    onClick={() => toggleFilter(category.id)}
                  >
                    <div className="mb-1">
                      <Image
                        src={`/images/${category.id}.png`}
                        alt={`${category.label} icon`}
                        width={24}
                        height={24}
                        className="opacity-current"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <span
                      className={`font-archivo font-light text-xs leading-[13.06px] text-center ${
                        selectedFilters.includes(category.id) ? "text-[#D4AF37]" : "text-[#656565]"
                      }`}
                    >
                      {category.label}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProperties.map((property) => (
            <div key={property.id} className="bg-[#1A1814] rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="text-[#E2DBCC] font-archivo font-light text-base leading-6 mb-2">
                  {property.type} | {property.location}
                </div>
                <h3 className={`${taviraj.className} font-normal text-2xl leading-[40.94px] text-[#E8D09A] mb-2`}>
                  {property.name}
                </h3>
                <div className="text-[#E2DBCC] font-archivo font-light text-base leading-6 mb-4">
                  {property.address}
                  <br />
                  {property.city}, {property.postcode}
                </div>
                <div className="text-[#D4AF37] font-archivo font-light text-base leading-6 mb-6">{property.price}</div>

                {/* Property Features */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Image
                      src="/images/bedroom.png"
                      alt="Bedrooms"
                      width={16}
                      height={16}
                      className="opacity-60"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span>{property.features.bedrooms}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/images/shower.png"
                      alt="Bathrooms"
                      width={16}
                      height={16}
                      className="opacity-60"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span>{property.features.bathrooms}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/images/carpark.png"
                      alt="Parking"
                      width={16}
                      height={16}
                      className="opacity-60"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span>{property.features.parking}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/images/swimmingpool.png"
                      alt="Floors"
                      width={16}
                      height={16}
                      className="opacity-60"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span>{property.features.floors}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/images/window.png"
                      alt="Rooms"
                      width={16}
                      height={16}
                      className="opacity-60"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span>{property.features.rooms}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/images/garden.png"
                      alt="Additional"
                      width={16}
                      height={16}
                      className="opacity-60"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span>{property.features.additional}</span>
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 py-3 rounded flex items-center justify-center gap-2 text-[#D4AF37] border border-[#656565] hover:bg-[#211F17] transition-colors">
                    <Image
                      src="/images/smallMap.png"
                      alt="Map icon"
                      width={16}
                      height={16}
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span className="font-archivo font-light text-base leading-6">See map</span>
                  </button>
                  <button className="flex-1 py-3 rounded flex items-center justify-center gap-2 text-[#D4AF37] border border-[#656565] hover:bg-[#211F17] transition-colors">
                    <Image
                      src="/images/smallLogo.png"
                      alt="Agent icon"
                      width={16}
                      height={16}
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span className="font-archivo font-light text-base leading-6">Agent</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation - only show if showNavigation prop is true */}
        {showNavigation && (
          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <Image
                  key={index}
                  src={index === currentPage ? "/images/activePageIndicator.png" : "/images/pageIndicator.png"}
                  alt={index === currentPage ? "Active page indicator" : "Page indicator"}
                  width={8}
                  height={8}
                  style={{ width: "auto", height: "auto" }}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                className={`p-2 border border-[#656565] rounded ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:border-[#d4af37] hover:text-[#d4af37]"
                } transition-colors`}
                onClick={handlePrevious}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className={`p-2 border border-[#656565] rounded ${
                  currentPage === totalPages - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:border-[#d4af37] hover:text-[#d4af37]"
                } transition-colors`}
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                href="/buy"
                className="flex items-center gap-2 bg-[#d4af37] text-black px-6 py-2 rounded hover:bg-[#C19B2A] transition-colors"
              >
                See All Properties
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

