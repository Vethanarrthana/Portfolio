"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { portfolioContent } from "@/lib/content"

export function HeroSection() {
  const { hero } = portfolioContent

  return (
    <section className="min-h-screen flex items-center bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left content */}
          <div className="flex-1 lg:text-left text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I'm <span className="text-primary">{hero.name}</span>
            </h1>

            <div className="w-12 h-1 bg-primary rounded mb-6 lg:mx-0 mx-auto" />

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
                <a href={`mailto:${hero.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold">
                <a href="#projects">
                  View Projects
                  <ArrowDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href={hero.github} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary text-gray-500 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href={hero.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary text-gray-500 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${hero.email}`}
                className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary text-gray-500 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-blue-100 shadow-lg">
                <img src="/profile.jpeg" alt="Vethanarrthana" className="w-full h-full object-cover object-top" />
              </div>
              {/* Subtle accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
