import { Zap, Target, TrendingUp, Clock, Repeat, Shield } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Expert Prompt Engineering",
      description: "Our team of prompt engineers has crafted thousands of high-performing prompts across industries.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Tailored to Your Needs",
      description: "Custom prompts designed specifically for your business use cases and objectives.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Measurable Results",
      description: "See immediate improvements in AI output quality, consistency, and relevance.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24-Hour Delivery",
      description: "Receive your custom-crafted prompts within one business day of your order.",
    },
    {
      icon: <Repeat className="h-8 w-8 text-primary" />,
      title: "Unlimited Revisions",
      description: "We'll refine your prompts until they deliver exactly the results you need.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Satisfaction Guarantee",
      description: "If you're not completely satisfied, we'll refund your purchase - no questions asked.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Transform How You Use AI</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our expert prompt engineering services unlock the full potential of AI tools for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Our Process Works</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Getting expert-crafted prompts is simple with our streamlined process
                </p>

                <ol className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Tell us your needs</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Share your business objectives and specific use cases for AI
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Our experts craft your prompts</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our prompt engineers design custom prompts for your specific needs
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Receive your prompts</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Get your custom prompts within 24 hours, ready to transform your AI workflow
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-primary rounded-2xl opacity-10 blur-lg"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="AI Prompt Master Process"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

