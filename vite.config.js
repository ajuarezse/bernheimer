import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: command === "serve" ? "/" : "/bernheimer/",
    server: {
      port: 3000,
    },
  };
  return config;
});
