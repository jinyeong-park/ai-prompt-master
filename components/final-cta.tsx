import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your AI Experience?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that are already saving time and getting better results with our expert prompt
            engineering services.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-5 w-5 text-blue-200 mr-2" />
              <span>24-Hour Delivery</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-5 w-5 text-blue-200 mr-2" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="h-5 w-5 text-blue-200 mr-2" />
              <span>Expert Prompt Engineers</span>
            </div>
          </div>

          <Button
            className="bg-white text-primary hover:bg-blue-50 text-lg py-6 px-8 rounded-lg group relative overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg"
            size="lg"
          >
            <span className="relative z-10 flex items-center">
              Get Your Custom Prompts Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

