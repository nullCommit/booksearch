module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#F72572',
          700: '#DE2572',
          800: '#BD2572',
        },
        accent: {
          300: '#1F2936',
        },
        shadowText: {
          100: '#BBBBBB',
          300: '#7B8192',
        },
      },
      fontFamily: {
        body: ['Inter'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
