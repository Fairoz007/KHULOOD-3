"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function PremiumFooter() {
  const footerLinks = {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "About", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
    customerCare: [
      { label: "Shipping & Delivery", href: "/shipping" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "FAQ", href: "/faq" },
      { label: "Terms of Use", href: "/terms" },
    ],
  }

  return (
    <footer className="bg-[#111111] text-[#F8F6F3] font-sans">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-[100px] pb-[60px]">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          {/* Join our community */}
          <div className="lg:col-span-1 lg:pr-8 text-center lg:text-left">
            <h3 className="font-serif text-2xl mb-6 tracking-wide">Join Our Community</h3>
            <p className="text-[#F8F6F3]/60 text-sm mb-8 leading-relaxed font-light">
              Subscribe and be the first to know about new products, special offers, and more.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-6 text-[#B08A5A]">
              <a href="https://www.instagram.com/khuloodofficial/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F6F3] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5 stroke-[1.5]" />
              </a>
              <a href="mailto:contact@khulood.com" className="hover:text-[#F8F6F3] transition-colors" aria-label="Email">
                <Mail className="h-5 w-5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center lg:text-left">
            <h4 className="text-xs tracking-[0.2em] font-medium uppercase mb-8 text-[#B08A5A]">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#F8F6F3] hover:text-[#B08A5A] transition-colors font-light tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care links */}
          <div className="text-center lg:text-left">
            <h4 className="text-xs tracking-[0.2em] font-medium uppercase mb-8 text-[#B08A5A]">Customer Care</h4>
            <ul className="space-y-4">
              {footerLinks.customerCare.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#F8F6F3] hover:text-[#B08A5A] transition-colors font-light tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="font-serif text-2xl lg:text-3xl mb-5 tracking-wide text-[#B08A5A] font-light">From Our Atelier to You</h3>
            <p className="text-[#F8F6F3]/70 text-sm mb-10 leading-[1.8] font-light tracking-wide">
              Subscribe to receive exclusive collection launches, artisan stories, behind-the-scenes craftsmanship, and the latest updates from KHULOOD.
            </p>
            <div className="relative group mt-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border-0 border-b border-[#F8F6F3]/20 py-3 text-sm placeholder:text-[#F8F6F3]/30 placeholder:tracking-wide focus:outline-none focus:border-[#B08A5A] transition-all duration-500 pr-28 text-[#F8F6F3]"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.2em] font-medium uppercase text-[#B08A5A] hover:text-[#F8F6F3] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#B08A5A]/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-[#F8F6F3]/50 font-light tracking-wide text-center md:text-left">
            © 2026 KHULOOD
          </div>

          <div className="w-5 h-5 border border-[#B08A5A] rotate-45 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-[#B08A5A]" />
          </div>

          <div className="text-xs text-[#F8F6F3]/50 font-light tracking-wide text-center md:text-right">
            Designed in Oman • Crafted with Care
          </div>
        </div>
      </div>
    </footer>
  )
}
