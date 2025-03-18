"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import VisitorCounter from "./visitor-counter"

interface HeaderProps {
  isReturningVisitor: boolean
}

export default function Header({ isReturningVisitor }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`w-full py-4 transition-all duration-300 z-50 ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm"
          : "relative bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            <span className="text-primary">AI</span> Prompt Master
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            FAQ
          </Link>
          <VisitorCounter />
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white group relative overflow-hidden transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            <span className="relative z-10 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <VisitorCounter />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 p-2 text-gray-700 dark:text-gray-300 hover:text-primary"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white w-full"
              size="lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

