import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from "vite-tsconfig-paths";
import {isNode} from "./src/shared/utils/exec-detection.util.ts";
import process from "node:process";
import {parseArgs} from "node:util";

// https://vite.dev/config/
export default defineConfig(() => {

    const {values} = parseArgs({
        args: !isNode ? Bun.argv : process.argv,
        options: {
            port: {
                type: 'string',
            },
            github: {
                type: 'boolean',
            }
        },
        strict: true,
        allowPositionals: true,
    });
    const port = Number(values.port);
    if (values.github) {
        process.env.VITE_GITHUB_DEPLOY = 'true';
    }

    return {
        server: {
            port: isNaN(port) ? 5173 : port,
        },
        plugins: [tsconfigPaths(), vue(), tailwindcss()],
        base: values.github ? "/fe-istudy-sts/" : "",
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
            'process.versions': process.versions,
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