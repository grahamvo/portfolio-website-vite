import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from "path";

const __dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: "assets", replacement: resolve(__dirname, "src/assets")},
      {find: "styles", replacement: resolve(__dirname, "src/styles/")},
      {find: "components", replacement: resolve(__dirname, "src/components/")},
    ]
  }
})
