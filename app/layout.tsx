import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { CartProvider } from "@/hooks/use-cart"
import { Toaster } from "sonner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "KHULOOD | Contemporary Luxury Fashion",
  description: "A bespoke clothing label redefining custom and ready-to-wear fashion. Discover our elegant collections inspired by Omani heritage.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={`font-sans antialiased`}>
        <CartProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <Toaster position="bottom-right" />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
