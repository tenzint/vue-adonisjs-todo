import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from '../views/Projects.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
