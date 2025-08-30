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
                "@": "/",
                "@app": "/src/app",
                "@shared": "/src/shared",
                "@stores": "/src/shared/stores/",
                "@components": "/src/shared/components",
                "@assets": "/src/shared/assets",
                "@utils": "/src/shared/utils",
                "@styles": "/src/shared/styles",
                "@features": "/src/features",
            },
        },
        define: {
            'process.env': process.env
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