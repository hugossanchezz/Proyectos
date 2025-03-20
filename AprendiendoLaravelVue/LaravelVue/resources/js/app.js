
import { createApp } from 'vue';
import Index from '@/components/Index.vue';
import router from './router';

createApp(Index).use(router).mount('#app');  // Usa el router en la aplicación 