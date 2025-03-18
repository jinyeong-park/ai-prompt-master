"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import CountdownTimer from "./countdown-timer"

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/placeholder.svg?height=800&width=800")',
            backgroundSize: "100px",
            opacity: 0.1,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4">
                <span className="text-primary">Unlock the Full Power</span> of AI with Expert Prompt Engineering
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Get custom-optimized prompts delivered within 24 hours that help your business extract maximum value
                from AI tools like ChatGPT and Claude.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold">32% higher quality</span> outputs from your AI tools
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold">Save 5+ hours</span> per week on prompt refinement
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold">Custom prompts</span> tailored to your specific business needs
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 px-8 rounded-lg group relative overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg"
                  size="lg"
                >
                  <span className="relative z-10 flex items-center">
                    Get Your Custom Prompts Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary/10 text-lg py-6 px-8 rounded-lg"
                  size="lg"
                >
                  See How It Works
                </Button>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex">
                  {["visa", "mastercard", "amex", "paypal"].map((card) => (
                    <div
                      key={card}
                      className="w-10 h-6 mx-1 bg-white rounded shadow-sm flex items-center justify-center"
                    >
                      <Image src={`/placeholder.svg?height=24&width=36`} alt={card} width={36} height={24} />
                    </div>
                  ))}
                </div>
                <span>Secure Payment</span>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg p-4 flex items-center">
              <div className="mr-4">
                <CountdownTimer hours={23} minutes={59} seconds={59} />
              </div>
              <p className="text-amber-800 dark:text-amber-300 font-medium">
                Limited Time Offer: Get 20% off all packages!
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-primary rounded-2xl opacity-10 blur-lg"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="AI Prompt Master Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Instant Results</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Our clients see immediate improvements in AI outputs
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">24-Hour Delivery</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Custom prompts delivered within one business day
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

