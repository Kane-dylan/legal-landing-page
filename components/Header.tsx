'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ThemeToggle } from './theme-toggle'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Matters', href: '#matters' },
  { label: 'Billing', href: '#billing' },
  { label: 'Pricing', href: '#pricing' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      {/* Glassmorphic bar */}
      <div className="mx-4 mt-4 rounded-2xl border border-black/8 dark:border-white/10 bg-[#eef0f8]/80 dark:bg-[#0f0f13]/70 backdrop-blur-xl shadow-md shadow-black/5 dark:shadow-black/30 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 group">
            <div className="relative w-24 h-10 overflow-hidden">
              <Image
                src="/logo.webp"
                alt="Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 80px, 96px"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#141416] dark:hover:text-[#f4f4f6] hover:bg-black/5 dark:hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle inline />
            <a
              href="#get-started"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141416] dark:bg-[#f4f4f6] text-white dark:text-[#141416] text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm"
            >
              Get started
            </a>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl text-slate-500 hover:bg-black/5 dark:hover:bg-white/8 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-black/8 dark:border-white/8 px-5 py-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#141416] dark:hover:text-[#f4f4f6] hover:bg-black/5 dark:hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="mt-2 px-4 py-2.5 rounded-xl bg-[#141416] dark:bg-[#f4f4f6] text-white dark:text-[#141416] text-sm font-semibold text-center hover:opacity-90 transition-all duration-200"
            >
              Get started
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
