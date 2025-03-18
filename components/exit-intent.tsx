"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Mail, ArrowRight } from "lucide-react"

interface ExitIntentProps {
  onClose: () => void
}

export default function ExitIntent({ onClose }: ExitIntentProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would normally send the email to your backend
      setTimeout(() => {
        onClose()
      }, 3000)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          {!isSubmitted ? (
            <>
              <div className="bg-orange-500 text-white text-center py-2 px-4 rounded-full text-sm font-medium mb-6">
                Special Offer: 10% Extra Discount
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                Wait! Don't Miss Out
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Subscribe now and get an <strong>extra 10% discount</strong> on any package. Limited time offer!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white group">
                  <span className="flex items-center">
                    Claim My 10% Discount
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-300">Your discount code has been sent to your email.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

