"use client"
import { certificationsData } from "@/lib/content"
import { BadgeCheck } from "lucide-react"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Certifications</p>
          <h2 className="text-4xl font-bold text-gray-900">Continuous Learning</h2>
          <div className="w-10 h-1 bg-primary rounded mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 p-6 flex items-start gap-4 reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="w-11 h-11 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center text-2xl flex-shrink-0">
                {cert.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">{cert.title}</h3>
                  {cert.inProgress && (
                    <span className="text-xs font-semibold px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full border border-amber-100 flex-shrink-0">In Progress</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                    <BadgeCheck className="w-4 h-4" />{cert.issuer}
                  </div>
                  <span className="text-gray-400 text-xs">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
