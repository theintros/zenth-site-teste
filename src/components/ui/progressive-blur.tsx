"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ProgressiveBlurProps {
  className?: string
  direction?: "left" | "right" | "top" | "bottom"
  blurIntensity?: number
}

export function ProgressiveBlur({
  className,
  direction = "right",
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const gradients = {
    left: "to right",
    right: "to left",
    top: "to bottom",
    bottom: "to top",
  }

  return (
    <div
      className={cn("absolute z-10", className)}
      style={{
        background: `linear-gradient(${gradients[direction]}, hsl(var(--background)) 0%, transparent 100%)`,
        backdropFilter: `blur(${blurIntensity * 8}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity * 8}px)`,
      }}
    />
  )
}

