'use client'

import { FloatingCard } from './FloatingCard'
import { PortalCard } from './PortalCard'
import { Receipt, Gavel, ListTodo, FileText } from 'lucide-react'
import { motion } from 'motion/react'

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#f4f4f6] dark:bg-[#0f0f13] flex items-center justify-center pt-24 pb-12 lg:py-0 transition-colors duration-500">
      {/* Background Blobs/Shapes */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1800px] h-full relative">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-600/20 blur-[120px] rounded-full transition-colors duration-500 ease-in-out" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-200/20 dark:bg-purple-600/10 blur-[100px] rounded-full transition-colors duration-500 ease-in-out" />
          <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-orange-100/20 dark:bg-orange-600/10 blur-[80px] rounded-full transition-colors duration-500 ease-in-out" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center relative z-10 w-full h-full">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[650px] relative z-20 pt-10 lg:pt-0"
        >
          <h1 className="text-[44px] md:text-[72px] leading-[1.12] font-extralight tracking-tight text-[#141416] dark:text-[#f4f4f6] transition-colors duration-500 ease-in-out">
            A single platform to <br className="hidden md:block" />
            <strong className="font-bold tracking-normal">manage</strong> every part of <br className="hidden md:block" />
            your <strong className="font-bold tracking-normal">legal work</strong>
          </h1>
          <p className="mt-8 text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-[480px] transition-colors duration-500 ease-in-out">
            Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
          </p>
        </motion.div>

        {/* Right Content - Floating Cards Area */}
        <div className="relative h-[600px] lg:h-[800px] w-full mt-8 lg:mt-0 lg:ml-10">
          
          <FloatingCard 
            label="Billing"
            icon={Receipt}
            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white top-[5%] lg:top-[12%] right-[5%] lg:right-[10%] z-20 shadow-blue-500/20 dark:shadow-none"
            rotate={10}
            delay={0.1}
            yOffset={12}
          />

          <FloatingCard 
            label="Matters"
            icon={Gavel}
            className="bg-orange-500 text-white bottom-[35%] lg:bottom-[25%] left-[5%] lg:left-[12%] z-30 shadow-orange-500/30 dark:shadow-none"
            rotate={-10}
            delay={0.3}
            yOffset={8}
          />

          <PortalCard 
            className="top-[45%] lg:top-[48%] right-[5%] lg:right-[15%] z-10"
            delay={0.5}
            rotate={0}
          />

          <FloatingCard 
            label="Tasks"
            icon={ListTodo}
            className="bg-[#2D1B4D] text-white bottom-[15%] lg:bottom-[10%] right-[0%] lg:right-[5%] z-40 shadow-black/30 dark:shadow-none"
            rotate={0}
            delay={0.7}
            yOffset={6}
          />

          <FloatingCard 
            label="Documents"
            icon={FileText}
            className="bg-[#3F2B6B] text-white top-[25%] lg:top-[28%] left-[0%] lg:left-[5%] z-30 shadow-black/20 dark:shadow-none"
            rotate={-8}
            delay={0.9}
            yOffset={10}
          />

        </div>
      </div>
    </section>
  )
}
