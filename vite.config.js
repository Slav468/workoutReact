import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],
        additionalData: `
          @use "sass:math";
          @use "/src/style/_variables.scss" as *;
          @use "/src/style/_animations.scss" as *;
        `,
        sourceMap: true,
        quietDeps: true,
        api: 'modern-compiler',
      },
    },
  },
});
