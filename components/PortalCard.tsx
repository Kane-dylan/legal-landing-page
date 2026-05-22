'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PortalCardProps {
  className?: string
  delay?: number
  rotate?: number
}

export function PortalCard({ className, delay = 0, rotate = 2 }: PortalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, rotate: rotate - 6 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
        rotate: rotate,
      }}
      transition={{
        opacity: { duration: 0.8, delay, ease: 'easeOut' },
        scale: { duration: 0.8, delay, ease: 'easeOut' },
        rotate: { duration: 0.8, delay, ease: 'easeOut' },
        y: {
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.8,
        },
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
      className={cn(
        'absolute bg-[#ebe8ff] dark:bg-[#1a1a2e] border border-[#d4ceff] dark:border-purple-900/50 rounded-2xl shadow-lg cursor-pointer min-w-[260px] will-change-transform overflow-hidden transition-colors duration-500',
        className
      )}
    >
      {/* Orange left accent bar */}
      <div className="absolute left-0 top-5 bottom-5 w-[3px] bg-[#f5922e] rounded-r-full" />

      <div className="px-5 py-4 pl-6">
        {/* Header row */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border-2 border-white/60 shadow-sm">
            <Image
              src="https://picsum.photos/seed/legalportal/150/150"
              alt="John Doe Avatar"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold text-[#1a1d3d] dark:text-slate-200 leading-tight">
              John Doe – Portal
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
              MAT-2233 · 2 h ago
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-[11px] text-[#6b6f8e] dark:text-slate-400 leading-relaxed">
          Hey! Could you please review a document for me?
          I need it completed by Friday.
        </p>
      </div>
    </motion.div>
  )
}
