import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import Unocss from "unocss/vite"
import presetUno from "@unocss/preset-uno"
import presetIcons from "@unocss/preset-icons"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno(), presetIcons()],
      theme: {
        colors: {
          leetcode: "#ffa116",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
