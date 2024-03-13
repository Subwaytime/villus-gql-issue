import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { defineConfig } from 'vite';

/*
|--------------------------------------------------------------------------
| Vite Configuration
|--------------------------------------------------------------------------
*/
export default defineConfig({
    plugins: [
        VueRouter({
            routesFolder: ['src/pages'],
        }),
        Vue({
            include: [/\.vue$/, /\.md$/],
            script: {
                propsDestructure: true
            }
        }),
    ],
})
