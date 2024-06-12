/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['"League Spartan"', 'sans-serif'],
      },
      colors: {
        "primary": "hsl(var(--primary) / <alpha-value>)",
        "surface": "hsl(var(--surface) / <alpha-value>)",
        "background": "hsl(var(--background) / <alpha-value>)",
        "Dark-Grayish-Cyan": "hsl(var(--Dark-Grayish-Cyan) / <alpha-value>)",
        "Very-Dark-Grayish-Cyan": "hsl(var(--Very-Dark-Grayish-Cyan) / <alpha-value>)",
      },
      backgroundImage: {
        "mobile": "url('/images/bg-header-mobile.svg')",
        "desktop": "url('images/bg-header-desktop.svg')"
      },
    },
  },
  plugins: [],
}

