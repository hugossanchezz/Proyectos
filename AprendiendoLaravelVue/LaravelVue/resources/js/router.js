import { createRouter, createWebHistory } from 'vue-router';

import BooksList from '@/components/BooksList.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Profile from '@/components/Profile.vue';

const routes = [
    {
        path: '/books',
        component: BooksList
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;