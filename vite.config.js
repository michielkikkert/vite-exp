import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    build: {
        rollupOptions: {
            output: {
                dir: 'dist',
                entryFileNames: 'growthbook.js',
                manualChunks: undefined,
            },
        },
    },
});