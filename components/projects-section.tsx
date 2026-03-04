"use client"

import { Github, Droplets, Heart, BarChart2, BookOpen, Brain, Newspaper, FileText } from "lucide-react"
import { portfolioContent } from "@/lib/content"

const PROJECT_ICONS: Record<number, { icon: React.ReactNode; color: string }> = {
  1: { icon: <Droplets className="w-7 h-7" />, color: "text-blue-500 bg-blue-50 border-blue-100" },
  2: { icon: <Heart className="w-7 h-7" />, color: "text-rose-500 bg-rose-50 border-rose-100" },
  3: { icon: <BarChart2 className="w-7 h-7" />, color: "text-amber-500 bg-amber-50 border-amber-100" },
  4: { icon: <BookOpen className="w-7 h-7" />, color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
  5: { icon: <Brain className="w-7 h-7" />, color: "text-violet-500 bg-violet-50 border-violet-100" },
  6: { icon: <Newspaper className="w-7 h-7" />, color: "text-sky-500 bg-sky-50 border-sky-100" },
  7: { icon: <FileText className="w-7 h-7" />, color: "text-teal-500 bg-teal-50 border-teal-100" },
}

export function ProjectsSection() {
  const { projects, ui } = portfolioContent
  const featuredProjects = projects.list.filter((p) => p.featured)
  const otherProjects = projects.list.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-4xl font-bold text-gray-900">Featured Work</h2>
          <div className="w-10 h-1 bg-primary rounded mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Innovative solutions crafted with passion and precision</p>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {featuredProjects.map((project) => {
            const visual = PROJECT_ICONS[project.id] || PROJECT_ICONS[1]
            return (
              <div key={project.id} className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col">
                {/* Top bar */}
                <div className="h-1 bg-primary w-full" />
                <div className="p-6 flex flex-col flex-1">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${visual.color}`}>
                    {visual.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* More work */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">More Projects</h3>
          <div className="w-8 h-1 bg-primary rounded mx-auto mt-3" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => {
            const visual = PROJECT_ICONS[project.id] || PROJECT_ICONS[3]
            return (
              <div key={project.id} className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-6 flex gap-5">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${visual.color}`}>
                  {visual.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{project.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md border border-border font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
