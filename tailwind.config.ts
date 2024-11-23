import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      // padding: '2rem',
      screens: {
        // '2xl': '1280px'
      }
    },
    extend: {
      boxShadow: {
        'custom-blue': '0px 2px 10px 0px #29CED266'
      },
      backgroundImage: {
        'span-bg': 'var(--span-bg)',
        'avatar-gradient':
          'linear-gradient(97.77deg, #FEEEBE 0.6%, #FFEAEA 97.56%)'
      },
      colors: {
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)'
        },
        'button-secondary': 'var(--button-secondary)',
        'button-text': 'var(--button-text)',
        'text-secondary': 'var(--text-secondary)',
        'background-secondary': 'var(--background-secondary)',
        secondary: 'var(--secondary)',
        info: 'var(--info)',
        error: 'var(--error)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        white: 'var(--white)',
        button: 'var(--button)',
        selected: 'var(--selected)',
        dropdown: 'var(--dropdown)',
        dropdownHover: 'var(--dropdown-hover)',
        buttonSecondary: 'var(--button-secondary)',
        mainRed: 'var(--main-red)',
        mainRedLight: 'var(--main-red-light)',
        mainGreen: 'var(--main-green)',
        mainGreenLight: 'var(--main-green-light)',
        mainGreenGradient: 'var(--main-green-gradient)',
        contentPrimary: 'var(--content-primary)',
        contentSecondary: 'var(--content-secondary)',
        contentTertiary: 'var(--content-tertiary)',
        textDark: '#232427',
        softError: '#FDEEEC80',
        softSuccess: '#EAF9F580',
        'soft-secondary': 'var(--soft-secondary)',
        'soft-primary': 'var(--soft-primary)',
        'soft-error': '#FDEEEC80',
        'soft-success': '#EAF9F580'
      },

      fontFamily: {
        sans: ['var(--inter)']
        // serif: ['var(--magnet-trial)']
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
  daisyui: {
    themes: ['light']
  }
} satisfies Config

export default config
