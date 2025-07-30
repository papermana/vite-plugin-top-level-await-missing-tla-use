import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig(() => {
  return {
    build: {
      sourcemap: false,
      minify: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("vite/modulepreload-polyfill.js")) {
              return "__viteHelpers";
            }
            if (id.includes("vite/preload-helper.js")) {
              return "__viteHelpers";
            }
            if (id.includes("moduleA")) return "moduleA";
            if (id.includes("moduleB")) return "moduleB";
            if (id.includes("moduleC")) return "moduleC";
            return undefined;
          },
        },
      },
    },
    plugins: [
      topLevelAwait({
        promiseExportName: "__tla",
        promiseImportName: (i) => `__tla_${i}`,
      }),
    ],
  };
});
