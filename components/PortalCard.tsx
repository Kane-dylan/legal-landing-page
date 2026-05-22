'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PortalCardProps {
  className?: string
  delay?: number
  rotate?: number
}

export function PortalCard({ className, delay = 0, rotate = 3 }: PortalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotate - 8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -6, 0],
        rotate: rotate
      }}
      transition={{
        opacity: { duration: 0.8, delay, ease: "easeOut" },
        scale: { duration: 0.8, delay, ease: "easeOut" },
        rotate: { duration: 0.8, delay, ease: "easeOut" },
        y: {
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.8
        }
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      className={cn(
        "absolute bg-[#F0EDFF] dark:bg-[#1a1a2e] border border-purple-200 dark:border-purple-900/50 rounded-3xl p-6 md:p-6 shadow-2xl cursor-pointer min-w-[280px] md:min-w-[320px] will-change-transform dark:shadow-none overflow-hidden transition-colors duration-500 ease-in-out",
        className
      )}
    >
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-orange-500 rounded-r-full" />
      
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white/20">
          <Image 
            src="https://picsum.photos/seed/legalportal/150/150" 
            alt="John Doe Avatar" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div>
          <div className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors duration-500 ease-in-out">John Doe</div>
          <div className="text-[10px] text-purple-500 dark:text-purple-400 font-semibold uppercase tracking-wider mt-0.5 transition-colors duration-500 ease-in-out">John Doe - Portal</div>
        </div>
        
        <div className="ml-auto text-[10px] text-slate-400 dark:text-slate-500 font-medium transition-colors duration-500 ease-in-out">MAT-2233 - 2 h ago</div>
      </div>
      
      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-1 transition-colors duration-500 ease-in-out">
        Hey! Could you please review a document for me?
      </p>
    </motion.div>
  )
}
