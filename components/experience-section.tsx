"use client"

import { portfolioContent } from "@/lib/content"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
  const { experience } = portfolioContent

  return (
    <section id="experience" className="py-20 bg-gray-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Experience</p>
          <h2 className="text-4xl font-bold text-gray-900">Work Experience</h2>
          <div className="w-10 h-1 bg-primary rounded mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {experience.list.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-7">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-primary font-semibold text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-border flex-shrink-0">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-0 md:pl-15">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
