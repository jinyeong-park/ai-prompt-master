import { Shield, Check } from "lucide-react"

export default function Guarantee() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-800/20 rounded-full -mt-20 -mr-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100 dark:bg-blue-800/20 rounded-full -mb-10 -ml-10 opacity-50"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                <div className="bg-white dark:bg-gray-800 rounded-full p-6 shadow-lg">
                  <Shield className="h-24 w-24 text-primary" />
                </div>
              </div>

              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our 100% Satisfaction Guarantee
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  We're so confident in the quality of our prompt engineering services that we offer a 100% satisfaction
                  guarantee. If you're not completely satisfied with your custom prompts, we'll refund your purchase.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">No questions asked refund policy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Unlimited revisions until you're 100% satisfied
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Dedicated support throughout the process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

