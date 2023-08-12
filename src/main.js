// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount("#app");
