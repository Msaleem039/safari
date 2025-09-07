"use client";

import type React from "react"
import { usePathname } from 'next/navigation'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WelcomePopup } from "@/components/welcome-popup"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideHeaderFooter = pathname === '/login' || pathname?.startsWith('/admin')
  const showWelcomePopup = !hideHeaderFooter && pathname !== '/forgot-password' && !pathname?.startsWith('/reset-password')

  return (
   
      <div className="relative">
        {!hideHeaderFooter && <Header />}
        {children}
        {!hideHeaderFooter && <Footer />}
        {showWelcomePopup && <WelcomePopup />}
      </div>
 
  )
}
