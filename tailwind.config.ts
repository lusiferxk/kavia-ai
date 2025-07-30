// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/buildexportcomponent/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      borderRadius: {
        'custom-sm': '0.25rem',
  			'custom-md': '0.375rem',
  			'custom-lg': '0.5rem',
  			'custom-xl': '1.125rem',
  			'custom-full': '9999px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
      },

      
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        slideOutLeft: 'slideOutLeft 0.5s ease-in-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-in-out forwards',
        slideOutRight: 'slideOutRight 0.5s ease-in-out forwards',
        slideInRight: 'slideInRight 0.5s ease-in-out forwards',
        slideCenterFromRight: 'slideCenterFromRight 0.5s ease-out forwards',
        slideCenterFromLeft: 'slideCenterFromLeft 0.5s ease-out forwards',
        'gradient-rotation': 'gradient-rotation 5s linear infinite',
        'gradient-rotation-disabled': 'gradient-rotation 1s linear infinite',
      },
      keyframes: {
        'gradient-rotation': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translate3d(0, 144.14px, 0) rotate(-10deg)', opacity: '0.5' },
          '100%': { transform: 'translate3d(-100%, 144.14px, 0) rotate(-10deg)', opacity: '0' }
        },
        slideInLeft: {
          '0%': { transform: 'translate3d(100%, 144.14px, 0) rotate(-10deg)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 144.14px, 0) rotate(-10deg)', opacity: '0.5' }
        },
        slideOutRight: {
          '0%': { transform: 'translate3d(0, 8.30px, 0) rotate(10deg)', opacity: '0.5' },
          '100%': { transform: 'translate3d(100%, 8.30px, 0) rotate(10deg)', opacity: '0' }
        },
        slideInRight: {
          '0%': { transform: 'translate3d(-100%, 8.30px, 0) rotate(10deg)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 8.30px, 0) rotate(10deg)', opacity: '0.5' }
        },
        slideCenterFromRight: {
          '0%': { transform: 'translate3d(50%, 0, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' }
        },
        slideCenterFromLeft: {
          '0%': { transform: 'translate3d(-50%, 0, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 0deg, #231f20, #fb923c, #231f20, #231f20)',
        'conic-gradient-light': 'conic-gradient(from 0deg, #f3f4f6, #fb923c, #f3f4f6, #f3f4f6)',
      },
    },
  },
  plugins: [],
}

export default config