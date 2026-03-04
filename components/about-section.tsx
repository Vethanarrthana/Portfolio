"use client"

import { CheckCircle2 } from "lucide-react"
import { portfolioContent } from "@/lib/content"

export function AboutSection() {
  const { about } = portfolioContent

  return (
    <section id="about" className="py-20 bg-gray-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-4xl font-bold text-gray-900">Who I Am</h2>
          <div className="w-10 h-1 bg-primary rounded mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{about.description}</p>
            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "12+", label: "Projects Built", icon: "🗂️" },
              { value: "2+", label: "Years Coding", icon: "💻" },
              { value: "3", label: "Internships", icon: "🏢" },
              { value: "500+", label: "Problems Solved", icon: "🧩" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border shadow-sm text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
