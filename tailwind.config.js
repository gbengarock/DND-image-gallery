/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('https://media.istockphoto.com/id/506435716/photo/camera-lens.webp?b=1&s=170667a&w=0&k=20&c=9Z9tz26PKeHiogzxjaKKVF1xK9ul2QVOc0e1h35Se8U=')"
      }
    },
  },
  plugins: [],
}