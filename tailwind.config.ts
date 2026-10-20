module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        common: '#cbd5e1',
        uncommon: '#34d399',
        epic: '#60a5fa',
        legendary: '#fbbf24',
        ultimate: '#f472b6'
      }
    }
  },
  plugins: []
};
