"use client"
import { useEffect } from "react"

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            // once visible, stop observing so it never hides again
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
