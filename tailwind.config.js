module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        }
      },
      fontFamily: {
        'Montserrat': ['Montserrat'],
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0%',
          },
          to: {
            opacity: '100%',
          },
        }
      },
      animation: {
        fadeIn: 'fadeIn 200ms linear'
      },
    },
  },
  plugins: [],
}
