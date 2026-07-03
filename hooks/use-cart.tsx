"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { toast } from "sonner" // since they use sonner per package.json

export interface CartItem {
  id: string // Should be unique combination of product id + size + color + length + sleeveLength
  productId: string
  name: string
  price: number
  quantity: number
  size?: string
  color?: string
  length?: string
  sleeveLength?: string
  image: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  cartCount: number
  cartTotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isMounted, setIsMounted] = useState(false)

  // Load from local storage
  useEffect(() => {
    setIsMounted(true)
    const storedCart = localStorage.getItem("khulood-cart")
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch (e) {
        console.error("Failed to parse cart", e)
      }
    }
  }, [])

  // Save to local storage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("khulood-cart", JSON.stringify(items))
    }
  }, [items, isMounted])

  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex((item) => item.id === newItem.id)
      
      if (existingItemIndex > -1) {
        const updatedItems = [...currentItems]
        const newQuantity = updatedItems[existingItemIndex].quantity + newItem.quantity
        if (newQuantity > 20) {
          toast.error(`You can only purchase a maximum of 20 items per order`)
          return currentItems
        }
        updatedItems[existingItemIndex].quantity = newQuantity
        toast.success(`Updated quantity of ${newItem.name}`)
        return updatedItems
      } else {
        if (newItem.quantity > 20) {
          toast.error(`You can only purchase a maximum of 20 items per order`)
          return currentItems
        }
        toast.success(`Added ${newItem.name} to bag`)
        return [...currentItems, newItem]
      }
    })
  }

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    if (quantity > 20) {
      toast.error(`You can only purchase a maximum of 20 items per order`)
      return
    }
    setItems((currentItems) =>
      currentItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  // Don't render with empty context on server to avoid hydration mismatch
  if (!isMounted) {
    return (
      <CartContext.Provider value={{ items: [], addItem: () => {}, removeItem: () => {}, updateQuantity: () => {}, clearCart: () => {}, cartCount: 0, cartTotal: 0 }}>
        {children}
      </CartContext.Provider>
    )
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
