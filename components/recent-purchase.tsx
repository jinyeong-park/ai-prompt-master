"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, X } from "lucide-react"

export default function RecentPurchase() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPurchase, setCurrentPurchase] = useState({
    name: "",
    location: "",
    package: "",
  })

  useEffect(() => {
    const names = ["John", "Sarah", "Michael", "Emma", "David", "Lisa", "Robert", "Jennifer"]
    const locations = ["New York", "London", "Toronto", "Sydney", "Chicago", "Berlin", "Paris", "Tokyo"]
    const packages = ["Basic", "Professional", "Enterprise"]

    const showRandomPurchase = () => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      const randomLocation = locations[Math.floor(Math.random() * locations.length)]
      const randomPackage = packages[Math.floor(Math.random() * packages.length)]

      setCurrentPurchase({
        name: randomName,
        location: randomLocation,
        package: randomPackage,
      })

      setIsVisible(true)

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    // Show first purchase notification after 20 seconds
    const firstTimer = setTimeout(showRandomPurchase, 20000)

    // Then show random purchases every 45-90 seconds
    const intervalTimer = setInterval(
      () => {
        if (Math.random() > 0.3) {
          // 70% chance to show a purchase
          showRandomPurchase()
        }
      },
      Math.floor(Math.random() * 45000) + 45000,
    )

    return () => {
      clearTimeout(firstTimer)
      clearInterval(intervalTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-xs animate-slide-up">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start">
          <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 mr-3">
            <ShoppingCart className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Recent Purchase</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {currentPurchase.name} from {currentPurchase.location} just purchased the {currentPurchase.package}{" "}
              package
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Just now</p>
          </div>
        </div>
      </div>
    </div>
  )
}

