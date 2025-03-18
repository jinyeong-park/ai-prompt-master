"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What exactly is prompt engineering?",
      answer:
        "Prompt engineering is the art and science of crafting effective instructions for AI models like ChatGPT or Claude. A well-engineered prompt can dramatically improve the quality, relevance, and accuracy of AI-generated outputs, saving you time and resources.",
    },
    {
      question: "How long does it take to receive my custom prompts?",
      answer:
        "We deliver all custom prompts within 24 hours of your order. For Enterprise clients, we offer priority 12-hour delivery. If you have an urgent need, please contact us directly and we'll do our best to accommodate your timeline.",
    },
    {
      question: "Can I request revisions to my prompts?",
      answer:
        "We offer unlimited revisions on our Professional and Enterprise packages, and one revision per prompt on our Basic package. We want to ensure you're completely satisfied with the results your prompts generate.",
    },
    {
      question: "Which AI tools do your prompts work with?",
      answer:
        "Our custom prompts are designed to work with all major AI language models, including OpenAI's GPT models (ChatGPT, GPT-4), Anthropic's Claude, Google's Gemini, and others. We'll optimize your prompts specifically for the AI tools you use.",
    },
    {
      question: "How do I know if the prompts are working effectively?",
      answer:
        "We provide clear before-and-after examples with each prompt delivery, showing the difference in output quality. Our Professional and Enterprise packages also include performance tracking tools to measure improvements in your AI workflow.",
    },
    {
      question: "What if I'm not satisfied with my prompts?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your custom prompts after revisions, we'll refund your purchase - no questions asked.",
    },
    {
      question: "Do you offer ongoing support after delivery?",
      answer:
        "Yes, we provide email support for all packages to answer any questions about implementing your prompts. Enterprise clients also receive dedicated support from their assigned prompt engineer.",
    },
    {
      question: "Can you help with specific industry terminology or requirements?",
      answer:
        "We specialize in creating prompts for specific industries and use cases. Our team has experience across healthcare, finance, legal, marketing, e-commerce, and many other sectors.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our prompt engineering services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

