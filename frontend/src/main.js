import { createApp } from 'vue';
import App from './App.vue';
import stores from './stores';
import router from './router';
import axios from '@/plugins/axios';
import { VueQueryPlugin } from 'vue-query';

const app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(stores).use(router).use(VueQueryPlugin).mount('#app');
