import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
 

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Netflix App',
        short_name: 'Netflix',
        description: 'A simple e-commerce shopping app built with React and Vite',
        theme_color: 'black',
        background_color: 'red',
        display: 'standalone',
        icons: [
          {
            src: '/icon_192x192.png', // fixed file extension
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/netflix-iota-orcin\.vercel\.app/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 24 hours
              },
            },
          },
        ],
      },
    }),
  ],
});
