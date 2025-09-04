'use client'

import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative inline-flex h-8 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-accent-500"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <div
        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-200 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      <div className="flex items-center justify-between w-full px-2">
        <span className="text-xs">☀️</span>
        <span className="text-xs">🌙</span>
      </div>
    </button>
  )
}