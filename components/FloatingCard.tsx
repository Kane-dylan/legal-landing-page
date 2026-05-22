'use client'

import { motion } from 'motion/react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FloatingCardProps {
  label: string
  icon: LucideIcon
  className?: string
  delay?: number
  rotate?: number
  yOffset?: number
}

export function FloatingCard({ label, icon: Icon, className, delay = 0, rotate = 0, yOffset = 10 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 6 }}
      animate={{
        opacity: 1,
        y: [0, -yOffset, 0],
        rotate: rotate,
      }}
      transition={{
        opacity: { duration: 0.9, delay, ease: 'easeOut' },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.5,
        },
        rotate: { duration: 0.9, delay, ease: 'easeOut' },
      }}
      whileHover={{ scale: 1.05, rotate: rotate + 2, transition: { duration: 0.25 } }}
      className={cn(
        'absolute rounded-full px-8 py-[18px] flex items-center gap-4 cursor-pointer will-change-transform shadow-xl',
        className
      )}
    >
      {/* Icon bubble */}
      <div className="p-2.5 bg-white/20 rounded-full shrink-0 flex items-center justify-center">
        <Icon className="w-6 h-6" strokeWidth={2.2} />
      </div>
      <span className="text-xl font-semibold tracking-tight whitespace-nowrap">{label}</span>
    </motion.div>
  )
}
