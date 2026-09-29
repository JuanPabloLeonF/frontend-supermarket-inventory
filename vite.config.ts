import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";


export default defineConfig({
  plugins: [
    react(), 
    babel({ presets: [reactCompilerPreset()] }),
    ViteImageOptimizer({
      jpg: {
        quality: 80
      },
      jpeg: {
        quality: 80
      },
      png: {
        quality: 80
      },
      avif: {
        quality: 80
      },
      webp: {
        quality: 75
      }
    })
  ],
  base: "/frontend-supermarket-inventory/",
});
