"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"

const products = [
  {
    id: "aurora",
    name: "Aurora",
    price: 290,
    image: "/aurora_abaya_1782932490500.png",
    hoverImage: "/aurora_abaya_1782932490500.png",
    category: "Abayas",
  },
  {
    id: "mirage",
    name: "Mirage",
    price: 260,
    image: "/mirage_abaya_1782932499255.png",
    hoverImage: "/mirage_abaya_1782932499255.png",
    category: "Abayas",
  },
  {
    id: "moonlit",
    name: "Moonlit",
    price: 275,
    image: "/moonlit_abaya_1782932473119.png",
    hoverImage: "/moonlit_abaya_1782932473119.png",
    category: "Abayas",
  },
  {
    id: "noir",
    name: "Noir",
    price: 325,
    image: "/noir_abaya_1782932482540.png",
    hoverImage: "/noir_abaya_1782932482540.png",
    category: "Abayas",
  },
  {
    id: "sahara",
    name: "Sahara",
    price: 310,
    image: "/sahara_abaya_1782932507219.png",
    hoverImage: "/sahara_abaya_1782932507219.png",
    category: "Abayas",
  },
  {
    id: "scattered-abaya",
    name: "Scattered Abaya",
    price: 254,
    image: "/scattered_abaya_1782932464321.png",
    hoverImage: "/scattered_abaya_1782932464321.png",
    category: "Abayas",
  },
  {
    id: "reversible-silk",
    name: "Reversible Silk Satin Taffeta",
    price: 285,
    image: "/reversible_abaya_1782932437505.png",
    hoverImage: "/reversible_abaya_1782932437505.png",
    category: "Abayas",
  },
  {
    id: "square-neck-ramadan",
    name: "Square Neck – Ramadan Collection",
    price: 272,
    image: "/square_neck_abaya_1782932446731.png",
    hoverImage: "/square_neck_abaya_1782932446731.png",
    category: "Abayas",
  },
  {
    id: "v-neck-ramadan",
    name: "V Neck – Ramadan Collection",
    price: 234,
    image: "/v_neck_abaya_1782932428688.png",
    hoverImage: "/v_neck_abaya_1782932428688.png",
    category: "Abayas",
  },
]

export function CollectionGrid() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">Featured Collection</h2>
          <p className="text-muted-foreground tracking-wide max-w-md mx-auto">
            Discover our latest handcrafted collections.
          </p>
        </motion.div>

        {/* Asymmetrical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* First row - offset layout */}
          <div className="lg:pt-12">
            <ProductCard {...products[0]} index={0} />
          </div>
          <div>
            <ProductCard {...products[1]} index={1} />
          </div>
          <div className="lg:pt-24">
            <ProductCard {...products[2]} index={2} />
          </div>

          {/* Second row - different offset */}
          <div>
            <ProductCard {...products[3]} index={3} />
          </div>
          <div className="lg:pt-16">
            <ProductCard {...products[4]} index={4} />
          </div>
          <div className="lg:-mt-8">
            <ProductCard {...products[5]} index={5} />
          </div>

          {/* Third row - offset layout */}
          <div className="lg:pt-12">
            <ProductCard {...products[6]} index={6} />
          </div>
          <div>
            <ProductCard {...products[7]} index={7} />
          </div>
          <div className="lg:pt-24">
            <ProductCard {...products[8]} index={8} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 lg:mt-24"
        >
          <Link
            href="/shop"
            className="inline-flex items-center text-sm tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:border-transparent transition-colors duration-300"
          >
            View Full Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
