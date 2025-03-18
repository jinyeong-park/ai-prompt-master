"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Generate a random number between 8 and 15
    const randomVisitors = Math.floor(Math.random() * 8) + 8
    setVisitorCount(randomVisitors)

    // Occasionally update the visitor count to create a sense of activity
    const interval = setInterval(() => {
      const change = Math.random() > 0.5 ? 1 : -1
      setVisitorCount((prev) => {
        const newCount = prev + change
        // Keep count between 8 and 15
        return newCount < 8 ? 8 : newCount > 15 ? 15 : newCount
      })
    }, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
      <Users className="h-4 w-4 mr-1 text-primary" />
      <span>{visitorCount} people viewing now</span>
    </div>
  )
}

