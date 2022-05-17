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
        fadeIn: 'fadeInLeft 1s ease-in-out',
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
