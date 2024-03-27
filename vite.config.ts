import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { default as svgr, default as svgrPlugin } from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
    svgrPlugin({}),
  ],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
