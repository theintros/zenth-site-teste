'use client';
import { cn } from '@/lib/utils';
import { motion, Transition } from 'framer-motion';

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  };

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      <motion.div
        className={cn('absolute aspect-square', className)}
        style={{
          width: size,
          height: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          borderRadius: '50%', // Completamente redondo
          filter: 'blur(20px)', // Blur forte para suavizar
          boxShadow: `0 0 ${size * 0.8}px currentColor`, // Glow effect
          opacity: 0.8,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
      {/* Segunda camada para intensificar o efeito */}
      <motion.div
        className={cn('absolute aspect-square', className)}
        style={{
          width: size * 0.6,
          height: size * 0.6,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          borderRadius: '50%',
          filter: 'blur(10px)',
          boxShadow: `0 0 ${size * 0.5}px currentColor`,
          opacity: 1,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}

