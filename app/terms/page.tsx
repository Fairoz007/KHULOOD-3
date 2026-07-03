"use client"

import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function TermsPage() {
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
            Terms of Use
          </motion.h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#B08A5A]" />
            <div className="w-2 h-2 rotate-45 border border-[#B08A5A]" />
            <div className="h-[1px] w-12 bg-[#B08A5A]" />
          </div>
          <p className="text-sm tracking-[0.2em] uppercase text-[#2C2C2C]/80 font-medium">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-6 lg:px-12 flex-1 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT (70%) */}
          <div className="lg:col-span-7 flex flex-col">
            
            <div className="max-w-[900px]">
              
              {/* Block 01 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">01</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Acceptance of Terms</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    Welcome to the khulood.om website (the “Website”) Terms and Conditions. Khulood Al Busaidi Trading, Al Seeb, Muscat Governate (“Khulood”, “we”, “us” or “our”) provides the services available on the Website. Your use of this Website is governed by these Terms and Conditions set out below. By using any part of this Website, completing your customer registration with us and/or placing an order on the Website you agree to be bound by the Terms and Conditions.
                  </p>
                  <p>
                    To be eligible to purchase goods on this Website and to lawfully enter into and form contracts on this Website under English law you must register to use the Website and be the holder of a valid debit/credit card.
                  </p>
                </div>
              </div>

              {/* Block 02 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">02</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Website Use</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    We grant you a limited, revocable, and non-exclusive licence to access and make personal use of the Website. Please note that you may not frame or utilise framing techniques to enclose the Website or any portion thereof without our prior written consent.
                  </p>
                  <p>
                    We are not responsible for the content of any off-Website pages or any other websites linked to or from the Website. Links appearing on the Website are for convenience only and are not an endorsement by us, our affiliates or our partners of the referenced content, product, service, or supplier.
                  </p>
                </div>
              </div>

              {/* Block 03 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">03</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Orders & Payments</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    You place your order request for goods from the Website by clicking on the confirm order button at the end of the on-line order process. Once you have placed your order, we will send to you an acknowledgement providing you with a payment reference and the value of your order. This is not an order confirmation or order acceptance from Khulood.
                  </p>
                  <p>
                    All prices indicated for products available via the Website are exclusive of delivery charges. Please note that in some countries additional duties may be payable to your local tax authorities on receipt of your delivery. You will be responsible for payment of any such import duties and taxes.
                  </p>
                </div>
              </div>

              {/* Block 04 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">04</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Product Information</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    We will take all reasonable care to ensure that all details, descriptions and prices of products appearing on the Website are correct at the time when the relevant information was entered onto the system. We attempt to be as accurate as possible when describing products; however, to the extent permitted by applicable law, we do not warrant that product descriptions, colours or other content available on the Website are accurate, complete, reliable, current, or error-free.
                  </p>
                </div>
              </div>

              {/* Block 05 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">05</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Intellectual Property</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    All content available on the Website, including, but not limited to, text, graphics, logos, button icons, images, audio clips, data compilations, and software, and the compilation thereof (the “Content”) is the property of Khulood, our affiliates, our partners or our licensors, and is protected by international copyright laws.
                  </p>
                </div>
              </div>

              {/* Block 06 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">06</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Privacy</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    Please review our Privacy Policy, which explains our use of information you provide via the Website, so that you may understand our privacy practices. All the Personal Information that you provide will be held in accordance with the Privacy Policy. We know how much data security matters to all our customers. With this in mind we will treat your data with the utmost care and take all appropriate steps to protect it.
                  </p>
                </div>
              </div>

              {/* Block 07 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">07</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">User Responsibilities</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    You agree not to impersonate any other person or entity or to use a false name or a name that you are not authorised to use. You agree to defend, indemnify and hold us harmless for any loss, damages or costs, including reasonable legal fees, resulting from any third-party claim, action, or demand resulting from your use of the Website.
                  </p>
                </div>
              </div>

              {/* Block 08 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">08</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Limitation of Liability</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    The Website is presented “as is”. We make no representations or warranties of any kind whatsoever, express or implied, in connection with these terms or the Website. Further, to the fullest extent permitted by law we will not be liable for any direct, indirect, special, incidental, or consequential damages of any kind (including lost profits) related to the Website regardless of the form of action whether in contract, tort (including negligence), or otherwise.
                  </p>
                </div>
              </div>

              {/* Block 09 */}
              <div className="pb-16 border-b border-[#B08A5A]/20 mb-16">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">09</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Changes to Terms</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    We reserve the right to change these Terms and Conditions at any time and we encourage you to revisit these Terms and Conditions periodically to ensure that you are at all times fully aware of our Terms and Conditions. Any changes are effective immediately upon posting to the Website. Your continued use of the Website constitutes your agreement to all such Terms and Conditions.
                  </p>
                </div>
              </div>

              {/* Block 10 */}
              <div className="pb-16 border-b border-[#B08A5A]/20">
                <span className="block text-xs font-medium tracking-[0.2em] text-[#B08A5A] mb-4">10</span>
                <h2 className="font-serif text-3xl text-[#2C2C2C] italic mb-6">Contact Information</h2>
                <div className="space-y-4 text-sm text-[#2C2C2C]/70 leading-relaxed font-light">
                  <p>
                    If you have any questions regarding these Terms and Conditions, please contact us by email at info@khulood.om.
                  </p>
                </div>
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-24 text-center bg-[#EFE8DF]/40 p-12 rounded-2xl border border-[#B08A5A]/10">
                <h2 className="font-serif text-3xl italic text-[#2C2C2C] mb-4">Questions about our policies?</h2>
                <p className="text-sm text-[#2C2C2C]/70 tracking-widest uppercase mb-8">We are here to provide complete clarity.</p>
                <a href="/contact" className="inline-block border border-[#B08A5A] text-[#B08A5A] px-12 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#B08A5A] hover:text-[#F8F6F3] transition-colors">
                  Contact Our Team
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT (30%) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src="/terms_right_vase.png"
                  alt="Minimal luxury composition with ceramic vase"
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
