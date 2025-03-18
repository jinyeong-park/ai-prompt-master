import { ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProblemSolution() {
  const problems = [
    "Wasting hours crafting and refining prompts",
    "Getting inconsistent results from AI tools",
    "Struggling to extract specific information",
    "Receiving generic outputs that need heavy editing",
    "Hitting AI limitations without knowing workarounds",
  ]

  const solutions = [
    "Custom-crafted prompts that save you 5+ hours per week",
    "Consistent, high-quality outputs every time",
    "Precisely targeted information extraction",
    "Tailored outputs that require minimal editing",
    "Expert techniques that overcome common AI limitations",
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Problem with Generic AI Prompts</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Most businesses are leaving 80% of AI's potential untapped due to poor prompt engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white h-12 w-12 rounded-full flex items-center justify-center">
              <XCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 mt-4 text-center">
              Without AI Prompt Master
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white h-12 w-12 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 mt-4 text-center">
              With AI Prompt Master
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 px-8 rounded-lg group relative overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg"
            size="lg"
          >
            <span className="relative z-10 flex items-center">
              Transform Your AI Experience Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  )
}

