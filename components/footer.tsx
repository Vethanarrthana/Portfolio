"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { portfolioContent } from "@/lib/content"

export function Footer() {
  const { hero } = portfolioContent

  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Open to opportunities, collaborations, and interesting conversations.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <a href={hero.github} target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-800 hover:bg-primary text-gray-300 hover:text-white transition-colors duration-200 border border-gray-700">
            <Github className="w-5 h-5" />
          </a>
          <a href={hero.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-800 hover:bg-primary text-gray-300 hover:text-white transition-colors duration-200 border border-gray-700">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${hero.email}`}
            className="p-3 rounded-lg bg-gray-800 hover:bg-primary text-gray-300 hover:text-white transition-colors duration-200 border border-gray-700">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} {hero.name} 
        </div>
      </div>
    </footer>
  )
}
