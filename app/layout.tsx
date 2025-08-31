	'use client';

import type React from "react"
import { usePathname } from 'next/navigation'
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const hideHeaderFooter = pathname === '/login' || pathname?.startsWith('/admin')

  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-dm-sans min-h-screen bg-background">
        <ClientLayout>
          <main>
            {!hideHeaderFooter && <Header />}
            {children}
            {!hideHeaderFooter && <Footer />}
          </main>
        </ClientLayout>
      </body>
    </html>
  )
}
