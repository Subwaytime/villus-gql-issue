import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto';
import App from './app.vue';
import { createPinia } from 'pinia';


const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
});

const pinia = createPinia();

const instance = createApp(App);
instance.use(pinia);
instance.use(router);
instance.mount('.page');
