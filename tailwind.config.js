/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#f9fafb',  // Light Gray for overall background
        card: '#ffffff',         // White for divs
        primary: '#3b82f6',      // Sky Blue for buttons
        secondary: '#1d4ed8',    // Darker Blue for hover effects or accents
        neutral: '#374151',       // Dark Gray for text
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite', // Reduced speed to 10s
      },
    },
  },
  plugins: [],
}
