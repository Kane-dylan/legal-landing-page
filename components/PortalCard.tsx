'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { CSSProperties } from 'react'

interface PortalCardProps {
  className?: string
  style?: CSSProperties
  delay?: number
  rotate?: number
}

export function PortalCard({ className, style, delay = 0, rotate = 1 }: PortalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotate - 4 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -5, 0],
        rotate: rotate,
      }}
      transition={{
        opacity: { duration: 0.9, delay, ease: 'easeOut' },
        scale: { duration: 0.9, delay, ease: 'easeOut' },
        rotate: { duration: 0.9, delay, ease: 'easeOut' },
        y: {
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.9,
        },
      }}
      whileHover={{ scale: 1.025, transition: { duration: 0.3 } }}
      style={style}
      className={cn(
        'absolute bg-[#f0edfa] dark:bg-[#1a1a2e] border border-[#ddd8f0] dark:border-purple-900/40 rounded-2xl shadow-lg shadow-black/[0.06] dark:shadow-none cursor-pointer min-w-[290px] will-change-transform overflow-hidden transition-colors duration-500',
        className
      )}
    >
      {/* Orange left accent bar */}
      <div className="absolute left-0 top-5 bottom-5 w-[3px] bg-[#f5922e] rounded-r-full" />

      <div className="px-5 py-5 pl-6">
        {/* Header row */}
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white/70 shadow-sm">
            <Image
              src="https://picsum.photos/seed/legalportal/150/150"
              alt="John Doe Avatar"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold text-[#1c1f3d] dark:text-slate-200 leading-tight">
              John Doe – Portal
            </div>
            <div className="text-[10px] text-[#9a9ec0] dark:text-slate-500 mt-0.5 font-medium">
              MAT-2233 · 2 h ago
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-[12px] text-[#6b6f8e] dark:text-slate-400 leading-[1.6]">
          Hey! Could you please review a document for me?
          I need it completed by Friday.
        </p>
      </div>
    </motion.div>
  )
}
