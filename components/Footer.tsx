'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Mail, Share2, Link2, Globe, ArrowRight, Scale } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Matters', href: '#matters' },
    { label: 'Billing', href: '#billing' },
    { label: 'Tasks', href: '#tasks' },
    { label: 'Documents', href: '#documents' },
    { label: 'Scheduling', href: '#scheduling' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Security', href: '#security' },
  ],
}

const socials = [
  { icon: Share2, label: 'Share', href: '#' },
  { icon: Link2, label: 'LinkedIn', href: '#' },
  { icon: Globe, label: 'Website', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@lexos.com' },
]

export function Footer() {
  return (
    <footer className="relative bg-[#f4f4f6] dark:bg-[#0f0f13] border-t border-black/8 dark:border-white/8 overflow-hidden transition-colors duration-500">

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-blue-200/20 dark:bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-purple-200/15 dark:bg-purple-600/8 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Newsletter strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-14 border-b border-black/8 dark:border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-xl font-semibold text-[#141416] dark:text-[#f4f4f6] tracking-tight transition-colors duration-300">
              Stay in the loop
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
              Get product updates, legal tech insights, and early access to new features.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="you@lawfirm.com"
              autoComplete="email"
              suppressHydrationWarning
              className="flex-1 md:w-64 px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#141416] dark:text-[#f4f4f6] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all duration-200"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141416] dark:bg-[#f4f4f6] text-white dark:text-[#141416] text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        {/* Main footer grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="py-14 grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10"
        >
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center group w-fit">
              <div className="relative w-28 h-12 overflow-hidden">
                <Image
                  src="/logo.webp"
                  alt="Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            </a>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[240px] transition-colors duration-300">
              The modern platform for law firms. Manage every part of your legal work in one place.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-[#141416] dark:hover:text-[#f4f4f6] hover:bg-black/5 dark:hover:bg-white/8 hover:border-black/20 dark:hover:border-white/20 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 transition-colors duration-300">
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#141416] dark:hover:text-[#f4f4f6] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-black/8 dark:border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 transition-colors duration-300">
            <Scale className="w-3.5 h-3.5" />
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 transition-colors duration-300">
            Built for legal professionals.
          </p>
        </div>

      </div>
    </footer>
  )
}
