import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { PROJECT_NAME } from "./src/Helpers/constants";

export default defineConfig(({ command }) => {
  const base = command === "serve" ? "/" : `/${PROJECT_NAME}/`;
  return {
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    base,
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
    server: {
      open: true,
      port: 3000,
    },
    build: {
      outDir: "build",
    },
  };
});
