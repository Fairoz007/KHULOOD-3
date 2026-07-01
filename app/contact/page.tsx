"use client"

import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h1 className="font-serif text-4xl lg:text-6xl mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              We would love to hear from you.
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for a bespoke design, have questions about an order, or would like styling advice, our team is here to assist.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-2xl mb-4">Visit Our Atelier</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Muscat, Sultanate of Oman
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-2xl mb-4">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="block text-xs tracking-[0.2em] uppercase text-foreground mb-1">Phone</span>
                      +968 7154 0084
                    </p>
                    <p className="text-muted-foreground mt-4">
                      <span className="block text-xs tracking-[0.2em] uppercase text-foreground mb-1">Email</span>
                      info@khulood.om
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl mb-4">Opening Hours</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      Sunday – Thursday
                    </p>
                    <p className="text-muted-foreground">
                      9:00 AM – 1:00 PM<br />
                      2:00 PM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-foreground text-background px-8 py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
