"use client"

import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Plus, ShoppingBag, Scissors, Ruler, Truck, CreditCard, RotateCcw, PenTool, Droplet, Globe, Gift } from "lucide-react"

export default function FAQPage() {
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
            Frequently Asked Questions
          </motion.h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#B08A5A]" />
            <div className="w-2 h-2 rotate-45 border border-[#B08A5A]" />
            <div className="h-[1px] w-12 bg-[#B08A5A]" />
          </div>
          <p className="text-sm tracking-[0.2em] uppercase text-[#2C2C2C]/80 font-medium">
            Everything you need to know before placing your order.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-6 lg:px-12 flex-1 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT (70%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* FAQ Items */}
            <div className="space-y-0">
              {/* Item 1 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Ordering</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">To place an order, select your items and proceed to checkout. The product i want is out of stock? Please get in touch with us and we will contact you when the item is restocked.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <Scissors className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Custom Orders</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">All our products are creating using high quality fabrics sourced especially from London. Our Atelier in based in Oman along with our flagship store. Please contact us for custom requests.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <Ruler className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Size Guide</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">What size Should i buy? All our collections are available from XXS-XXL. Check out our style guide to view detailed measurements.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <Truck className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Shipping</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">We offer complimentary standard shipping. Expedited shipping options are available at checkout. Your order will be beautifully packaged and dispatched within 1-3 business days.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <CreditCard className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Payments</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">What payment methods do you accept? We accept paypal, direct debit and credit card.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 6 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <RotateCcw className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Returns</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">For comprehensive details regarding our return policy, please visit our dedicated Returns & Refunds page.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 7 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <PenTool className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Alterations</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">We offer complimentary bespoke alterations to ensure a perfect fit for items purchased directly from our boutique.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 8 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <Droplet className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Care Instructions</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">To preserve the luxury materials, we recommend professional dry cleaning for all our embroidered and delicate pieces.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 9 */}
              <div className="flex items-start gap-8 py-8 border-t border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <Globe className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">International Orders</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">We ship worldwide. Please note that duties and taxes are determined by your local customs and are the responsibility of the recipient.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>

              {/* Item 10 */}
              <div className="flex items-start gap-8 py-8 border-y border-[#B08A5A]/20">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DF] flex items-center justify-center shrink-0 text-[#B08A5A]">
                  <Gift className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex-1 pr-8 pt-2">
                  <h3 className="font-serif text-2xl text-[#2C2C2C] italic mb-3">Gift Packaging</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed font-medium">All items are delivered in our signature luxury packaging. You may also include a personalized note during checkout.</p>
                </div>
                <button className="text-[#B08A5A] hover:opacity-60 transition-opacity pt-3 group">
                  <Plus className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>
            </div>

            {/* Premium Support Section */}
            <div className="mt-20 text-center bg-[#EFE8DF]/40 p-12 rounded-2xl border border-[#B08A5A]/10">
              <h2 className="font-serif text-3xl italic text-[#2C2C2C] mb-4">Need more help?</h2>
              <p className="text-sm text-[#2C2C2C]/70 tracking-widest uppercase mb-8">"We're always here to assist you."</p>
              <a href="/contact" className="inline-block border border-[#B08A5A] text-[#B08A5A] px-12 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#B08A5A] hover:text-[#F8F6F3] transition-colors">
                Contact Us
              </a>
            </div>

          </div>

          {/* RIGHT (30%) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src="/faq_right_fabrics.png"
                  alt="Luxury editorial folded embroidered fabrics"
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
