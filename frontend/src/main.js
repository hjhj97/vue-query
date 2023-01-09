import { createApp } from 'vue';
import App from './App.vue';
import stores from './stores';
import router from './router';
import axios from '@/plugins/axios';

const app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(stores).use(router).mount('#app');
