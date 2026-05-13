import { defineConfig } from "vite";

// Repo is served at https://deshpanderitwik.github.io/worldline/ so the
// production base path needs the repo name. Local dev stays at "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/worldline/" : "/",
  server: { port: 5174, strictPort: true },
}));
