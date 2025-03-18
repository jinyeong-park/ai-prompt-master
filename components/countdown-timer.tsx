"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ hours, minutes, seconds }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  })

  useEffect(() => {
    // Check if there's a saved end time in localStorage
    const savedEndTime = localStorage.getItem("countdownEndTime")
    let endTime: number

    if (savedEndTime) {
      endTime = Number.parseInt(savedEndTime, 10)

      // If the saved end time has passed, create a new one
      if (endTime <= Date.now()) {
        endTime = Date.now() + hours * 3600000 + minutes * 60000 + seconds * 1000
        localStorage.setItem("countdownEndTime", endTime.toString())
      }
    } else {
      // Create a new end time
      endTime = Date.now() + hours * 3600000 + minutes * 60000 + seconds * 1000
      localStorage.setItem("countdownEndTime", endTime.toString())
    }

    const interval = setInterval(() => {
      const now = Date.now()
      const difference = endTime - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const h = Math.floor(difference / 3600000)
      const m = Math.floor((difference % 3600000) / 60000)
      const s = Math.floor((difference % 60000) / 1000)

      setTimeLeft({ hours: h, minutes: m, seconds: s })
    }, 1000)

    return () => clearInterval(interval)
  }, [hours, minutes, seconds])

  return (
    <div className="flex items-center space-x-2">
      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      <div className="flex items-center space-x-1 font-mono font-bold text-amber-600 dark:text-amber-400">
        <div className="bg-amber-100 dark:bg-amber-900/50 px-2 py-1 rounded">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="bg-amber-100 dark:bg-amber-900/50 px-2 py-1 rounded">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="bg-amber-100 dark:bg-amber-900/50 px-2 py-1 rounded">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>
    </div>
  )
}

