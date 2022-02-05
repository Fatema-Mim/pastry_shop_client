module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Lora', 'Merriweather', 'Noto Serif', 'Poppins', 'Roboto Condensed'],
      },
      backgroundImage: {
        'banner1': "url('/src/image/banner1.jpg')",
        'banner2': "url('/src/image/banner2.jpg')",
        'banner3': "url('/src/image/banner3.jpg')",
        'banner4': "url('/src/image/banner4.png')",
      }
    },
  },
  plugins: [require('tailwindcss-rtl')],
}
