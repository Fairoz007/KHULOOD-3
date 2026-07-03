"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeritageSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Subtle parallax for the background
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  const FlowerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 2C12 2 15 5.5 15 8.5C15 10.1569 13.6569 11.5 12 11.5C10.3431 11.5 9 10.1569 9 8.5C9 5.5 12 2 12 2Z" fill="currentColor"/>
      <path d="M12 22C12 22 15 18.5 15 15.5C15 13.8431 13.6569 12.5 12 12.5C10.3431 12.5 9 13.8431 9 15.5C9 18.5 12 22 12 22Z" fill="currentColor"/>
      <path d="M22 12C22 12 18.5 15 15.5 15C13.8431 15 12.5 13.6569 12.5 12C12.5 10.3431 13.8431 9 15.5 9C18.5 9 22 12 22 12Z" fill="currentColor"/>
      <path d="M2 12C2 12 5.5 15 8.5 15C10.1569 15 11.5 13.8431 11.5 12C11.5 10.3431 10.1569 9 8.5 9C5.5 9 2 12 2 12Z" fill="currentColor"/>
    </svg>
  )

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#F7F4EF]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <Image
            src="/heritage-bg.png"
            alt="Heritage craftsmanship in KHULOOD atelier"
            fill
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-center"
            loading="lazy"
          />
        </motion.div>
        {/* Soft gradient overlay for text readability on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE7] via-[#F4EFE7]/80 to-transparent lg:w-[50%]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 py-24 flex flex-col justify-center h-full">
        
        <div className="max-w-[620px]">
          {/* Logo & Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start mb-14"
          >
            <div className="text-[#B08A5A] mb-6 w-7 h-7">
              <FlowerIcon />
            </div>
            <span className="text-[11px] tracking-[0.25em] font-medium uppercase text-[#B08A5A]">ABOUT KHULOOD</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-serif text-[46px] sm:text-[56px] lg:text-[64px] text-[#1C1C1C] leading-[1.1] mb-8 tracking-tight text-balance"
          >
            Crafted with Heritage.<br />
            Designed for Today.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-[#4A4A4A] text-[15px] md:text-base font-light tracking-wide mb-16 leading-[1.9] pr-4 sm:pr-0"
          >
            KHULOOD is a contemporary luxury fashion house inspired by the rich culture and artistry of Oman. Our collections blend traditional craftsmanship with modern silhouettes, creating elegant pieces that are both timeless and distinctive.
          </motion.p>

          {/* Bottom Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap sm:flex-nowrap gap-8 sm:gap-6 md:gap-10 items-center justify-between max-w-[540px]"
          >
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#B08A5A] mb-4 w-6 h-6">
                <FlowerIcon />
              </div>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#B08A5A] mb-1.5">HANDCRAFTED</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#B08A5A]/60">EXCELLENCE</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-12 bg-[#B08A5A]/20 hidden sm:block" />

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#B08A5A] mb-4 w-6 h-6">
                <FlowerIcon />
              </div>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#B08A5A] mb-1.5">PREMIUM</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#B08A5A]/60">MATERIALS</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-12 bg-[#B08A5A]/20 hidden sm:block" />

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#B08A5A] mb-4 w-6 h-6">
                <FlowerIcon />
              </div>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#B08A5A] mb-1.5">OMANI</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#B08A5A]/60">HERITAGE</span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-12 bg-[#B08A5A]/20 hidden sm:block" />

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[#B08A5A] mb-4 w-6 h-6">
                <FlowerIcon />
              </div>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#B08A5A] mb-1.5">BESPOKE</span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#B08A5A]/60">CRAFTSMANSHIP</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
