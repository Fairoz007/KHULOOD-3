"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Lock } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CheckoutPage() {
  const { items, cartTotal } = useCart()
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [receiveEmails, setReceiveEmails] = useState(false)

  const subtotal = cartTotal
  const shipping = 0 // Complimentary
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/shop"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
            <Link href="/" className="font-serif text-xl lg:text-2xl tracking-[0.3em] uppercase">
              Khulood
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 lg:py-16 w-full">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Billing Details */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="font-serif text-2xl mb-8">Billing Details</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <input type="text" placeholder="First Name" className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name *</label>
                    <input type="text" placeholder="Last Name" className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Country / Region *</label>
                  <select className="w-full border border-border p-3 text-sm bg-background outline-none focus:border-foreground transition-colors" required>
                    <option value="Oman">Oman</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="KSA">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">United States</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium">Street address *</label>
                  <input type="text" placeholder="House number and street name" className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" required />
                  <input type="text" placeholder="Apartment, suite, unit, etc." className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Town / City *</label>
                    <input type="text" className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">State / County *</label>
                    <input type="text" className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Postcode / ZIP *</label>
                    <input type="text" className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone *</label>
                    <input type="tel" placeholder="Phone" className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <input type="email" placeholder="Email Address" className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors" required />
                </div>
              </div>
            </div>

            {/* Ship to a different address */}
            <div className="space-y-4 pt-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={shipToDifferentAddress}
                  onChange={(e) => setShipToDifferentAddress(e.target.checked)}
                  className="w-4 h-4 accent-foreground"
                />
                <span className="font-medium">Ship to a different address?</span>
              </label>

              {shipToDifferentAddress && (
                <div className="p-6 border border-border space-y-6 mt-4">
                  {/* Additional shipping fields if needed, or simple mock */}
                  <p className="text-sm text-muted-foreground">Shipping details will be collected based on the billing form structure.</p>
                </div>
              )}
            </div>

            {/* Order notes */}
            <div className="space-y-2 pt-4">
              <label className="text-sm font-medium">Order notes (optional)</label>
              <textarea 
                placeholder="Notes about your order, e.g. special notes for delivery." 
                className="w-full border border-border p-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors min-h-[120px]"
              />
            </div>
          </div>

          {/* Right Column - Order Summary & Payment */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 border border-border bg-background/50">
              <h2 className="font-serif text-2xl mb-8">Your Order</h2>

              {/* Order Table */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between font-medium border-b border-border pb-4 uppercase tracking-widest text-xs">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                <div className="space-y-4 border-b border-border pb-6">
                  {items.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Your cart is empty.</p>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div className="pr-4 flex-1">
                          <p className="font-medium mb-3">{item.name} × {item.quantity}</p>
                          <div className="text-xs text-muted-foreground space-y-2">
                            {item.color && <p>colour: <br/><span className="text-foreground">{item.color}</span></p>}
                            {item.size && <p>size: <br/><span className="text-foreground">{item.size}</span></p>}
                            {item.length && <p>Length (in inches): <br/><span className="text-foreground">{item.length}</span></p>}
                            {item.sleeveLength && <p>Sleeve Length (from center back in inches): <br/><span className="text-foreground">{item.sleeveLength}</span></p>}
                          </div>
                        </div>
                        <div className="font-medium">
                          ${(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="flex justify-between text-sm py-2">
                  <span className="font-medium">Subtotal</span>
                  <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-border pb-4">
                  <span className="font-medium">Shipment</span>
                  <span className="text-muted-foreground">Free shipping</span>
                </div>
                <div className="flex justify-between text-lg font-serif pt-4 mb-2">
                  <span>Total</span>
                  <span>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              {/* Coupon */}
              <div className="mb-8 pt-2">
                <details className="text-sm group">
                  <summary className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors list-none flex gap-1 items-center">
                    Have a coupon? <span className="underline underline-offset-4">Click here to enter your coupon code</span>
                  </summary>
                  <div className="mt-4 flex gap-2">
                    <input type="text" placeholder="Coupon code" className="flex-1 border border-border p-2 px-3 text-sm bg-transparent outline-none focus:border-foreground" />
                    <button className="bg-foreground text-background px-4 py-2 text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors">Apply</button>
                  </div>
                </details>
              </div>

              {/* Payment Method */}
              <div className="bg-muted/50 p-6 mb-8">
                <label className="flex items-start gap-3 cursor-pointer mb-4">
                  <input type="radio" name="payment" className="mt-1 accent-foreground w-4 h-4" defaultChecked />
                  <div>
                    <span className="font-medium block mb-2">Direct bank transfer</span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                  </div>
                </label>
              </div>

              {/* Emails Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mb-8 text-sm">
                <input 
                  type="checkbox" 
                  checked={receiveEmails}
                  onChange={(e) => setReceiveEmails(e.target.checked)}
                  className="mt-1 accent-foreground w-4 h-4 flex-shrink-0"
                />
                <span className="text-muted-foreground leading-snug">I would like to receive exclusive emails with discounts and product information</span>
              </label>

              {/* Help & Info Accordion */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Help & Info</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="shipping" className="border-border">
                    <AccordionTrigger className="text-sm py-3 hover:no-underline hover:text-muted-foreground transition-colors">Shipping & Delivery</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground space-y-4 pb-4">
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">Do you ship internationally?</strong>
                        Yes, we offer standard and express shipping options to all countries with DHL.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">How long will it take to receive my order?</strong>
                        Once an order is placed please allow 14 – 21 business days for the order to be packed and shipped from our warehouse. Please allow up to 10 business days for the package to arrive from the date your order is shipped. Please contact us if you have not received your delivery and we will happily assist you.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">How can I track my order?</strong>
                        Once shipped you will receive an email with your tracking information.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">Shipping Address</strong>
                        We will only ship to the shipping address entered when the order was first placed. Shipping address cannot be changed.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="returns" className="border-border">
                    <AccordionTrigger className="text-sm py-3 hover:no-underline hover:text-muted-foreground transition-colors">Returns & Refunds</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground space-y-4 pb-4">
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">What is the process to return an item if I am not satisfied?</strong>
                        We do not offer exchanges or returns but we will alter you item to ensure you are happy with it. For alterations, items must be posted back within 15 days from the date the order was shipped. Please contact us and inform us to expect your item. Return shipping and any reverse duties are the responsibility of the customer.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">What if the product is faulty?</strong>
                        Goods are classified as faulty if they are received damaged. Please note, any damaged item outside of a 30-day return window cannot be exchanged. If your item is faulty upon receipt, you may return it for a replacement.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">Order Cancellations & Updates</strong>
                        Orders cannot be changed or updated once they are placed as they immediately start processing. If you would like to add another item please place a new order.
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq" className="border-border">
                    <AccordionTrigger className="text-sm py-3 hover:no-underline hover:text-muted-foreground transition-colors">FAQ</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground space-y-4 pb-4">
                      <p>For more information please see below or get in touch with us at info@khulood.om</p>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">What payment methods do you accept?</strong>
                        We accept paypal, direct debit and credit card.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">Where are your products made?</strong>
                        All our products are creating using high quality fabrics sourced especially from London. Our Atelier in based in Oman along with our flagship store.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">What size Should i buy?</strong>
                        All our collections are available from XXS-XXL. Check out our style guide to view measurements.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">The product i want is out of stock</strong>
                        Please get in touch with us and we will contact you when the item you are looking for is restocked. To be the first to know about new collections, restocks and more sign up for our mailing list.
                      </div>
                      <div>
                        <strong className="block text-foreground mb-1 font-medium">Press inquiries</strong>
                        For press inquiries please contact info@khulood.om
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mb-8 text-sm">
                <input 
                  type="checkbox" 
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 accent-foreground w-4 h-4 flex-shrink-0"
                  required
                />
                <span className="font-medium leading-snug">I have read and agree to the website terms and conditions *</span>
              </label>

              {/* Submit Button */}
              <button 
                type="submit"
                className={`w-full py-4 text-sm tracking-widest uppercase transition-colors ${
                  agreeTerms 
                    ? "bg-foreground text-background hover:bg-foreground/90" 
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
                disabled={!agreeTerms}
              >
                Place Order
              </button>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
