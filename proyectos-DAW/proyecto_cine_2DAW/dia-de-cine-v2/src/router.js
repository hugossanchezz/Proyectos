import { createRouter, createWebHistory } from 'vue-router';

import TemporalView from './views/TemporalView.vue';
import IndexView from './views/IndexView.vue';
import NosotrosView from './views/NosotrosView.vue';
import InicioSesionView from './views/InicioSesionView.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: IndexView
    },
    {
        path: '/nosotros',
        name: 'Nosotros',
        component: NosotrosView
    },
    {
        path: '/inicio-sesion',
        name: 'InicioSesion',
        component: InicioSesionView
    },
    {
        path: '/temporal',
        name: 'Temporal',
        component: TemporalView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
