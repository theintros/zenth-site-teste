import React from "react";
import { ArrowRight } from "phosphor-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  initialText?: string;
  hoverText?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ initialText = "Agendar Reunião", hoverText = "Comece Sua Jornada", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105",
        className,
      )}
      {...props}
    >
      {/* Animated background blob - behind everything */}
      <div className="absolute left-[16%] top-[43%] h-2 w-2 scale-[1] rounded-full bg-white/80 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 z-0"></div>
      
      {/* Initial text - visible by default */}
      <span className="relative z-10 inline-block transition-all duration-300 group-hover:translate-x-3 group-hover:opacity-0 translate-x-1">
        {initialText}
      </span>
      
      {/* Hover text with arrow - appears on hover */}
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-full items-center justify-center gap-2 text-primary-foreground transition-all duration-300 group-hover:translate-x-0">
        <span>{hoverText}</span>
        <ArrowRight size={20} weight="bold" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

