module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a192f',
        'secondary': '#112240',
        'accent': '#64ffda',
        'text-primary': '#e6f1ff',
        'text-secondary': '#8892b0'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(11) 1s 1 normal both',
        'cursor': 'cursor .75s step-end infinite',
        'gradient': 'gradient 8s ease infinite',
        'scan': 'scan 2s linear infinite',
        'glitch': 'glitch 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '11ch' }
        },
        cursor: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#64ffda' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        }
      }
    }
  },
  plugins: []
}