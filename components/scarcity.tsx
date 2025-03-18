import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, AlertTriangle } from "lucide-react"
import CountdownTimer from "./countdown-timer"

export default function Scarcity() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <div className="inline-flex items-center bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full mb-6">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span className="font-medium">Limited Time Offer</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Special Launch Discount: 20% Off All Packages
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  This special offer is only available for a limited time. Lock in your discount now before prices
                  increase.
                </p>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Offer ends in:</span>
                  </div>
                  <CountdownTimer hours={23} minutes={59} seconds={59} />
                </div>

                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 px-8 rounded-lg group relative overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg"
                  size="lg"
                >
                  <span className="relative z-10 flex items-center">
                    Claim Your 20% Discount Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </div>

              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-300 to-orange-300 dark:from-amber-600 dark:to-orange-600 rounded-full opacity-20 blur-lg"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-full p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-orange-500">20%</div>
                      <div className="text-xl font-medium text-gray-900 dark:text-white mt-2">OFF</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 border-t border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`/placeholder.svg?height=32&width=32`}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  <strong>12 people</strong> claimed this offer in the last hour
                </span>
              </div>

              <div className="text-gray-600 dark:text-gray-400 text-sm">
                <strong>Only 50 spots</strong> available at this price
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

