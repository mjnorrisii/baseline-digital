import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        book: path.resolve(__dirname, "public/book.html"),
        howItWorks: path.resolve(__dirname, "public/how-it-works.html"),
        useCases: path.resolve(__dirname, "public/use-cases.html"),
        process: path.resolve(__dirname, "public/process.html"),
      },
    },
  },
}));