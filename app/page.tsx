"use client"

import { useState, useEffect } from "react"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import Header from "@/components/header"
import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import ProblemSolution from "@/components/problem-solution"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import Guarantee from "@/components/guarantee"
import Scarcity from "@/components/scarcity"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import ExitIntent from "@/components/exit-intent"
import ChatBubble from "@/components/chat-bubble"
import RecentPurchase from "@/components/recent-purchase"

export default function Home() {
  const { toast } = useToast()
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [isReturningVisitor, setIsReturningVisitor] = useState(false)

  useEffect(() => {
    // Check if returning visitor
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore")
    if (hasVisitedBefore) {
      setIsReturningVisitor(true)
    } else {
      localStorage.setItem("hasVisitedBefore", "true")
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem("exitIntentShown")) {
        setShowExitIntent(true)
        localStorage.setItem("exitIntentShown", "true")
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    // Show recent purchase notifications
    const purchaseNames = [
      "John from New York",
      "Sarah from London",
      "Michael from Toronto",
      "Emma from Sydney",
      "David from Chicago",
      "Lisa from Berlin",
    ]

    const packages = ["Basic", "Professional", "Enterprise"]

    const showRandomPurchase = () => {
      const randomName = purchaseNames[Math.floor(Math.random() * purchaseNames.length)]
      const randomPackage = packages[Math.floor(Math.random() * packages.length)]

      toast({
        title: "Recent Purchase",
        description: `${randomName} just purchased the ${randomPackage} package`,
        duration: 5000,
      })
    }

    // Show first purchase notification after 15 seconds
    const firstTimer = setTimeout(showRandomPurchase, 15000)

    // Then show random purchases every 30-60 seconds
    const intervalTimer = setInterval(
      () => {
        if (Math.random() > 0.5) {
          // 50% chance to show a purchase
          showRandomPurchase()
        }
      },
      Math.floor(Math.random() * 30000) + 30000,
    )

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(firstTimer)
      clearInterval(intervalTimer)
    }
  }, [toast])

  const closeExitIntent = () => {
    setShowExitIntent(false)
  }

  return (
    <main className="relative">
      <Toaster />
      <Header isReturningVisitor={isReturningVisitor} />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <Pricing />
      <Guarantee />
      <Scarcity />
      <FAQ />
      <FinalCTA />
      <Footer />
      {showExitIntent && <ExitIntent onClose={closeExitIntent} />}
      <ChatBubble />
      <RecentPurchase />
    </main>
  )
}

