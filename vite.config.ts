import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const plugins = [react(), tailwindcss(), jsxLocPlugin()];
const rootDir = process.cwd();

export default defineConfig({
  plugins,
  base: "/",
  resolve: {
    alias: {
      "@": path.join(rootDir, "client", "src"),
      "@shared": path.join(rootDir, "shared"),
      "@assets": path.join(rootDir, "attached_assets"),
    },
  },
  root: path.join(rootDir, "client"),
  build: {
    outDir: path.join(rootDir, "dist", "public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

