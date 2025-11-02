import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
    plugins: [checker({
        typescript: true
    })],
    worker: {},
    build: {
        sourcemap: false,
    },
    server: {
        open: true,
        port: 3000,
        host: "localhost",
    },
})