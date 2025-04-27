"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MenuOverlay from "./MenuOverlay"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-black text-white h-[60px] flex items-stretch">
        {/* Logo Section */}
        <div className="flex items-center px-6 border-r border-gray-800">
          <Link href="/">
            <div className="flex flex-col items-center cursor-pointer">
            <Image
                src="/images/smallLogo.png"
                alt="Black Diamondz Logo"
                width={24}
                height={24}
                className="w-6 h-6"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Location Section */}
        <div className="flex items-center px-6 border-r border-gray-800 min-w-[250px]">
          <div className="flex flex-col">
            <label className="font-archivo font-light text-xs leading-[13.06px] text-[#FBF4E4]">Location</label>
            <input
              type="text"
              defaultValue="San Francisco"
              className="bg-transparent font-archivo font-light text-base leading-6 text-[#D4AF37] focus:outline-none w-full py-1"
            />
          </div>
        </div>

        {/* Type Section */}
        <div className="flex items-center px-6 border-r border-gray-800 min-w-[250px]">
          <div className="flex flex-col w-full">
            <label className="font-archivo font-light text-xs leading-[13.06px] text-[#FBF4E4]">Type</label>
            <Select>
              <SelectTrigger className="border-0 p-0 h-auto bg-transparent focus:ring-0 focus:ring-offset-0 flex items-center">
                <SelectValue
                  placeholder="Select type..."
                  className="font-archivo font-light text-base leading-6 pl-0 !text-inherit"
                />
                
              </SelectTrigger>
              <SelectContent className="bg-[#211f17] border-[#656565]/20">
                <SelectItem
                  value="house"
                  className="font-archivo font-light text-base leading-6 text-[#656565] hover:text-[#D4AF37] hover:bg-transparent focus:bg-transparent focus:text-[#D4AF37]"
                >
                  House
                </SelectItem>
                <SelectItem
                  value="apartment"
                  className="font-archivo font-light text-base leading-6 text-[#656565] hover:text-[#D4AF37] hover:bg-transparent focus:bg-transparent focus:text-[#D4AF37]"
                >
                  Apartment
                </SelectItem>
                <SelectItem
                  value="villa"
                  className="font-archivo font-light text-base leading-6 text-[#656565] hover:text-[#D4AF37] hover:bg-transparent focus:bg-transparent focus:text-[#D4AF37]"
                >
                  Villa
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Bedroom Section */}
        <div className="flex items-center px-6 border-r border-gray-800 min-w-[250px]">
          <div className="flex flex-col w-full">
            <label className="font-archivo font-light text-xs leading-[13.06px] text-[#FBF4E4]">Bedroom</label>
            <Select>
              <SelectTrigger className="border-0 p-0 h-auto bg-transparent focus:ring-0 focus:ring-offset-0 flex items-center">
                <SelectValue
                  placeholder="Select qty..."
                  className="font-archivo font-light text-base leading-6 pl-0 !text-inherit"
                />
               
              </SelectTrigger>
              <SelectContent className="bg-[#211f17] border-[#656565]/20">
                <SelectItem
                  value="1"
                  className="font-archivo font-light text-base leading-6 text-[#656565] hover:text-[#D4AF37] hover:bg-transparent focus:bg-transparent focus:text-[#D4AF37]"
                >
                  1 Bedroom
                </SelectItem>
                <SelectItem
                  value="2"
                  className="font-archivo font-light text-base leading-6 text-[#656565] hover:text-[#D4AF37] hover:bg-transparent focus:bg-transparent focus:text-[#D4AF37]"
                >
                  2 Bedrooms
                </SelectItem>
                <SelectItem
                  value="3"
                  className="font-archivo font-light text-base leading-6 text-[#656565] hover:text-[#D4AF37] hover:bg-transparent focus:bg-transparent focus:text-[#D4AF37]"
                >
                  3 Bedrooms
                </SelectItem>
                <SelectItem
                  value="4"
                  className="font-archivo font-light text-base leading-6 text-[#656565] hover:text-[#D4AF37] hover:bg-transparent focus:bg-transparent focus:text-[#D4AF37]"
                >
                  4+ Bedrooms
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Value Section */}
        <div className="flex items-center px-6 border-r border-gray-800 min-w-[250px]">
          <div className="flex flex-col">
            <label className="font-archivo font-light text-xs leading-[13.06px] text-[#FBF4E4]">Value</label>
            <input
              type="text"
              defaultValue="87740245"
              className="bg-transparent font-archivo font-light text-base leading-6 text-[#D4AF37] focus:outline-none w-full py-1"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-center px-6 border-r border-gray-800">
          <button className="flex items-center text-[#FFD700] hover:text-[#FFE55C] transition-colors">
            <span className="mr-2 font-archivo font-light text-base leading-6 text-[#D4AF37]">Search</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Menu Button */}
        <div className="flex items-center px-6">
          <button onClick={() => setIsMenuOpen(true)} className="text-[#FFD700]">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

