import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  // 파일 경로 지정
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
      data: path.resolve(__dirname, 'src/data'),
      common: path.resolve(__dirname, 'src/components/common'),
      layout: path.resolve(__dirname, 'src/components/layout'),
      sections: path.resolve(__dirname, 'src/components/sections'),
    },
  },
})
