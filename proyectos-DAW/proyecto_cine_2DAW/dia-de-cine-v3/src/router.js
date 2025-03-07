import { createRouter, createWebHistory } from 'vue-router';

import TemporalView from './views/TemporalView.vue';
import IndexView from './views/IndexView.vue';
import NosotrosView from './views/NosotrosView.vue';
import ComunidadView from './views/ComunidadView.vue';
import PeliculasView from './views/PeliculasView.vue';
import SeriesView from './views/SeriesView.vue';
import MiEspacioView from './views/MiEspacioView.vue';
import PerfilView from './views/PerfilView.vue';
import RegistroView from './views/RegistroView.vue';
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
        path: '/comunidad',
        name: 'Comunidad',
        component: ComunidadView, //ComunidadView
    },
    {
        path: '/peliculas',
        name: 'Peliculas',
        component: PeliculasView
    },
    {
        path: '/series',
        name: 'Series',
        component: SeriesView
    },
    {
        path: '/mi-espacio',
        name: 'MiEspacio',
        component: MiEspacioView
    },
    {
        path: '/perfil',
        redirect: '/perfil/registro',  // Redirige automáticamente a registro
        component: PerfilView, // Contenedor de login y registro(terminos, privacidad y cookies)
        // en los path de los hijo no se pone "/nombre-path" porque se pone automaticamente
        children: [
            {
                path: 'iniciar-sesion',
                name: 'iniciar-sesion',
                component: LoginForm,
            },
        ],
    },
    {
        path: '/perfil/registro',
        component: RegistroView,
        children: [
            {
                path: '',
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
