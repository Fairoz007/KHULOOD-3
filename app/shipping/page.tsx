"use client"

import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Globe, Package, MapPin, FileText, Plus } from "lucide-react"

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] flex flex-col">
      <Navigation />
      
      {/* HERO SECTION */}
      <section className="pt-40 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl lg:text-7xl italic text-[#2C2C2C] mb-8"
          >
            Shipping & Delivery
          </motion.h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#B08A5A]" />
            <div className="w-2 h-2 rotate-45 border border-[#B08A5A]" />
            <div className="h-[1px] w-12 bg-[#B08A5A]" />
          </div>
          <p className="text-sm tracking-[0.2em] uppercase text-[#2C2C2C]/80 font-medium">
            Fast • Secure • Worldwide Delivery
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-6 lg:px-12 flex-1 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT (70%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* FAQ Item 1 */}
            <div className="flex items-center gap-8 py-8 border-t border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <Globe className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-2">Do you ship internationally?</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">Yes, we offer standard and express shipping options to all countries with DHL.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* FAQ Item 2 */}
            <div className="flex items-center gap-8 py-8 border-t border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <Package className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-2">How long will it take to receive my order?</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">Once an order is placed please allow 14 – 21 business days for the order to be packed and shipped from our warehouse. Please allow up to 10 business days for the package to arrive from the date your order is shipped.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* FAQ Item 3 */}
            <div className="flex items-center gap-8 py-8 border-t border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <MapPin className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-2">How can I track my order?</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">Once shipped you will receive an email with your tracking information.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* FAQ Item 4 */}
            <div className="flex items-center gap-8 py-8 border-y border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <FileText className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-2">Shipping Address</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">We will only ship to the shipping address entered when the order was first placed. Shipping address cannot be changed.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

          </div>

          {/* RIGHT (30%) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src="/shipping_right_vase.png"
                  alt="Luxury lifestyle interior with vase"
                  fill
                  className="object-cover object-center rounded-tl-[120px] rounded-br-[120px]"
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
