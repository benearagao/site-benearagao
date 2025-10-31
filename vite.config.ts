import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Aliases para assets do Figma
      'figma:asset/b5cb85a71aa9f64b1dd50b1eabcd6443c311cca6.png': path.resolve(__dirname, './src/assets/b5cb85a71aa9f64b1dd50b1eabcd6443c311cca6.png'),
      'figma:asset/a4476ec81f4ad002acef43832563a5d86d1bce0e.png': path.resolve(__dirname, './src/assets/a4476ec81f4ad002acef43832563a5d86d1bce0e.png'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
