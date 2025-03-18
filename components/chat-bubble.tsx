"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "bot"; message: string }[]>([
    {
      type: "bot",
      message: "Hi there! 👋 How can I help you with prompt engineering today?",
    },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([...chatHistory, { type: "user", message }])

    // Clear input
    setMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! One of our prompt engineers will get back to you shortly.",
        "Great question! Our custom prompts can help you achieve that. Would you like to see our packages?",
        "I'd be happy to explain more about our prompt engineering services. What specific use case are you interested in?",
        "We typically deliver custom prompts within 24 hours. Would you like to get started today?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      setChatHistory((prev) => [...prev, { type: "bot", message: randomResponse }])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden flex flex-col max-h-[500px]">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat with AI Prompt Master</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    chat.type === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

