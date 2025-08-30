import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(() => {
    return {
        plugins: [tsconfigPaths(), vue(), tailwindcss()],
        base: process.env.DEST === 'gh' ? "/fe-istudy-sts/" : "",
        resolve: {
            alias: {
                "@app": "/src/app",
                "@shared": "/src/shared",
                "@features": "/src/features",
            },
        },
        build: {
            assetsDir: 'public',
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ['vue', 'vue-router'],
                        pinia: ['pinia']
                    }
                }
            }
        }
    };
});