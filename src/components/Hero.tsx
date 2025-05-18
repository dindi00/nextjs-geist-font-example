import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      <div className="relative container mx-auto px-4 pt-40 pb-16 flex flex-col items-center text-center text-white">
        <h1 className="text-7xl font-bold tracking-tight mb-6 font-display">
          Unlock
          <br />
          Your Future
        </h1>
        <p className="text-xl max-w-2xl mb-10 text-white/90 leading-relaxed font-light">
          A smarter way to explore universities, courses, and scholarships — and connect with the right educational agents
        </p>
        <Button 
          size="lg" 
          className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-6 h-auto font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Get Started
        </Button>
      </div>

      {/* Chatbot Icon */}
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-105">
        <Image
          src="/chatbot.svg"
          alt="Chat with us"
          width={28}
          height={28}
          className="text-blue-600"
        />
      </div>
    </div>
  )
}
