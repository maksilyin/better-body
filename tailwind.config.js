/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xl': '1780px',
      'lg': '1280px',
      'md': '992px',
      'sm': '768px',
      'xs': '560px',
    },
    container: {
      'center': true,
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      md: ['18px', '29px'],
      'md-2': ['18px', '19px'],
      title: ['80px', '86px'],
      "title-md": ['36px', '39px'],
      h3: ['40px', '43px'],
      p: ['20px', '25px'],
      'p-sm': ['12px', '15px'],
      'p-md': ['14px', '17px'],
      'sm-title': ['24px', '26px'],
      button: ['22px', '27px'],
      30: ['30px', '32px'],
      'card-title': ['30px', '32px']
    },

    extend: {
      colors: {
        pink: {
          DEFAULT: '#FF79D1',
          100: '#FFD7F1',
          200: '#FFD7F4',
          300: '#FFABE2',
        },
        black: {
          DEFAULT: '#222222',
          original: '#000000',
          lt: '#313849',
          'opacity-30': 'rgba(34, 34, 34, 0.3)'
        },
        gray: {
          400: '#B3B3B3',
          500: '#D2D2D0',
          600: '#B1B0AD'
        }
      },
      stroke: {
        black: {
            DEFAULT: '#222222',
        },
        pink: {
          DEFAULT: '#FF79D1',
          100: '#FFD7F1',
        }
      },
      opacity: {
        60: 0.6
      },
      fontFamily: {
        'body': ['"El Messiri"'],
        'p': ['"Gilroy"', 'sans-serif'],
      },
      lineHeight: {
        25: '25px',
      },
      width: {
        button: '434px',
      },
      height: {
        button: '90px'
      },
      borderRadius: {
        30: '30px',
        40: '40px',
      },
      backgroundImage: {
        mark: 'url(../public/images/icons/mark.svg)'
      }
    },
  },
  plugins: [],
}
