"use client"

import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Plus, RotateCcw, Package, Clock, Globe, XCircle, Mail } from "lucide-react"

export default function ReturnsPage() {
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
            Returns & Refunds
          </motion.h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#B08A5A]" />
            <div className="w-2 h-2 rotate-45 border border-[#B08A5A]" />
            <div className="h-[1px] w-12 bg-[#B08A5A]" />
          </div>
          <p className="text-sm tracking-[0.2em] uppercase text-[#2C2C2C]/80 font-medium">
            Simple • Transparent • Hassle-Free
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-6 lg:px-12 flex-1 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT (70%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* FAQ Item 1 */}
            <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <RotateCcw className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8 pt-2">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Return Eligibility</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">We do not offer exchanges or returns but we will alter you item to ensure you are happy with it. For alterations, items must be posted back within 15 days from the date the order was shipped.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* FAQ Item 2 */}
            <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <Package className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8 pt-2">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Return Process</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">Please contact us and inform us to expect your item. Return shipping and any reverse duties are the responsibility of the customer. Goods are classified as faulty if they are received damaged.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* FAQ Item 3 */}
            <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <Clock className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8 pt-2">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Refund Timeline</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">As we do not offer direct refunds, any approved adjustments or credits will be communicated with you once your item is received and inspected.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* FAQ Item 4 */}
            <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <Globe className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8 pt-2">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">International Returns</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">International alteration requests follow the same guidelines. Please ensure items are marked properly to avoid unnecessary duties during the return journey.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* FAQ Item 5 */}
            <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <XCircle className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8 pt-2">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Non-Returnable Items</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">Please note, any damaged item outside of a 30-day return window cannot be exchanged. Orders cannot be changed or updated once they are placed as they immediately start processing.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

            {/* FAQ Item 6 */}
            <div className="flex items-start gap-8 py-8 border-y border-[#B08A5A]/20">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                <Mail className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="flex-1 pr-8 pt-2">
                <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Contact Support</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">If your item is faulty upon receipt or if you need assistance, please get in touch with our team directly for a prompt resolution.</p>
              </div>
              <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>

          </div>

          {/* RIGHT (30%) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src="/returns_right_abaya.png"
                  alt="Luxury lifestyle interior with folded abaya and gift box"
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
