module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "poppins-semibold": ['Poppins-semibold', 'sans-serif']
      },
      keyframes: {
        fadeInTop: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-1.5rem)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-1.5rem)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn',
        fadeInLeft: 'fadeInLeft',
        fadeInTop: 'fadeInTop',
      }
    },
  },
  plugins: [],
}
