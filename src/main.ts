import { createApp } from 'vue';
import App from './App.vue';
import HelloWorld from "./components/HelloWorld.vue"
import Another from "./components/Another.vue"

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);

const router = createRouter({history: createWebHistory(process.env.BASE_URL),
strict: true,
routes: [
    
    {
        path: "/hello",
        component: HelloWorld
    },
    {
        path: "/another",
        component: Another
    }
]});

app.use(router);
app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app')

