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

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background - converted to Next.js Image with lazy loading */}
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src="/atelier_oman_1782932420240.png"
          alt="Heritage craftsmanship in Italian atelier"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-background/70 mb-6 block">About KHULOOD</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-background mb-8 leading-[1.15] text-balance">
              Crafted with Heritage.
              <br />
              Designed for Today.
            </h2>
            <div className="text-background/80 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12 space-y-6">
              <p>
                KHULOOD is a contemporary luxury fashion house inspired by the rich culture and artistry of Oman. Our collections blend traditional craftsmanship with modern silhouettes, creating elegant pieces that are both timeless and distinctive.
              </p>
              <p>
                Each garment is handcrafted by skilled artisans using carefully selected premium fabrics and refined finishing techniques, ensuring every piece reflects exceptional quality and sophistication.
              </p>
              <p>
                Whether created for everyday elegance or life's most memorable occasions, every KHULOOD design is made to become part of your story.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-[200px]"
              >
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-background block mb-2">Handcrafted</span>
                <span className="text-xs tracking-[0.2em] uppercase text-background/60">Excellence</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-[200px]"
              >
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-background block mb-2">Premium</span>
                <span className="text-xs tracking-[0.2em] uppercase text-background/60">Materials</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-[200px]"
              >
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-background block mb-2">Omani</span>
                <span className="text-xs tracking-[0.2em] uppercase text-background/60">Heritage</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-[200px]"
              >
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-background block mb-2">Bespoke</span>
                <span className="text-xs tracking-[0.2em] uppercase text-background/60">Craftsmanship</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
