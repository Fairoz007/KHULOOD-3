"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MiniCartProps {
  isOpen: boolean
  onClose: () => void
}

import { useCart } from "@/hooks/use-cart"

export function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const { items, cartTotal, updateQuantity, removeItem } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/40 z-50"
          />

          {/* Cart panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-xl">Shopping Bag</h2>
              <button
                onClick={onClose}
                className="p-2 -mr-2 hover:opacity-60 transition-opacity"
                aria-label="Close cart"
              >
                <X className="h-5 w-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                    <p className="text-muted-foreground">Your shopping bag is empty.</p>
                  </div>
                ) : (
                  items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-24 h-30 bg-muted flex-shrink-0 relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          sizes="96px"
                          loading="lazy"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-sm mb-1">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {item.color && <span className="mr-2">Color: {item.color}</span>}
                          {item.size && <span>Size: {item.size}</span>}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:opacity-60 transition-opacity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:opacity-60 transition-opacity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <div className="text-sm">${(item.price * item.quantity).toLocaleString()}</div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
                <Link href="/checkout" onClick={onClose}>
                  <Button className="w-full py-6 text-sm tracking-[0.2em] uppercase">Proceed to Checkout</Button>
                </Link>
                <button
                  onClick={onClose}
                  className="w-full text-center text-sm tracking-wide underline underline-offset-4 hover:no-underline transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
