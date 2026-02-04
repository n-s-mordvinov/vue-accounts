import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import './assets/main.css';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  },
});

app.mount('#app')
