import vue from "@vitejs/plugin-vue";
import * as path from "path";
import icons from "unplugin-icons/vite";
import { fileURLToPath } from "url";
import vueDevTools from "vite-plugin-vue-devtools";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), icons({ compiler: "vue3" }), vueDevTools()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    include: ["**/*.spec.ts"],
  },
});
