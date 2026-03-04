"use client"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Education</p>
          <h2 className="text-4xl font-bold text-gray-900">Academic Background</h2>
          <div className="w-10 h-1 bg-primary rounded mx-auto mt-4" />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              badge: "B.Tech", duration: "2023 – 2027",
              degree: "Computer Science and Business Systems",
              institution: "Sri Eshwar College of Engineering",
              location: "Coimbatore, Tamil Nadu",
              grade: "CGPA: 8.33", gradeColor: true,
            },
            {
              badge: "HSC", duration: "2022 – 2023",
              degree: "Higher Secondary Certificate (Science)",
              institution: "Maharishi Vidya Mandir Matric Hr Sec School",
              location: "Karaikudi, Tamil Nadu",
              grade: "92.17%", gradeColor: true,
            },
          ].map((edu, i) => (
            <div key={i} className={`bg-white rounded-xl border border-border shadow-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{edu.badge}</span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm"><Calendar className="w-4 h-4" />{edu.duration}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-3">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{edu.location}</div>
                    <div className="flex items-center gap-1"><Award className="w-4 h-4 text-primary" /><span className="font-semibold text-primary">{edu.grade}</span></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
