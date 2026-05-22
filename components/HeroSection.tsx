'use client'

import Image from 'next/image'
import { FloatingCard } from './FloatingCard'
import { PortalCard } from './PortalCard'
import { Receipt, Gavel, ListTodo, FileText } from 'lucide-react'
import { motion } from 'motion/react'

function BackgroundPills() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

      {/* ─── LEFT SIDE: 3 pills, heavily cropped by left viewport edge ─── */}

      {/* Left 1 — upper-left, ~50% visible */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.1, ease: 'easeOut' }}
        className="absolute rounded-full bg-[#cacde2]/40 dark:bg-[#2a2d4a]/35"
        style={{ top: '15%', left: -150, width: 310, height: 88 }}
      />

      {/* Left 2 — mid-left, ~70% hidden (only tip visible) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.25, ease: 'easeOut' }}
        className="absolute rounded-full bg-[#cacde2]/40 dark:bg-[#2a2d4a]/35"
        style={{ top: '48%', left: -210, width: 300, height: 82 }}
      />

      {/* Left 3 — bottom-left, ~55% hidden */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
        className="absolute rounded-full bg-[#cacde2]/40 dark:bg-[#2a2d4a]/35"
        style={{ top: '84%', left: -165, width: 300, height: 85 }}
      />

      {/* ─── RIGHT SIDE: 3 stacked pills in upper-right ─── */}
      {/* These are evenly spaced, ~60% visible, cut off by right edge */}

      {/* Right 1 — top of stack */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.15, ease: 'easeOut' }}
        className="absolute rounded-full bg-[#cacde2]/40 dark:bg-[#2a2d4a]/35"
        style={{ top: '6%', right: -110, width: 320, height: 90 }}
      />

      {/* Right 2 — middle of stack */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.28, ease: 'easeOut' }}
        className="absolute rounded-full bg-[#cacde2]/40 dark:bg-[#2a2d4a]/35"
        style={{ top: '16%', right: -130, width: 310, height: 85 }}
      />

      {/* Right 3 — bottom of stack */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.41, ease: 'easeOut' }}
        className="absolute rounded-full bg-[#cacde2]/40 dark:bg-[#2a2d4a]/35"
        style={{ top: '26%', right: -95, width: 290, height: 85 }}
      />

      {/* Right 4 — isolated, bottom-right area */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
        className="absolute rounded-full bg-[#cacde2]/40 dark:bg-[#2a2d4a]/35"
        style={{ top: '80%', right: -130, width: 300, height: 82 }}
      />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#ededf3] dark:bg-[#0f0f13] flex items-center transition-colors duration-500">

      <BackgroundPills />

      {/* Ambient glow — very subtle */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[12%] right-[18%] w-[360px] h-[360px] bg-blue-100/15 dark:bg-blue-600/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[18%] left-[22%] w-[280px] h-[280px] bg-purple-100/10 dark:bg-purple-600/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-12 lg:px-20 grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-center relative z-10 w-full py-32 lg:py-0 min-h-[100svh]">

        {/* ── LEFT CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-20 lg:-mt-20"
        >


          {/* Heading — 3 lines exactly matching reference:
              Line 1: "A single platform to"
              Line 2: "manage every part of"
              Line 3: "your legal work"
          */}
          <h1 className="text-[36px] md:text-[46px] lg:text-[50px] leading-[1.2] tracking-[-0.01em] text-[#5a5f7e] dark:text-[#a8adc4] font-light transition-colors duration-500">
            A single platform to
            <br />
            <strong className="font-extrabold text-[#1c1f3d] dark:text-[#f0f2ff]">manage</strong>{' '}
            every part of
            <br />
            your{' '}
            <strong className="font-extrabold text-[#1c1f3d] dark:text-[#f0f2ff]">legal work</strong>
          </h1>

          <p className="mt-8 text-[12.5px] leading-[1.75] text-[#8a8ead] dark:text-slate-500 max-w-[290px] transition-colors duration-500">
            Track matters, coordinate schedules, manage
            clients, centralize documents, and handle
            communication – all in one system.
          </p>
        </motion.div>

        {/* ── RIGHT: Floating card composition ──
            Diagonal flow: Billing (top-right) → Matters (mid-left) + Portal (mid-right)
                          → Tasks (lower-left) + Documents (lower-right)

            Container ~580px wide × 600px tall.
            Cards are scattered with natural spacing, NOT in rows.
        ── */}
        <div className="relative h-[520px] lg:h-[600px] w-full">

          {/* 1. Billing — top-right, isolated, highest card
                 Large blue pill, strong clockwise rotation
                 Positioned far right with breathing room above */}
          <FloatingCard
            label="Billing"
            icon={Receipt}
            className="bg-[#4f5de4] text-white z-20 shadow-xl shadow-[#4f5de4]/20"
            style={{ top: 30, right: 0 }}
            rotate={10}
            delay={0.2}
            yOffset={6}
            size="large"
          />

          {/* 2. Matters — mid-left, counter-clockwise rotation
                 Orange pill, angled to point toward portal card
                 Gap of ~150px below Billing */}
          <FloatingCard
            label="Matters"
            icon={Gavel}
            className="bg-[#f5922e] text-white z-30 shadow-xl shadow-[#f5922e]/25"
            style={{ top: 210, left: 40 }}
            rotate={-10}
            delay={0.35}
            yOffset={5}
            size="medium"
          />

          {/* 3. Portal card — central anchor, right of Matters
                 Largest info card, slight rotation
                 Overlaps slightly below Matters vertically */}
          <PortalCard
            className="z-10"
            style={{ top: 230, left: 250 }}
            delay={0.5}
            rotate={1}
          />

          {/* 4. Tasks — lower-left, nearly horizontal
                 Dark navy small pill
                 Clear gap below Portal (~100px) */}
          <FloatingCard
            label="Tasks"
            icon={ListTodo}
            className="bg-[#1e2050] text-[#f5922e] z-40 shadow-xl shadow-black/15"
            style={{ top: 420, left: 70 }}
            rotate={0}
            delay={0.65}
            yOffset={4}
            size="medium"
          />

          {/* 5. Documents — bottom-right, longest pill
                 Dark navy, wider than Tasks, slight rotation
                 Right of Tasks with overlap in y-axis */}
          <FloatingCard
            label="Documents"
            icon={FileText}
            className="bg-[#1e2050] text-[#f5922e] z-30 shadow-xl shadow-black/15"
            style={{ top: 400, left: 290 }}
            rotate={5}
            delay={0.8}
            yOffset={5}
            size="large"
          />

        </div>
      </div>
    </section>
  )
}
