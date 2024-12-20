module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "poppins-semibold": ['Poppins-semibold', 'sans-serif'],
        "RubikDirt-Regular": ['Rubik Dirt', 'serif'],
        "Galindo-Regular": ['Galindo', 'sans-serif'],
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
      jello: {
        '11.1%': {
          transform: 'translate3d(0, 0, 0)',
        },
        '22.2%': {
          transform: 'skewX(-12.5deg) skewY(-12.5deg)',
        },
        '33.3%': {
          transform: 'skewX(6.25deg) skewY(6.25deg)',
        },
        '44.4%': {
          transform: 'skewX(-3.125deg) skewY(-3.125deg)',
        },
        '55.5%': {
          transform: 'skewX(1.5625deg) skewY(1.5625deg)',
        },
        '66.6%': {
          transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
        },
        '77.7%': {
          transform: 'skewX(0.390625deg) skewY(0.390625deg)',
        },
        '88.8%': {
          transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
        }
      },
      animation: {
        fadeIn: 'fadeIn',
        fadeInLeft: 'fadeInLeft',
        fadeInTop: 'fadeInTop',
        jello: 'jello',
      }
    },
  },
  plugins: [],
}
