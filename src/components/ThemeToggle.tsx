'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  // Handle the case where theme is null during hydration
  const currentTheme = theme || 'light';
  const isHydrated = theme !== null;

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-300 dark:bg-slate-800 focus:outline-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
      disabled={!isHydrated} // Disable button until hydration is complete
    >
      {currentTheme === 'light' ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-slate-700 dark:text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      ) : (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </motion.svg>
      )}
    </motion.button>
  );
}