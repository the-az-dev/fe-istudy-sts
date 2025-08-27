import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), vue(), tailwindcss()],
    base: "/fe-istudy-sts/",
    resolve: {
        alias: {
            "@app": "/src/app",
            "@shared": "/src/shared",
            "@features": "/src/features",
        },
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Генерувати source maps для дебагу
        sourcemap: true,
        // Оптимізація чанків
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['vue', 'vue-router']
                }
            }
        }
    }
});

//
// function getPathsFromTsConfig() {
//     const tsconfig_s = fs
//         .readFileSync('./tsconfig.json', 'utf-8')
//         .replace(/\/\/.*$/gm, '') // Removing comments
//     const tsconfig = JSON.parse(tsconfig_s)
//     const aliases = {}
//     for (const [key, value] of Object.entries(tsconfig.compilerOptions.paths)) {
//         aliases[key] = path.resolve(__dirname, value[0])
//     }
//     return aliases
// }