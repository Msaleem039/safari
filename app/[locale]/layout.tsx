import type React from "react"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "../globals.css"
import ClientLayout from "../client-layout"

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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  return (
    <html lang={locale} suppressHydrationWarning className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-dm-sans min-h-screen bg-background">
        <ClientLayout>
          <main>
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  )
}
