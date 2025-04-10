import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
  server: {
    proxy: {
      '/palantir-api': {
        target: 'https://ehosier.usw-1-dev.palantirfoundry.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/palantir-api/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Don't proxy OAuth-related paths
            if (req.url?.includes('oauth2')) {
              res.writeHead(302, {
                'Location': `https://ehosier.usw-1-dev.palantirfoundry.com${req.url}`
              });
              res.end();
            }
          });
        }
      }
    }
  }
});
