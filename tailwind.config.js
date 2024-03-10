import ContainerQueries from "@tailwindcss/container-queries";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [ContainerQueries],
};
