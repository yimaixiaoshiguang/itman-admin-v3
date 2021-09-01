import { createRouter, createWebHistory } from "vue-router";

import { constantRoutes } from './router';

export const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})


