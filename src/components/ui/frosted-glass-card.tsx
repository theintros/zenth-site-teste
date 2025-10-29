"use client";

import React, { useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FrostedGlassCardProps {
  children: ReactNode;
  className?: string;
}

export const FrostedGlassCard: React.FC<FrostedGlassCardProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = (x - centerX) / centerX * 8;
      const rotateX = (y - centerY) / centerY * -8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "frosted-glass-card relative glass-card rounded-2xl transition-all duration-300 ease-out",
        "before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-300",
        "before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(6,182,212,0.15),transparent_50%)]",
        "hover:before:opacity-100",
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

