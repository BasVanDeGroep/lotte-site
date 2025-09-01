/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#ff00ee',
        primary: '#f64ab8',
        bg: '#C534DD',
      },
      aspectRatio: {
        '62/46': '62/46',
      },
      backgroundImage: {
        'gradient-card':
          'linear-gradient(163deg, rgba(158, 0, 122, 0.25) 16.94%, rgba(158, 0, 122, 0.14) 47.87%, rgba(255, 0, 196, 0.12) 54.45%, rgba(158, 0, 122, 0.10) 74.36%, rgba(158, 0, 122, 0.00) 88.26%)',
        'gradient-metal':
          'linear-gradient(119deg, #FF5EDB 12.69%, #FF63DC 20.78%, #F6A3E4 24.92%, #FF68DD 28.97%, #FF6FDF 40.12%, #F9F9F9 54.7%, #FF7EE2 76.6%, #FF93E7 94.99%), #03A9F4;',
        'gradient-social-card':
          'radial-gradient(27.22% 50% at 50% 50%, rgba(206, 113, 185, 0.20) 0%, rgba(78, 30, 67, 0.00) 100%), linear-gradient(180deg, #920072 0%, rgba(123, 18, 100, 0.85) 40.63%)',
        'gradient-card-hover':
          'linear-gradient(180deg, #16041E 0%, rgba(60, 0, 88, 0.85) 40.63%)',
        'gradient-loadout-cover':
          'linear-gradient(180deg, rgba(197, 52, 221, 0.00) 0%, #C534DD 100%)',
      },
      boxShadow: {
        glow: '0px 0px 32px 0px rgba(238, 135, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
