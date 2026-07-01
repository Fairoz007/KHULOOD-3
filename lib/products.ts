export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  hoverImage: string
  description: string
  longDescription: string
  materials: string[]
  care: string[]
  sizes: { size: string; available: boolean }[]
  colors: { name: string; hex: string; available: boolean }[]
  details: string[]
  madeIn: string
}

export const products: Product[] = [
  {
    id: "aurora",
    name: "Aurora",
    price: 470.00,
    category: "Abayas",
    image: "/aurora_abaya_1782932490500.png",
    hoverImage: "/aurora_abaya_1782932490500.png",
    description: "Ethereal, flowing luxury abaya inspired by dawn light.",
    longDescription: "An ethereal, flowing luxury abaya inspired by dawn light. Premium silk fabric, subtle elegant colors, designed for special occasions.",
    materials: ["Premium Silk", "Hand-stitched details"],
    care: ["Dry clean only", "Store carefully"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Dawn", hex: "#E6D4D9", available: true }],
    details: ["Flowing texture", "Elegant drape", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
  {
    id: "mirage",
    name: "Mirage",
    price: 275.00,
    category: "Abayas",
    image: "/mirage_abaya_1782932499255.png",
    hoverImage: "/mirage_abaya_1782932499255.png",
    description: "Contemporary abaya with fluid textures.",
    longDescription: "A contemporary luxury abaya featuring fluid textures inspired by a desert mirage. High fashion elegant drape.",
    materials: ["Premium Crepe", "Silk Trim"],
    care: ["Dry clean recommended"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Sand", hex: "#D2B48C", available: true }],
    details: ["Fluid textures", "Contemporary design", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
  {
    id: "moonlit",
    name: "Moonlit",
    price: 275.00,
    category: "Abayas",
    image: "/moonlit_abaya_1782932473119.png",
    hoverImage: "/moonlit_abaya_1782932473119.png",
    description: "Soft, graceful contemporary abaya reflecting moonlight.",
    longDescription: "A soft, graceful contemporary abaya reflecting a moonlit concept, featuring subtle silver detailing and flowing textures.",
    materials: ["Luxury Chiffon", "Silver Thread Detailing"],
    care: ["Dry clean only"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Midnight", hex: "#191970", available: true }, { name: "Silver", hex: "#C0C0C0", available: true }],
    details: ["Silver detailing", "Flowing textures", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
  {
    id: "noir",
    name: "Noir",
    price: 325.00,
    category: "Abayas",
    image: "/noir_abaya_1782932482540.png",
    hoverImage: "/noir_abaya_1782932482540.png",
    description: "Bold, timeless black luxury abaya.",
    longDescription: "A bold, timeless black luxury abaya with sophisticated finishing touches. Dramatic lighting and minimalist styling.",
    materials: ["Premium Black Crepe", "Satin trim"],
    care: ["Dry clean only"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Black", hex: "#000000", available: true }],
    details: ["Sophisticated finishing", "Timeless design", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
  {
    id: "reversible-silk",
    name: "Reversible Silk Satin Taffeta",
    price: 285.00,
    category: "Abayas",
    image: "/reversible_abaya_1782932437505.png",
    hoverImage: "/reversible_abaya_1782932437505.png",
    description: "Luxurious reversible abaya crafted from premium silk.",
    longDescription: "A luxurious reversible abaya crafted from premium silk satin taffeta, offering versatility without compromising elegance.",
    materials: ["Silk Satin Taffeta"],
    care: ["Dry clean only"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Dual Tone", hex: "#4a4a4a", available: true }],
    details: ["Reversible design", "Versatile elegance", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
  {
    id: "sahara",
    name: "Sahara",
    price: 445.00,
    category: "Abayas",
    image: "/sahara_abaya_1782932507219.png",
    hoverImage: "/sahara_abaya_1782932507219.png",
    description: "Premium luxury abaya in warm desert tones.",
    longDescription: "A premium luxury abaya in warm desert tones, featuring a contemporary minimalist design and high-quality fabric.",
    materials: ["Premium Linen Blend", "Silk details"],
    care: ["Dry clean only"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Desert Sand", hex: "#E1C699", available: true }],
    details: ["Warm desert tones", "Minimalist design", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
  {
    id: "scattered-abaya",
    name: "Scattered Abaya",
    price: 254.00,
    category: "Abayas",
    image: "/scattered_abaya_1782932464321.png",
    hoverImage: "/scattered_abaya_1782932464321.png",
    description: "Delicate handcrafted embroidery combined with contemporary minimalism.",
    longDescription: "Minimalist modern luxury abaya with delicate handcrafted scattered embroidery. Sophisticated styling.",
    materials: ["Premium Crepe", "Hand embroidery"],
    care: ["Dry clean only"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Black/Silver", hex: "#2a2a2a", available: true }],
    details: ["Scattered embroidery", "Minimalist modern", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
  {
    id: "square-neck-ramadan",
    name: "Square Neck – Ramadan",
    price: 272.00,
    category: "Abayas",
    image: "/square_neck_abaya_1782932446731.png",
    hoverImage: "/square_neck_abaya_1782932446731.png",
    description: "Modern sophistication with a beautifully structured neckline.",
    longDescription: "A contemporary luxury fashion piece featuring a beautifully structured square neckline and refined silhouette.",
    materials: ["Premium Crepe", "Structured interlining"],
    care: ["Dry clean only"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Black", hex: "#000000", available: true }],
    details: ["Square neckline", "Structured silhouette", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
  {
    id: "v-neck-ramadan",
    name: "V Neck – Ramadan",
    price: 234.00,
    category: "Abayas",
    image: "/v_neck_abaya_1782932428688.png",
    hoverImage: "/v_neck_abaya_1782932428688.png",
    description: "A refined Ramadan design featuring elegant tailoring.",
    longDescription: "A refined Ramadan design featuring elegant tailoring and graceful simplicity. Beautiful V-neckline.",
    materials: ["Premium Crepe"],
    care: ["Dry clean only"],
    sizes: [{ size: "Standard", available: true }, { size: "Custom", available: true }],
    colors: [{ name: "Black", hex: "#000000", available: true }],
    details: ["V-neckline", "Graceful simplicity", "Handcrafted in Oman"],
    madeIn: "Muscat, Oman",
  },
]

export const categories = ["All", "Abayas"]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter((p) => p.category === category)
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  const current = getProductById(currentId)
  if (!current) return products.slice(0, limit)

  const sameCategory = products.filter((p) => p.id !== currentId && p.category === current.category)
  const others = products.filter((p) => p.id !== currentId && p.category !== current.category)

  return [...sameCategory, ...others].slice(0, limit)
}
