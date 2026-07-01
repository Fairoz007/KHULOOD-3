"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const timeline = [
  {
    year: "Early Years",
    title: "A Passion for Design",
    description:
      "Founded by Khulood, whose passion for design began at an early age, the brand was shaped through years of creativity, exploration, and dedication.",
  },
  {
    year: "Education",
    title: "Vision & Heritage",
    description:
      "After earning a Bachelor's Degree in Fashion Design from Virginia Commonwealth University School of the Arts in Qatar, Khulood returned to Oman with a vision to create a luxury fashion label.",
  },
  {
    year: "2020",
    title: "The Launch",
    description:
      "Following more than a year of research, refinement, and development, KHULOOD officially launched, celebrating Omani heritage through modern design.",
  },
  {
    year: "Today",
    title: "Contemporary Elegance",
    description:
      "Today, the brand is recognized for its elegant contemporary collections that have been worn by distinguished clients across Oman and the GCC.",
  },
]

const values = [
  {
    title: "Craftsmanship",
    description:
      "We believe true luxury is created through craftsmanship, authenticity, and meticulous attention to detail.",
    image: "/artisan-hands-crafting-leather-luxury-goods.jpg",
  },
  {
    title: "Local Atelier",
    description:
      "Every KHULOOD garment is handcrafted in our local atelier using carefully selected premium materials, preserving traditional artistry.",
    image: "/premium-leather-material-sustainable-luxury.jpg",
  },
  {
    title: "Cultural Heritage",
    description:
      "Our mission is to create timeless pieces that celebrate individuality, confidence, and Omani cultural heritage.",
    image: "/minimalist-luxury-handbag-timeless-design.jpg",
  },
]

const testimonials = [
  {
    name: "Verified Client",
    role: "Oman",
    quote: '"The delivery process was seamless, and the abaya exceeded every expectation. The craftsmanship is simply exceptional."',
    image: "/elderly-italian-craftsman-portrait-luxury.jpg",
  },
  {
    name: "Verified Client",
    role: "GCC",
    quote: '"Beautiful tailoring, luxurious fabrics, and incredible attention to detail. Every collection feels truly special."',
    image: "/elegant-italian-woman-designer-portrait.jpg",
  },
  {
    name: "Verified Client",
    role: "Oman",
    quote: '"The embroidered collar and folded sleeves are absolutely stunning. KHULOOD continues to redefine elegant fashion."',
    image: "/distinguished-italian-man-portrait-luxury.jpg",
  },
]

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - converted to Next.js Image with priority */}
      <section className="relative h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/florence-italy-aerial-view-luxury-historic.jpg"
            alt="Florence, Italy"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-background/70 mb-6 block"
          >
            Est. 2020
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-background mb-6 leading-[1.1] text-balance"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-background/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Where Heritage Meets Contemporary Design. Fashion has always been more than clothing—it is an expression of identity, culture, and artistry.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 block">Our Journey</span>
            <h2 className="font-serif text-3xl lg:text-5xl">A Legacy of Excellence</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mb-12 lg:mb-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <span className="font-serif text-3xl lg:text-4xl text-muted-foreground/50 block mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{item.description}</p>
                </div>

                {/* Dot - hidden on mobile */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-4 h-4 bg-foreground" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - converted to Next.js Image with lazy loading */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 block">Our Philosophy</span>
            <h2 className="font-serif text-3xl lg:text-5xl">Guiding Principles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[5/6] overflow-hidden mb-6 relative">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - converted to Next.js Image with lazy loading */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-background/60 mb-4 block">Testimonials</span>
            <h2 className="font-serif text-3xl lg:text-5xl">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((person, index) => (
              <motion.div
                key={person.name + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-700 relative">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg lg:text-xl mb-3 text-background/90 italic">{person.quote}</h3>
                <p className="text-background/60 text-sm mb-1">{person.name}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-background/40">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl lg:text-4xl leading-relaxed mb-8 text-balance">
              "We believe true luxury is created through craftsmanship, authenticity, and attention to detail. Every KHULOOD garment is a celebration of individuality and cultural heritage."
            </p>
            <cite className="not-italic">
              <span className="block text-sm tracking-[0.2em] uppercase text-muted-foreground">
                — Khulood, Founder & Creative Director
              </span>
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 block">Explore</span>
            <h2 className="font-serif text-3xl lg:text-5xl mb-6">Discover the Collection</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the culmination of our heritage in every piece we create.
            </p>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300"
            >
              View Collection
              <ArrowRight className="h-4 w-4 stroke-[1.5]" />
            </Link>
          </motion.div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
