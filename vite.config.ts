import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({

  base: "/Seguridad/",

  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@apis': path.resolve(__dirname, './src/apis'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@controllers': path.resolve(__dirname, './src/controllers'),
      '@data': path.resolve(__dirname, './src/data'),
      '@libs': path.resolve(__dirname, './src/libs'),
      '@models': path.resolve(__dirname, './src/models'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@services': path.resolve(__dirname, './src/services'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@templates': path.resolve(__dirname, './src/templates'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@views': path.resolve(__dirname, './src/views'),
      buffer: "buffer/",
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  },
})
