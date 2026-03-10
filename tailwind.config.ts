import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      colors: {
        // Backgrounds
        bg: {
          primary: "rgb(var(--bg-primary) / <alpha-value>)",
          section: "rgb(var(--bg-section-alt) / <alpha-value>)",
          surface: "rgb(var(--bg-surface) / <alpha-value>)",
        },

        // Text
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
        },

        // Lines
        line: {
          subtle: "rgb(var(--border-subtle) / <alpha-value>)",
          divider: "rgb(var(--divider) / <alpha-value>)",
        },

        // Brand
        brand: {
          primary: "rgb(var(--primary) / <alpha-value>)",
          primaryHover: "rgb(var(--primary-hover) / <alpha-value>)",
          primarySubtle: "rgb(var(--primary-subtle) / <alpha-value>)",
          secondary: "rgb(var(--secondary) / <alpha-value>)",
          secondaryHover: "rgb(var(--secondary-hover) / <alpha-value>)",
        },

        // Semantic
        semantic: {
          success: "rgb(var(--success) / <alpha-value>)",
          successSubtle: "rgb(var(--success-subtle) / <alpha-value>)",
          warning: "rgb(var(--warning) / <alpha-value>)",
          warningSubtle: "rgb(var(--warning-subtle) / <alpha-value>)",
          error: "rgb(var(--error) / <alpha-value>)",
          errorSubtle: "rgb(var(--error-subtle) / <alpha-value>)",
          info: "rgb(var(--info) / <alpha-value>)",
          infoSubtle: "rgb(var(--info-subtle) / <alpha-value>)",
        },
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      transitionDuration: {
        150: "150ms",
        200: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;