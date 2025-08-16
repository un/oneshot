import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk color palette
        cyber: {
          // Neon greens
          green: {
            50: '#e6fff0',
            100: '#b3ffcc',
            200: '#80ff99',
            300: '#4dff66',
            400: '#1aff33',
            500: '#00ff00', // Pure neon green
            600: '#00e600',
            700: '#00cc00',
            800: '#00b300',
            900: '#009900',
            950: '#006600',
          },
          // Electric oranges
          orange: {
            50: '#fff4e6',
            100: '#ffe0b3',
            200: '#ffcc80',
            300: '#ffb84d',
            400: '#ffa41a',
            500: '#ff9000', // Main orange
            600: '#ff7c00',
            700: '#ff6800',
            800: '#ff5400',
            900: '#ff4000',
            950: '#cc3300',
          },
          // Cyan accents
          cyan: {
            50: '#e6ffff',
            100: '#b3ffff',
            200: '#80ffff',
            300: '#4dffff',
            400: '#1affff',
            500: '#00ffff', // Pure cyan
            600: '#00e6e6',
            700: '#00cccc',
            800: '#00b3b3',
            900: '#009999',
            950: '#006666',
          },
          // Dark backgrounds
          dark: {
            50: '#1a1a1f',
            100: '#18181b',
            200: '#151517',
            300: '#121214',
            400: '#0f0f11',
            500: '#0c0c0e',
            600: '#09090b',
            700: '#060608',
            800: '#030305',
            900: '#000000',
          },
        },
        // Override default colors for consistency
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'neon-flicker': 'neon-flicker 2s infinite alternate',
        'cyber-scan': 'cyber-scan 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 3px currentColor) drop-shadow(0 0 10px currentColor)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'drop-shadow(0 0 6px currentColor) drop-shadow(0 0 20px currentColor)',
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            filter: 'drop-shadow(0 0 4px currentColor) drop-shadow(0 0 10px currentColor)',
          },
          '20%, 24%, 55%': {
            filter: 'none',
          },
        },
        'cyber-scan': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'cyber-grid': `linear-gradient(to right, #00ff0010 1px, transparent 1px),
                       linear-gradient(to bottom, #00ff0010 1px, transparent 1px)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;