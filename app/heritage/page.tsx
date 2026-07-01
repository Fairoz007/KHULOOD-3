"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


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
            The story behind
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-background/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.2em]"
          >
            KHULOOD
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 block">About</span>
            <h2 className="font-serif text-3xl lg:text-5xl mb-12">KHULOOD</h2>
            <div className="space-y-8 text-muted-foreground text-lg leading-relaxed text-left md:text-center">
              <p>
                A passionate and incredibly talented artist, Khulood was passionate about the arts from a young age. After completing a Bachelor's in Fashion Design, at Virginia Commonwealth University School of the Arts in Qatar, Khulood returned to Oman.
              </p>
              <p>
                After more than a year of exploring, developing, and planning – KHULOOD officially launched at the beginning of 2020. The contemporary and elegant designs represent Khulood's own sense of style and are deeply inspired by Omani heritage. The innovative designs have since been worn, locally and regionally, by multiple performers, influencers, and members of the royal family.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4 block">Our Vision</span>
              <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl mb-8 leading-tight">Creating contemporary and elegant collections inspired by Omani heritage that remain timeless.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                All of our products are handmade in our local atelier.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full aspect-[4/5] relative overflow-hidden"
            >
              <Image
                src="/hand_embroidery_craftsmanship_1782933538223.png"
                alt="Hand embroidered pieces with extraordinary craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
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
            <p className="font-serif text-2xl lg:text-4xl leading-relaxed text-balance italic text-foreground/90">
              "hand embroidered pieces with extraordinary craftsmanship"
            </p>
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
