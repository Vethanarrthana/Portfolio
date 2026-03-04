"use client"

import { useState } from "react"
import { portfolioContent } from "@/lib/content"

export function SkillsSection() {
  const { skills } = portfolioContent
  const [activeCategory, setActiveCategory] = useState(0)
  const currentCategory = skills.categories[activeCategory]

  return (
    <section id="skills" className="py-20 bg-gray-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Skills</p>
          <h2 className="text-4xl font-bold text-gray-900">Technical Expertise</h2>
          <div className="w-10 h-1 bg-primary rounded mx-auto mt-4" />
        </div>

        {/* Tabs - NO reveal class so they always work */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skills.categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${
                activeCategory === index
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-gray-600 border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Skills grid - NO reveal class, just hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{skill.icon}</span>
                <span className="font-semibold text-gray-800">{skill.name}</span>
              </div>
              <p className="text-gray-500 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <div className="text-center mb-10 reveal">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Achievements</p>
            <h3 className="text-3xl font-bold text-gray-900">Programming Milestones</h3>
            <div className="w-10 h-1 bg-primary rounded mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { platform: "CodeChef",  icon: "👨‍🍳", badge: "Bronze Badge",    desc: "Consistent participation in competitive programming contests." },
              { platform: "SkillRack", icon: "⚡",   badge: "300+ Problems",   desc: "Solved 300+ problems across difficulty levels, strengthening DSA." },
              { platform: "LeetCode",  icon: "🧩",   badge: "200+ Problems",   desc: "200+ algorithmic challenges covering arrays, trees, graphs & DP." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center reveal">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{item.platform}</h4>
                <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full border border-blue-100 mb-3">
                  {item.badge}
                </span>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
