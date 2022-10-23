import { defineConfig } from "cypress";

export default defineConfig({
  video: false,

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
