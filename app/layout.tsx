import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import CustomCursor from "@/components/CustomCursor"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Prime Spread — Food & Influencer Marketing Agency",
  description:
    "London-based influencer marketing agency connecting food and cooking influencers with kitchen appliance brands and food companies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-[#EEE9DF] text-[#1B2632] antialiased">
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
