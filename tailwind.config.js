/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "title": ["Fredoka One", 'sans-serif'],
        "body": ['Poppins', 'serif']
      },
      backgroundImage: {
        'main-bg': "url('/school-bg.jpg')"
      }
    },
  },
  plugins: [],
}
