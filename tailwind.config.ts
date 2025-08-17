import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        "neon-purple": "var(--neon-purple)",
        "hot-pink": "var(--hot-pink)",
        "electric-blue": "var(--electric-blue)",
        "deep-purple": "var(--deep-purple)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        anton: ["var(--font-anton)"],
        inter: ["var(--font-inter)"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "bounce-slow": "bounce 2s infinite",
        noise: "noise 0.2s infinite",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px var(--neon-purple)" },
          to: { boxShadow: "0 0 30px var(--neon-purple), 0 0 40px var(--neon-purple)" },
        },
        noise: {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5px, -5px)" },
          "20%": { transform: "translate(-10px, 5px)" },
          "30%": { transform: "translate(5px, -10px)" },
          "40%": { transform: "translate(-5px, 15px)" },
          "50%": { transform: "translate(-10px, 5px)" },
          "60%": { transform: "translate(15px, 0)" },
          "70%": { transform: "translate(0, 10px)" },
          "80%": { transform: "translate(-15px, 0)" },
          "90%": { transform: "translate(10px, 5px)" },
          "100%": { transform: "translate(5px, 0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
