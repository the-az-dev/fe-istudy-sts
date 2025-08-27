import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss()],
    base: "",
    resolve: {
        alias: {
            "@": "/src",
            "@app": "/src/app",
            "@shared": "/src/shared",
            "@features": "/src/features",
        },
    },
});