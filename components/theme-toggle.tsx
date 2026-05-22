"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@wrksz/themes/client"
import { motion } from "motion/react"

export function ThemeToggle({ inline = false }: { inline?: boolean }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={inline ? "w-9 h-9" : "fixed top-4 right-4 md:top-6 md:right-6 z-50 w-12 h-12"} />
  }

  const isDark = resolvedTheme === "dark"

  const positionClass = inline
    ? "relative w-9 h-9 rounded-xl"
    : "fixed top-4 right-4 md:top-6 md:right-6 z-50 w-12 h-12 rounded-full"

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`${positionClass} flex items-center justify-center backdrop-blur-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm`}
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0.5,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-slate-200"
        >
          <Moon className="w-5 h-5" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: !isDark ? 1 : 0.5,
            opacity: !isDark ? 1 : 0,
            rotate: !isDark ? 0 : 90,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-slate-800"
        >
          <Sun className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.button>
  )
}
