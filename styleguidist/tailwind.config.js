module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        content: ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
