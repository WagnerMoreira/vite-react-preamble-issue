import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import react from "@vitejs/plugin-react";
const path = require("path");
// import react from "@vitejs/plugin-react-swc"
export default defineConfig({
  plugins: [react(), RubyPlugin()],
  // plugins: [RubyPlugin()],
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__dirname, "app/frontend/entrypoints/components"),
      },
      {
        find: "layouts",
        replacement: path.resolve(__dirname, "app/frontend/entrypoints/layouts"),
      },
      {
        find: "theme",
        replacement: path.resolve(__dirname, "app/frontend/entrypoints/theme"),
      },
      {
        find: "contexts",
        replacement: path.resolve(__dirname, "app/frontend/entrypoints/contexts"),
      },
      {
        find: "views",
        replacement: path.resolve(__dirname, "app/frontend/entrypoints/views"),
      },
      {
        find: "variables",
        replacement: path.resolve(__dirname, "app/frontend/entrypoints/variables"),
      },
      {
        find: "assets",
        replacement: path.resolve(__dirname, "app/frontend/entrypoints/assets"),
      },
    ],
  },
  define: {
    global: "window",
  },
});
