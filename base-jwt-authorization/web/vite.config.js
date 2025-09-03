import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  // Cho phép Vite sử dụng được process.env, mặc định dùng import.meta.env
  // https://github.com/vitejs/vite/issues/1973
  define: {
    "process.env": process.env,
  },
  plugins: [react(), svgr()],
  // base: './'
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
});
