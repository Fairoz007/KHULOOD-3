"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex">
      {/* Left content - Premium Sidebar */}
      <div className="hidden lg:flex flex-col justify-between items-center w-[22%] bg-[#0B0B0B] text-[#B08A5A] py-20 px-6 relative z-20 shadow-2xl">
        
        {/* Soft linen texture overlay (simulated with CSS blend modes) */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        {/* TOP */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 relative z-10"
        >
          {/* Geometric Omani Emblem */}
          <div className="w-5 h-5 border-[0.5px] border-[#B08A5A] rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#B08A5A] rotate-45" />
          </div>
          {/* Vertical bronze line */}
          <div className="w-[0.5px] h-[120px] bg-gradient-to-b from-[#B08A5A]/80 to-transparent" />
        </motion.div>

        {/* CENTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-5 relative z-10"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase opacity-70">EST. 2026</span>
          <h2 className="font-serif text-2xl lg:text-3xl tracking-[0.2em] font-light">KHULOOD</h2>
          <div className="w-6 h-[0.5px] bg-[#B08A5A]/60 my-2" />
          <p className="text-[9px] leading-[2.2] tracking-[0.15em] uppercase opacity-70 max-w-[160px]">
            Crafted in Oman.
            <br />
            Designed for Timeless Elegance.
          </p>
        </motion.div>

        {/* BOTTOM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-10 relative z-10"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase opacity-70">MADE IN OMAN</span>
          
          <div className="w-1.5 h-1.5 border-[0.5px] border-[#B08A5A] rotate-45" />
          
          <div className="flex flex-col items-center gap-4">
            <span className="text-[8px] tracking-[0.5em] uppercase opacity-70 [writing-mode:vertical-rl] rotate-180">SCROLL</span>
            <div className="w-[0.5px] h-16 bg-[#B08A5A]/40 relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#B08A5A] rotate-45" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right content - 80% */}
      <div className="flex-1 relative">
        {/* Background image - converted to Next.js Image with priority for LCP */}
        <div className="absolute inset-0">
          <Image
            src="/hero_abaya_1782932411356.png"
            alt="Elegant fashion model in dark clothing"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 78vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-16 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground leading-[1.1] mb-6 text-balance">
              Timeless Elegance,
              <br />
              Rooted in Omani Heritage
            </h1>
            <p className="text-foreground/80 text-base lg:text-lg tracking-wide mb-10 max-w-md leading-relaxed">
              Discover handcrafted abayas and contemporary fashion designed to celebrate tradition through modern luxury. Every KHULOOD creation is thoughtfully designed and meticulously handmade in our atelier in the Sultanate of Oman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-xs lg:text-sm tracking-[0.2em] uppercase group w-full sm:w-auto"
                  >
                    Explore Collection
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-background/50"
          />
        </motion.div>
      </div>
    </section>
  )
}
