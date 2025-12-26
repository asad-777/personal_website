/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto'],
        serif: ["Merriweather", 'Georgia', 'serif']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#0ea5a4',
          'primary-content': '#ffffff',
          secondary: '#7c3aed',
          accent: '#f97316',
          neutral: '#0f172a',
          'base-100': '#0b1220',
          info: '#38bdf8',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444'
        }
      },
      'dark',
      'cupcake'
    ],
    darkTheme: 'dark'
  }
}
