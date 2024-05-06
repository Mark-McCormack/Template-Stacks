import { createApp } from 'vue';
import App from './App.vue';
import { createWebHistory, createRouter } from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import HomeComponent from './components/HelloWorld.vue';
import CreateComponent from './components/CreateComponent.vue';
import GetComponent from './components/GetComponent.vue';
import UpdateComponent from './components/UpdateComponent.vue';
import DeleteComponent from './components/DeleteComponent.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent,
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent,
  },
  {
    name: 'get',
    path: '/get',
    component: GetComponent,
  },
  {
    name: 'update',
    path: '/update',
    component: UpdateComponent,
  },
  {
    name: 'delete',
    path: '/delete',
    component: DeleteComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router, VueAxios, axios).mount('#app');
