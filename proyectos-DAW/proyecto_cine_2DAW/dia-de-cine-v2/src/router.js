import { createRouter, createWebHistory } from 'vue-router';

import TemporalView from './views/TemporalView.vue';
import IndexView from './views/IndexView.vue';
import NosotrosView from './views/NosotrosView.vue';
import InicioSesionView from './views/InicioSesionView.vue';
// dentro de inicio-sesion 
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';
import Terminos from './components/Terminos.vue';
import Privacidad from './components/Privacidad.vue';
import Cookies from './components/Cookies.vue';

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
        component: InicioSesionView, // Contenedor de login y registro(terminos, privacidad y cookies)
        // en los path de los hijo no se pone "/nombre-path" porque se pone automaticamente
        children: [
            {
                path: 'login',
                name: 'login',
                component: LoginForm,
            },
            {
                path: 'registro',
                name: 'registro',
                component: RegisterForm,
            },
            {
                path: 'terminos',
                name: 'terminos',
                component: Terminos,
            },
            {
                path: 'privacidad',
                name: 'privacidad',
                component: Privacidad,
            },
            {
                path: 'cookies',
                name: 'cookies',
                component: Cookies,
            },
        ],
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
