'use client'

import { motion } from 'motion/react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

interface FloatingCardProps {
  label: string
  icon: LucideIcon
  className?: string
  style?: CSSProperties
  delay?: number
  rotate?: number
  yOffset?: number
  size?: 'medium' | 'large'
}

const sizeConfig = {
  medium: {
    pill: 'px-7 py-[16px] gap-3',
    icon: 'p-2 w-10 h-10',
    iconSvg: 'w-5 h-5',
    text: 'text-lg',
  },
  large: {
    pill: 'px-8 py-[18px] gap-4',
    icon: 'p-2.5 w-11 h-11',
    iconSvg: 'w-[22px] h-[22px]',
    text: 'text-xl',
  },
}

export function FloatingCard({
  label,
  icon: Icon,
  className,
  style,
  delay = 0,
  rotate = 0,
  yOffset = 8,
  size = 'medium',
}: FloatingCardProps) {
  const s = sizeConfig[size]

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: rotate - 5 }}
      animate={{
        opacity: 1,
        y: [0, -yOffset, 0],
        rotate: rotate,
      }}
      transition={{
        opacity: { duration: 1, delay, ease: 'easeOut' },
        y: {
          duration: 6 + Math.random() * 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.6,
        },
        rotate: { duration: 1, delay, ease: 'easeOut' },
      }}
      whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
      style={style}
      className={cn(
        'absolute rounded-full flex items-center cursor-pointer will-change-transform',
        s.pill,
        className
      )}
    >
      {/* Icon bubble */}
      <div className={cn('bg-white/20 rounded-full shrink-0 flex items-center justify-center', s.icon)}>
        <Icon className={s.iconSvg} strokeWidth={2.2} />
      </div>
      <span className={cn('font-semibold tracking-tight whitespace-nowrap', s.text)}>{label}</span>
    </motion.div>
  )
}
