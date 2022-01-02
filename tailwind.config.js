module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: { 
        '1': "url('/src/components/cover/1.jpg')",
        '2': "url('/src/components/cover/2.jpg')",
        '3': "url('/src/components/cover/3.jpg')",
        '4': "url('/src/components/cover/4.jpg')",
        '5': "url('/src/components/cover/5.jpg')",
      },
      width: {
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
