"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { ProductGallery } from "@/components/product-gallery"

import { ProductDetailsAccordion } from "@/components/product-details-accordion"
import { RelatedProducts } from "@/components/related-products"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { ChevronRight } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { toast } from "sonner"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(id)
  const { addItem } = useCart()
  
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedLength, setSelectedLength] = useState<string>("")
  const [selectedSleeveLength, setSelectedSleeveLength] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(id, 4)

  const accordionItems = [
    {
      title: "Details",
      content: product.details,
    },
    {
      title: "Materials",
      content: product.materials,
    },
    {
      title: "Care",
      content: product.care,
    },
    {
      title: "Shipping & Returns",
      content: [
        "Complimentary shipping on all orders",
        "Express delivery available",
        "Free returns within 30 days",
        "Items must be unworn with tags attached",
      ],
    },
  ]

  const galleryImages = [
    product.image,
    product.hoverImage,
    product.image.replace("query=", "query=detail "),
    product.hoverImage.replace("query=", "query=closeup "),
  ]

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      toast.error("Please select a size")
      return
    }

    if (product.colors.length > 0 && !selectedColor) {
      toast.error("Please select a color")
      return
    }

    if (!selectedLength) {
      toast.error("Please select a length")
      return
    }

    if (!selectedSleeveLength) {
      toast.error("Please select a sleeve length")
      return
    }

    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}-${selectedLength}-${selectedSleeveLength}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      size: selectedSize || undefined,
      color: selectedColor || undefined,
      length: selectedLength,
      sleeveLength: selectedSleeveLength,
      image: product.image,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-foreground transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductGallery images={galleryImages} productName={product.name} />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:sticky lg:top-32 lg:self-start space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">{product.category}</p>
              <h1 className="font-serif text-3xl md:text-4xl">{product.name}</h1>
              <p className="text-xl">€{product.price.toLocaleString()}</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>

            {/* Options */}
            <div className="space-y-4">
              {/* Colour */}
              {product.colors.length > 0 && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">colour</label>
                  <select 
                    value={selectedColor} 
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full border border-border p-3 text-sm bg-background outline-none focus:border-foreground transition-colors"
                  >
                    <option value="" disabled>Choose an option</option>
                    {product.colors.map((c) => (
                      <option key={c.name} value={c.name} disabled={!c.available}>{c.name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Size */}
              {product.sizes.length > 0 && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">size</label>
                  <select 
                    value={selectedSize} 
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full border border-border p-3 text-sm bg-background outline-none focus:border-foreground transition-colors"
                  >
                    <option value="" disabled>Choose an option</option>
                    {product.sizes.map((s) => (
                      <option key={s.size} value={s.size} disabled={!s.available}>{s.size}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Length */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Length (in inches)</label>
                <select 
                  value={selectedLength} 
                  onChange={(e) => setSelectedLength(e.target.value)}
                  className="w-full border border-border p-3 text-sm bg-background outline-none focus:border-foreground transition-colors"
                >
                  <option value="" disabled>Choose an option</option>
                  {[50, 52, 54, 56, 58, 60, 62].map((len) => (
                    <option key={len} value={len.toString()}>{len}</option>
                  ))}
                </select>
              </div>

              {/* Sleeve Length */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Sleeve Length (from center back in inches)</label>
                <select 
                  value={selectedSleeveLength} 
                  onChange={(e) => setSelectedSleeveLength(e.target.value)}
                  className="w-full border border-border p-3 text-sm bg-background outline-none focus:border-foreground transition-colors"
                >
                  <option value="" disabled>Choose an option</option>
                  {[28, 29, 30, 31, 32].map((len) => (
                    <option key={len} value={len.toString()}>{len}</option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{product.name} quantity</label>
                <input 
                  type="number" 
                  min="1" 
                  max="20"
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full border border-border p-3 text-sm bg-background outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>

            {/* Add to Bag */}
            <motion.button
              onClick={handleAddToCart}
              className="w-full py-4 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              whileTap={{ scale: 0.98 }}
            >
              Add to Bag
            </motion.button>

            {/* Made In */}
            <p className="text-xs text-muted-foreground text-center tracking-widest">Made in {product.madeIn}</p>

            {/* Accordion */}
            <ProductDetailsAccordion items={accordionItems} />
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      <PremiumFooter />
    </main>
  )
}
