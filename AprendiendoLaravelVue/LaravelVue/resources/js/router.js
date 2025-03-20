import { createRouter, createWebHistory } from 'vue-router';

import BooksList from '@/components/BooksList.vue';

const routes = [
    {
        path: '/books',  
        component: BooksList
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;