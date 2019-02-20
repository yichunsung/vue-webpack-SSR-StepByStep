//client-entry.js
import { createApp } from './index.js';

const { app } = createApp()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')