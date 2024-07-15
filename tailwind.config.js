export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'hsl(242, 48, 58)',
        'primary-light-color': 'hsl(243, 100, 82)',
        'secondary-color': 'hsl(0, 78, 63)',
        'secondary-light-color': 'hsl(0, 100, 80)',
        'dark-color-1': 'hsl(237, 100, 4)',
        'dark-color-2': 'hsl(235, 16, 15)',
        'dark-color-3': 'hsl(235, 12, 19)',
        'dark-color-4': 'hsl(236, 11, 27)',
        'dark-color-5': 'hsl(216, 15, 57)',
        'light-color-1': 'hsl(0, 0, 100)',
        'light-color-2': 'hsl(220, 69, 97)',
        'light-color-3': 'hsl(221, 69, 94)',
      }
    },
  },
  plugins: [],
}

