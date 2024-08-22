/** @type {import('tailwindcss').Config} */
import react from '@vitejs/plugin-react-swc'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin:true,
      }
    }
  }

}
