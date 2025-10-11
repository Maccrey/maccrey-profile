'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug logging
  useEffect(() => {
    if (mounted) {
      console.log('Theme state:', { theme, resolvedTheme });
      console.log('HTML class:', document.documentElement.className);
    }
  }, [theme, resolvedTheme, mounted]);

  if (!mounted) {
    return (
      <div className="relative inline-block w-14 h-7 bg-gray-300 rounded-full">
        <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full"></div>
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    console.log('Switching to:', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex items-center h-7 rounded-full w-14 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isDark ? 'bg-blue-600' : 'bg-gray-300'
      }`}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
    >
      <span
        className={`inline-block w-6 h-6 transform transition-transform duration-300 bg-white rounded-full shadow-lg flex items-center justify-center ${
          isDark ? 'translate-x-7' : 'translate-x-0.5'
        }`}
      >
        <span className="text-xs">
          {isDark ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  );
}
