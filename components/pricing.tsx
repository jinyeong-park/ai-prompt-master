"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Shield } from "lucide-react"

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState("professional")

  const packages = [
    {
      id: "basic",
      name: "Basic",
      price: 49,
      description: "Perfect for individuals or small teams just getting started with AI",
      features: [
        "3 custom-crafted prompts",
        "Basic optimization",
        "Email delivery",
        "1 revision per prompt",
        "24-hour delivery",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      price: 149,
      description: "Ideal for businesses looking to maximize their AI workflow efficiency",
      features: [
        "10 custom-crafted prompts",
        "Advanced optimization",
        "Email + dashboard delivery",
        "Unlimited revisions",
        "24-hour delivery",
        "Performance tracking",
        "AI tool integration guide",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 249,
      description: "Comprehensive solution for organizations with complex AI needs",
      features: [
        "20 custom-crafted prompts",
        "Expert-level optimization",
        "Full-service delivery",
        "Unlimited revisions",
        "Priority 12-hour delivery",
        "Advanced performance tracking",
        "AI workflow consultation",
        "Dedicated prompt engineer",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the package that best fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`
                bg-white dark:bg-gray-900 rounded-xl overflow-hidden transition-all duration-300
                ${
                  selectedPackage === pkg.id
                    ? "ring-2 ring-primary shadow-xl scale-105 z-10"
                    : "shadow-md hover:shadow-lg"
                }
              `}
            >
              <div
                className={`
                  p-6 text-center border-b border-gray-100 dark:border-gray-800
                  ${selectedPackage === pkg.id ? "bg-primary/10 dark:bg-primary/20" : "bg-gray-50 dark:bg-gray-800"}
                `}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$</span>
                  <span className="text-5xl font-bold text-gray-900 dark:text-white mx-1">{pkg.price}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2">{pkg.description}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-4 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    selectedPackage === pkg.id
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  } group relative overflow-hidden transition-all duration-300`}
                  size="lg"
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <span className="relative z-10 flex items-center">
                    {selectedPackage === pkg.id ? "Get Started" : "Select Package"}
                    {selectedPackage === pkg.id && (
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </span>
                  {selectedPackage === pkg.id && (
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </Button>
              </div>

              {selectedPackage === pkg.id && (
                <div className="bg-green-50 dark:bg-green-900/20 p-4 flex items-center justify-center text-green-700 dark:text-green-400 text-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Most popular choice for businesses like yours
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <span className="text-gray-700 dark:text-gray-300">
              All packages include our 100% satisfaction guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

