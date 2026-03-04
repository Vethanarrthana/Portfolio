"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { portfolioContent } from "@/lib/content"

export function HeroSection() {
  const { hero } = portfolioContent
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const name = hero.name
    let i = 0
    const interval = setInterval(() => {
      if (i <= name.length) {
        setDisplayed(name.slice(0, i))
        i++
      } else {
        setTyping(false)
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [hero.name])

  return (
    <section className="min-h-screen flex items-center bg-white border-b border-border relative overflow-hidden">
      {/* Subtle bg circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-50 rounded-full opacity-60 animate-float-y" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-50 rounded-full opacity-40 animate-float-y" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full animate-float-y" style={{ animationDelay: "0.8s" }} />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <div className="flex-1 lg:text-left text-center">
            <div className="animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.1s" }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="text-primary">
                  {displayed}
                  {typing && <span className="animate-blink text-primary">|</span>}
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.3s" }}>
              <div className="w-12 h-1 bg-primary rounded mb-6 lg:mx-0 mx-auto" />
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">{hero.description}</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.5s" }}>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <a href={`mailto:${hero.email}`}><Mail className="w-4 h-4 mr-2" />Get In Touch</a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5">
                <a href="#projects">View Projects<ArrowDown className="w-4 h-4 ml-2" /></a>
              </Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationFillMode: "both", animationDelay: "0.7s" }}>
              {[
                { href: hero.github, icon: <Github className="w-5 h-5" />, label: "GitHub" },
                { href: hero.linkedin, icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { href: `mailto:${hero.email}`, icon: <Mail className="w-5 h-5" />, label: "Email" },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right photo - no badges */}
          <div className="flex-shrink-0 animate-fade-in-right" style={{ animationFillMode: "both", animationDelay: "0.4s" }}>
            <div className="relative animate-float-y" style={{ animationDelay: "0s" }}>
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-blue-100 shadow-xl">
                <img src="/profile.jpeg" alt="Vethanarrthana" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
