module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: { 
        'sc': "url('/src/components/cover/sc.jpg')",
        'omf': "url('/src/components/cover/omf.jpg')",
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
