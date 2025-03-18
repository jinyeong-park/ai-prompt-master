export default function SocialProof() {
  const companies = [
    { name: "TechCorp", logo: "/placeholder.svg?height=40&width=120" },
    { name: "InnovateLabs", logo: "/placeholder.svg?height=40&width=120" },
    { name: "FutureAI", logo: "/placeholder.svg?height=40&width=120" },
    { name: "DataSmart", logo: "/placeholder.svg?height=40&width=120" },
    { name: "AIVentures", logo: "/placeholder.svg?height=40&width=120" },
  ]

  const testimonials = [
    {
      quote:
        "AI Prompt Master increased our content team's productivity by 40%. The custom prompts they created for us are worth every penny.",
      author: "Sarah Johnson",
      position: "Content Director, TechCorp",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "We were struggling to get consistent results from ChatGPT until we started using AI Prompt Master's services. Game changer!",
      author: "Michael Chen",
      position: "CTO, InnovateLabs",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "The ROI on these custom prompts is incredible. We're saving hours of work every week and getting better outputs.",
      author: "Jessica Williams",
      position: "Marketing Lead, DataSmart",
      image: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Innovative Companies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join over 500+ businesses that are transforming their AI workflows with our expert prompt engineering
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {companies.map((company, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img src={company.logo || "/placeholder.svg"} alt={company.name} className="h-10 md:h-12" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full px-6 py-3">
            <div className="flex items-center mr-4">
              <div className="text-4xl font-bold text-primary mr-2">98%</div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Satisfaction</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Rate</div>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-300 dark:bg-gray-700 mx-4"></div>
            <div className="flex items-center mr-4">
              <div className="text-4xl font-bold text-primary mr-2">24h</div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Delivery</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Time</div>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-300 dark:bg-gray-700 mx-4"></div>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary mr-2">500+</div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Clients</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

