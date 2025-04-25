import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

export default defineConfig({
  plugins: [react()],
  base: "/bernheimer/",
  server: {
    port: 3000,
  },
});
