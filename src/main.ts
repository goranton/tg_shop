import { createApp } from 'vue';
import TWA from '@twa-dev/sdk';

import App from './App.vue';

TWA.showAlert("test");

const app = createApp(App)

app.mount('#app')
