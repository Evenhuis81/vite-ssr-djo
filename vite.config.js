import vue from '@vitejs/plugin-vue';
import ssr from 'vite-plugin-ssr/plugin';
import {defineConfig} from 'vite';
import path from 'path';

const root = path.resolve('./');

export default defineConfig({
    plugins: [vue(), ssr()],
    resolve: {
        alias: {
            graphics: path.join(root, 'graphics'),
            pages: path.join(root, 'pages'),
        },
    },
});
