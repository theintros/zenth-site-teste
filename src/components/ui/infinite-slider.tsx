"use client"

import React, { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface InfiniteSliderProps {
  children: ReactNode
  duration?: number
  gap?: number
  className?: string
  reverse?: boolean
}

export function InfiniteSlider({
  children,
  duration = 40,
  gap = 16,
  className,
  reverse = false,
}: InfiniteSliderProps) {
  return (
    <div
      className={cn("group relative flex overflow-hidden gap-[var(--gap)]", className)}
      style={
        {
          "--duration": `${duration}s`,
          "--gap": `${gap}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-[var(--gap)]",
          reverse ? "animate-infinite-slider-reverse" : "animate-infinite-slider"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-[var(--gap)]",
          reverse ? "animate-infinite-slider-reverse" : "animate-infinite-slider"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

