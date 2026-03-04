"use client"
import { useReveal } from "@/hooks/use-reveal"

export function RevealWrapper({ children }: { children: React.ReactNode }) {
  useReveal()
  return <>{children}</>
}
