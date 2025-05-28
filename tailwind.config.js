/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['10px', '16px'],
        'sm': ['12px', '18px'],
        'base': ['14px', '22px'],
        'lg': ['16px', '26px'],
        'xl': ['18px', '28px'],
        '2xl': ['20px', '30px'],
        '3xl': ['24px', '34px'],
        '4xl': ['28px', '38px'],
        '5xl': ['32px', '40px'],
        '6xl': ['36px', '44px'],
        '7xl': ['48px', '56px'],
        '8xl': ['64px', '72px'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      letterSpacing: {
        'widest': '0.3em',
      },
      lineHeight: {
        'loose': '1.8',
        'relaxed': '1.6',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      backdropBlur: {
        'custom': 'blur(20px)',
      },
    },
  },
  plugins: []
}
