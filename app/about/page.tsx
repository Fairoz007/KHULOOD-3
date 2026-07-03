"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import Link from "next/link"
import { ArrowRight, Diamond, Leaf, Scissors, Sparkles } from "lucide-react"



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Split Hero / About Section */}
      <section className="min-h-screen bg-background flex flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Left Content (45%) */}
        <div className="flex-none lg:w-[45%] bg-[#F7F5F2] pt-32 lg:pt-40 pb-16 px-8 lg:px-12 flex flex-col relative z-10">
          <div className="max-w-[520px] mx-auto w-full">
            <h1 className="flex flex-col text-[#2B2B2B] tracking-tight mb-12">
              <span className="font-serif text-5xl md:text-6xl lg:text-7xl italic leading-[1.1]">THE STORY</span>
              <span className="font-serif text-5xl md:text-6xl lg:text-7xl italic leading-[1.1]">BEHIND</span>
            </h1>

            <div className="flex items-center justify-start mb-10 max-w-[200px]">
              <div className="h-[1px] bg-[#B08A5A] flex-1" />
              <Diamond className="text-[#B08A5A] h-3 w-3 mx-4" fill="currentColor" strokeWidth={0} />
              <div className="h-[1px] bg-[#B08A5A] flex-1" />
            </div>

            <span className="text-[11px] tracking-[0.3em] uppercase text-[#B08A5A] font-semibold block mb-8">
              ABOUT KHULOOD
            </span>

            <div className="space-y-6 text-[#2B2B2B]/80 text-[13px] lg:text-sm leading-[2] mb-16">
              <p>
                A passionate and incredibly talented artist, Khulood was passionate about the arts from a young age. After completing a Bachelor's in Fashion Design, at Virginia Commonwealth University School of the Arts in Qatar, Khulood returned to Oman.
              </p>
              <p>
                After more than a year of exploring, developing, and planning – KHULOOD officially launched at the beginning of 2020. The contemporary and elegant designs represent Khulood's own sense of style and are deeply inspired by Omani heritage. The innovative designs have since been worn, locally and regionally, by multiple performers, influencers, and members of the royal family.
              </p>
            </div>

            {/* Brand Values */}
            <div className="flex items-start justify-between border-t border-[#B08A5A]/30 pt-10 mb-16">
              <div className="flex flex-col items-center text-center px-2">
                <Leaf className="text-[#B08A5A] h-6 w-6 mb-4 stroke-[1.5]" />
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#2B2B2B] font-semibold leading-relaxed">
                  INSPIRED BY<br/>OMANI HERITAGE
                </span>
              </div>
              <div className="w-[1px] h-12 bg-[#B08A5A]/30 mt-2" />
              <div className="flex flex-col items-center text-center px-2">
                <Scissors className="text-[#B08A5A] h-6 w-6 mb-4 stroke-[1.5]" />
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#2B2B2B] font-semibold leading-relaxed">
                  HANDCRAFTED<br/>WITH CARE
                </span>
              </div>
              <div className="w-[1px] h-12 bg-[#B08A5A]/30 mt-2" />
              <div className="flex flex-col items-center text-center px-2">
                <Sparkles className="text-[#B08A5A] h-6 w-6 mb-4 stroke-[1.5]" />
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#2B2B2B] font-semibold leading-relaxed">
                  TIMELESS<br/>ELEGANCE
                </span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="flex gap-8 items-center pt-4">
              <div className="relative w-[140px] h-[180px] rounded-[24px] overflow-hidden flex-shrink-0">
                <Image 
                  src="/artisan-hands-crafting-leather-luxury-goods.jpg"
                  alt="Artisan embroidery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-6 h-full items-center">
                <div className="w-[2px] h-[120px] bg-[#B08A5A] flex-shrink-0 rounded-full" />
                <div>
                  <p className="font-serif text-[19px] italic text-[#2B2B2B] leading-[1.6] mb-6">
                    "Every piece is a reflection of our heritage, crafted to be cherished for generations."
                  </p>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B08A5A] font-bold">
                    — KHULOOD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image (55%) */}
        <div className="w-full lg:w-[55%] relative min-h-[60vh] lg:min-h-screen">
          <Image 
            src="/about_hero_right.png"
            alt="KHULOOD Abaya"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>


      <PremiumFooter />
    </main>
  )
}
