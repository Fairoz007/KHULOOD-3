"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { products } from "@/lib/products"
import { Heart, ChevronDown, Check, LayoutGrid, List, Sparkles, Droplets, Clock, Globe } from "lucide-react"

const categories = ["All", "New Arrivals", "Abayas", "Luxury Collection", "Ready-to-Wear", "Limited Edition"]
const sortOptions = ["Newest", "Price", "Popularity"]

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeSort, setActiveSort] = useState("Newest")
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [viewType, setViewType] = useState<"grid" | "list">("grid")
  const [wishlist, setWishlist] = useState<string[]>([])

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === "Price") return a.price - b.price
    return 0
  })

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    setWishlist(prev => prev.includes(id) ? prev.filter(wId => wId !== id) : [...prev, id])
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Editorial Hero */}
      <section className="relative flex flex-col md:flex-row bg-background">
        <div className="flex-1 flex items-center justify-center p-8 pt-24 md:p-16 z-10 lg:pl-[10%] min-h-[50vh] md:min-h-[600px] md:h-[70vh]">
          <motion.div 
            className="max-w-xl w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 md:mb-6">New Collection</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 text-foreground leading-[1.1] tracking-tight">
              Timeless Elegance,<br />
              <span className="italic font-light text-foreground/90">Modern Heritage</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 mb-8 md:mb-12 leading-relaxed font-sans font-light max-w-md">
              Discover handcrafted Omani abayas designed with exceptional craftsmanship, contemporary silhouettes, and timeless elegance.
            </p>
            <Link 
              href="#collection" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative border border-foreground/30 px-8 py-3 md:px-10 md:py-4 text-xs tracking-[0.2em] uppercase overflow-hidden hover:border-primary transition-colors duration-500 inline-block"
            >
              <span className="relative z-10 text-foreground group-hover:text-primary transition-colors duration-500 flex items-center gap-2">
                Shop Collection <span className="text-lg">→</span>
              </span>
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[400px] md:min-h-[600px] md:h-[70vh] w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-10 flex items-center justify-center p-12"
          >
             <div className="relative w-full max-w-md aspect-[3/4] shadow-2xl shadow-black/10">
                <Image
                  src="/luxury-wool-coat-back-view-editorial-fashion-photo.jpg"
                  alt="Editorial model wearing a premium embroidered abaya"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-[64px] lg:top-[80px] z-40 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-[1500px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-6">
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 py-1 group"
              >
                <span className={activeCategory === category ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"}>
                  {category}
                </span>
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeCategoryIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-8">
            <div className="relative">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors"
              >
                Sort By: <span className="font-medium">{activeSort}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isSortOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 top-full mt-4 w-48 bg-background border border-border shadow-xl z-50 p-2"
                  >
                    {sortOptions.map(option => (
                      <button
                        key={option}
                        onClick={() => { setActiveSort(option); setIsSortOpen(false); }}
                        className="w-full text-left px-4 py-3 text-[11px] uppercase tracking-wider flex justify-between items-center hover:bg-secondary/50 transition-colors"
                      >
                        <span className={activeSort === option ? "text-primary" : "text-foreground"}>{option}</span>
                        {activeSort === option && <Check className="w-3 h-3 text-primary" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* View Toggle */}
            <div className="hidden md:flex items-center gap-4 border-l border-border pl-8">
              <button 
                onClick={() => setViewType("grid")}
                className={`p-1 transition-colors ${viewType === "grid" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewType("list")}
                className={`p-1 transition-colors ${viewType === "list" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="collection" className="py-24 bg-background">
        <div className="max-w-[1500px] mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${activeSort}-${viewType}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={
                viewType === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20"
                  : "flex flex-col gap-12"
              }
            >
              {sortedProducts.map((product, index) => {
                const isEditorialBreak = index > 0 && index % 8 === 0;
                
                return (
                  <React.Fragment key={product.id}>
                    {isEditorialBreak && (
                      <div className="col-span-full my-24 w-full">
                        <section className="w-full bg-[#EEE7DD] flex flex-col md:flex-row overflow-hidden">
                          <div className="flex-1 relative min-h-[500px]">
                             <Image
                                src="/shop-hero-luxury-fashion-collection.jpg"
                                alt="Editorial Break"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                             />
                          </div>
                          <div className="flex-1 flex flex-col justify-center p-12 md:p-24 text-center md:text-left bg-[#F8F6F3]">
                            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground leading-tight">
                              Inspired by <br /> <span className="italic font-light">Omani Heritage</span>
                            </h2>
                            <p className="text-foreground/70 mb-10 max-w-md text-base font-light leading-relaxed">
                              Every KHULOOD creation is handcrafted using traditional Omani artistry and premium fabrics, ensuring a timeless aesthetic.
                            </p>
                            <div>
                              <Link href="/about" className="border-b border-primary/50 pb-1 text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors inline-block">
                                Discover Our Story
                              </Link>
                            </div>
                          </div>
                        </section>
                      </div>
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (index % 8) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`group relative ${viewType === "list" ? "flex flex-col md:flex-row gap-12 items-center" : ""}`}
                    >
                      <Link href={`/product/${product.id}`} className={`block ${viewType === "list" ? "w-full md:w-1/3" : "w-full"}`}>
                        <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-secondary mb-6 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-700">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          <Image
                            src={product.hoverImage || "/placeholder.svg"}
                            alt={`${product.name} alternate view`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            className="object-cover absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                          />
                          
                          {/* Badges */}
                          <div className="absolute top-5 left-5 flex flex-col gap-2">
                             {index === 0 && <span className="bg-background/90 backdrop-blur-sm text-foreground text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm">New</span>}
                             {index === 1 && <span className="bg-foreground text-background text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm">Bestseller</span>}
                             {index === 3 && <span className="bg-primary text-background text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm">Limited</span>}
                          </div>
                          
                          {/* Wishlist */}
                          <button 
                            onClick={(e) => toggleWishlist(product.id, e)}
                            className="absolute top-5 right-5 p-2.5 rounded-full bg-background/50 backdrop-blur hover:bg-background transition-all duration-300 z-20 group/btn"
                          >
                            <Heart className={`w-4 h-4 transition-all duration-300 ${wishlist.includes(product.id) ? "fill-primary text-primary scale-110" : "text-foreground group-hover/btn:scale-110"}`} />
                          </button>

                          {/* Quick Actions (Hover) */}
                          <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex gap-2 z-20">
                             <button className="flex-1 bg-background/95 backdrop-blur-md text-foreground text-[10px] uppercase tracking-widest py-3.5 rounded-xl hover:bg-foreground hover:text-background transition-colors">
                               Quick View
                             </button>
                             <button className="flex-1 bg-foreground text-background text-[10px] uppercase tracking-widest py-3.5 rounded-xl hover:bg-primary transition-colors">
                               Add to Bag
                             </button>
                          </div>
                          
                          {/* Bronze Glow overlay */}
                          <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 rounded-[18px] transition-colors duration-700 pointer-events-none" />
                        </div>
                      </Link>
                      
                      <div className={`space-y-3 px-2 ${viewType === "list" ? "flex-1 text-left" : "text-center md:text-left"}`}>
                        <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{product.category}</p>
                        <Link href={`/product/${product.id}`} className="block">
                          <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                            {product.name}
                          </h3>
                        </Link>
                        <div className={`flex items-center gap-4 ${viewType === "grid" ? "justify-center md:justify-start" : ""}`}>
                          <p className="text-sm text-foreground/80 font-light">
                            ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                        {viewType === "list" && (
                          <p className="text-sm text-foreground/60 font-light mt-4 max-w-lg leading-relaxed">
                            A stunning addition to any luxury wardrobe. Crafted with exceptional materials and traditional techniques to ensure a piece that lasts a lifetime.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </React.Fragment>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-32 bg-[#F8F6F3] border-t border-border/50">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Sparkles, title: "Handcrafted with Care", desc: "Meticulously constructed by master artisans using time-honored techniques." },
               { icon: Droplets, title: "Premium Fabrics", desc: "Sourced from the world's most exclusive mills for unparalleled drape and feel." },
               { icon: Clock, title: "Timeless Design", desc: "Elegant silhouettes designed to transcend seasons and trends." },
               { icon: Globe, title: "Made in Oman", desc: "Designed and produced locally, celebrating our rich cultural heritage." }
             ].map((value, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -10 }}
                 className="bg-white p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 text-center flex flex-col items-center"
               >
                  <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mb-8 text-primary group-hover:border-primary transition-colors">
                     <value.icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{value.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Customer Experience */}
      <section className="py-32 bg-[#111111] text-[#F8F6F3] relative overflow-hidden">
        {/* Luxury linen texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        
        <div className="max-w-[1500px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">Customer Experience</h2>
            <div className="w-12 h-[1px] bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { text: "The delivery process was so smooth and the abaya I recieved was stunning. The whole experience exceeded my expectations.", name: "Aisha M.", country: "UAE" },
              { text: "Unmatched and impeccably crafted tailoring. Absolutely love every drop! The quality of the fabric is exceptional.", name: "Fatima A.", country: "Oman" },
              { text: "I especially love the designs with the embroidered collar and folded sleeves! Every collection is just stunning.", name: "Sarah K.", country: "Saudi Arabia" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-[#1A1A1A] border border-white/5 p-12 flex flex-col items-center text-center transition-all duration-500 hover:border-primary/30 group"
              >
                <div className="flex gap-1 text-primary mb-8">
                  {[1,2,3,4,5].map(star => <span key={star} className="text-lg">★</span>)}
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-[#F8F6F3]/90 mb-10 flex-1 relative">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#F8F6F3] mb-1">{testimonial.name}</p>
                  <p className="text-xs text-primary/80 font-light">{testimonial.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-[#EEE7DD] text-center border-t border-border/50">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Join the KHULOOD Community</h2>
            <p className="text-foreground/70 font-light text-lg mb-12">
               Receive exclusive collections, private releases, styling inspiration, and early access.
            </p>
            <form className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-transparent border-b border-foreground/30 py-4 px-2 outline-none focus:border-primary transition-colors text-foreground font-light placeholder:text-foreground/40"
               />
               <button className="bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-foreground transition-colors duration-500 whitespace-nowrap">
                  Subscribe
               </button>
            </form>
         </div>
      </section>

      <PremiumFooter />
    </main>
  )
}

