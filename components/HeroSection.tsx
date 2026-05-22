'use client'

import Image from 'next/image'
import { FloatingCard } from './FloatingCard'
import { PortalCard } from './PortalCard'
import { Receipt, Gavel, ListTodo, FileText } from 'lucide-react'
import { motion } from 'motion/react'

// Left blobs: 3 asymmetric pills anchored to left edge
function LeftBlobs() {
  // Each blob: [height, width, negative-left-offset, top-percentage]
  const blobs = [
    { h: 72, w: 160, ml: -30, top: '12%' },  // shorter, medium, slightly off
    { h: 56, w: 120, ml: -55, top: '46%' },  // thinnest, most hidden
    { h: 88, w: 180, ml: -16, top: '72%' },  // tallest, widest, least hidden
  ]
  return (
    <div className="absolute inset-y-0 left-0 pointer-events-none overflow-hidden w-[200px]">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 + i * 0.18, ease: 'easeOut' }}
          style={{ top: b.top, height: b.h, width: b.w, marginLeft: b.ml }}
          className="absolute rounded-full bg-[#c2c5db]/55 dark:bg-[#2a2d4a]/60"
        />
      ))}
    </div>
  )
}

// Right blobs: 3 asymmetric pills anchored to right edge (different sizes/offsets from left)
function RightBlobs() {
  const blobs = [
    { h: 60, w: 170, mr: -40, top: '8%' },   // medium height, more hidden
    { h: 96, w: 200, mr: -20, top: '42%' },  // tallest, widest, least hidden
    { h: 68, w: 140, mr: -60, top: '70%' },  // medium, most hidden
  ]
  return (
    <div className="absolute inset-y-0 right-0 pointer-events-none overflow-hidden w-[220px]">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15 + i * 0.18, ease: 'easeOut' }}
          style={{ top: b.top, height: b.h, width: b.w, marginRight: b.mr, right: 0 }}
          className="absolute rounded-full bg-[#c2c5db]/55 dark:bg-[#2a2d4a]/60"
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#eef0f8] dark:bg-[#0f0f13] flex items-center justify-center transition-colors duration-500">

      <LeftBlobs />
      <RightBlobs />

      {/* Subtle gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-8%] right-[8%] w-[480px] h-[480px] bg-blue-200/20 dark:bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[5%] left-[8%] w-[320px] h-[320px] bg-purple-200/15 dark:bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-16 grid lg:grid-cols-[1fr_1.25fr] gap-10 items-center relative z-10 w-full py-28 lg:py-0 min-h-[100svh]">

        {/* ── Left: Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 w-10 h-10 relative"
          >
            <Image src="/logo.webp" alt="Logo" fill className="object-contain" sizes="40px" />
          </motion.div>

          <h1 className="text-[38px] md:text-[52px] leading-[1.15] tracking-tight text-[#4a4e6e] dark:text-[#b0b4cc] font-normal transition-colors duration-500">
            A single platform to{' '}
            <br className="hidden md:block" />
            <strong className="font-bold text-[#1a1d3d] dark:text-[#f0f2ff]">manage</strong>{' '}
            every part of
            <br className="hidden md:block" />
            your{' '}
            <strong className="font-bold text-[#1a1d3d] dark:text-[#f0f2ff]">legal work</strong>
          </h1>

          <p className="mt-6 text-[15px] text-[#7a7e9a] dark:text-slate-400 leading-relaxed max-w-[360px] transition-colors duration-500">
            Track matters, coordinate schedules, manage
            clients, centralize documents, and handle
            communication – all in one system.
          </p>
        </motion.div>

        {/* ── Right: Floating Cards ──
            Container: ~600px wide, 580px tall
            Card pill: ~220px wide × 64px tall
            PortalCard: ~280px wide × 100px tall

            Layout (no-overlap grid):
            Row 0  (top:30px):    Billing → right edge
            Row 1  (top:175px):   Matters → left edge
            Row 2  (top:230px):   PortalCard → right-center (x start ≥ 210px so clear of Matters)
            Row 3  (top:400px):   Tasks → left-center
            Row 4  (top:430px):   Documents → right edge (x start ≥ 340px so clear of Tasks)
        ── */}
        <div className="relative h-[560px] w-full">

          {/* 1 · Billing – top-right, blue */}
          <FloatingCard
            label="Billing"
            icon={Receipt}
            className="bg-[#4f5de4] text-white top-[30px] right-[10px] z-20 shadow-[#4f5de4]/30"
            rotate={7}
            delay={0.15}
            yOffset={9}
          />

          {/* 2 · Matters – mid-left, orange  (y:175-239 · x:10-230) */}
          <FloatingCard
            label="Matters"
            icon={Gavel}
            className="bg-[#f5922e] text-white top-[175px] left-[10px] z-30 shadow-[#f5922e]/30"
            rotate={-7}
            delay={0.3}
            yOffset={8}
          />

          {/* 3 · PortalCard – center-right  (y:230-330 · x:240-520) */}
          <PortalCard
            className="top-[230px] left-[240px] z-10"
            delay={0.45}
            rotate={2}
          />

          {/* 4 · Tasks – lower-left  (y:400-464 · x:30-250) */}
          <FloatingCard
            label="Tasks"
            icon={ListTodo}
            className="bg-[#1e2050] text-[#f5922e] top-[400px] left-[30px] z-40 shadow-black/25"
            rotate={0}
            delay={0.6}
            yOffset={7}
          />

          {/* 5 · Documents – lower-right  (y:415-479 · x:310-530) */}
          <FloatingCard
            label="Documents"
            icon={FileText}
            className="bg-[#1e2050] text-[#f5922e] top-[415px] left-[310px] z-30 shadow-black/25"
            rotate={5}
            delay={0.75}
            yOffset={10}
          />

        </div>
      </div>
    </section>
  )
}
