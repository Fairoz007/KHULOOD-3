"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col overflow-hidden">
      
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg-new.png"
          alt="KHULOOD Luxury Fashion"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-center"
        />
        {/* Soft gradient overlay to ensure text readability on all screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0EBE1] via-[#F0EBE1]/80 to-transparent lg:w-[60%]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 pt-32 md:pt-40 pb-36 md:pb-24 flex flex-col my-auto">
        
        <div className="max-w-[500px]">
          {/* Brand Logo & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start mb-12"
          >
            {/* Elegant Floral Icon approximation */}
            <div className="text-[#B08A5A] mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 15 5.5 15 8.5C15 10.1569 13.6569 11.5 12 11.5C10.3431 11.5 9 10.1569 9 8.5C9 5.5 12 2 12 2Z" fill="currentColor"/>
                <path d="M12 22C12 22 15 18.5 15 15.5C15 13.8431 13.6569 12.5 12 12.5C10.3431 12.5 9 13.8431 9 15.5C9 18.5 12 22 12 22Z" fill="currentColor"/>
                <path d="M22 12C22 12 18.5 15 15.5 15C13.8431 15 12.5 13.6569 12.5 12C12.5 10.3431 13.8431 9 15.5 9C18.5 9 22 12 22 12Z" fill="currentColor"/>
                <path d="M2 12C2 12 5.5 15 8.5 15C10.1569 15 11.5 13.8431 11.5 12C11.5 10.3431 10.1569 9 8.5 9C5.5 9 2 12 2 12Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-[8px] tracking-[0.3em] uppercase text-[#B08A5A] mb-2 font-medium">EST. 2020</span>
            <span className="text-sm tracking-[0.35em] uppercase text-[#B08A5A] font-medium">KHULOOD</span>
            <div className="w-6 h-[1px] bg-[#B08A5A] mt-5" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-serif text-[46px] sm:text-5xl md:text-6xl lg:text-[68px] text-[#1C1C1C] leading-[1.1] mb-8 tracking-tight"
          >
            Timeless<br />
            Elegance,<br />
            Rooted in Omani<br />
            Heritage
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-[#4A4A4A] text-sm md:text-[15px] font-light tracking-wide mb-12 leading-[1.8] max-w-[420px]"
          >
            Discover handcrafted abayas and contemporary fashion designed to celebrate tradition through modern luxury.<br />
            Every KHULOOD creation is thoughtfully designed and meticulously handmade in our atelier in the Sultanate of Oman.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <Link href="/shop">
              <button className="flex items-center justify-center gap-4 bg-[#B08A5A] hover:bg-[#9D7A4D] transition-colors duration-300 text-white px-10 py-[18px] text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase">
                Explore Collection
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Made in Oman Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 md:bottom-12 left-6 sm:left-12 lg:left-20 xl:left-24 z-10"
      >
        <div className="inline-flex flex-col items-center">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#B08A5A] font-medium mb-4">MADE IN OMAN</span>
          <div className="w-1.5 h-1.5 border-[1px] border-[#B08A5A] rotate-45" />
        </div>
      </motion.div>

    </section>
  )
}