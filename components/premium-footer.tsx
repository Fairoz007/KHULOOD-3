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
          <div className="lg:col-span-1 pr-8">
            <h3 className="font-serif text-2xl mb-6 tracking-wide">Join Our Community</h3>
            <p className="text-[#F8F6F3]/60 text-sm mb-8 leading-relaxed font-light">
              Subscribe and be the first to know about new products, special offers, and more.
            </p>
            <div className="flex items-center gap-6 text-[#B08A5A]">
              <a href="https://www.instagram.com/khuloodofficial/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F6F3] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5 stroke-[1.5]" />
              </a>
              <a href="mailto:contact@khulood.com" className="hover:text-[#F8F6F3] transition-colors" aria-label="Email">
                <Mail className="h-5 w-5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
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
          <div>
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

          {/* 10% Off */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl mb-4 tracking-wide text-[#B08A5A]">10% Off First Order</h3>
            <p className="text-[#F8F6F3]/60 text-sm mb-8 leading-relaxed font-light">
              Subscribe to our newsletter to receive your discount.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-0 border-b border-[#F8F6F3]/30 py-3 text-sm placeholder:text-[#F8F6F3]/40 focus:outline-none focus:border-[#B08A5A] transition-colors pr-24 text-[#F8F6F3]"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xs tracking-[0.15em] font-medium uppercase text-[#B08A5A] hover:opacity-70 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#B08A5A]/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-[#F8F6F3]/50 font-light tracking-wide">
            © 2025 KHULOOD
          </div>

          <div className="w-5 h-5 border border-[#B08A5A] rotate-45 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-[#B08A5A]" />
          </div>

          <div className="text-xs text-[#F8F6F3]/50 font-light tracking-wide">
            Designed in Oman • Crafted with Care
          </div>
        </div>
      </div>
    </footer>
  )
}
