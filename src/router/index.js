import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import HomeLayout from '../layouts/HomeLayout.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      { path: '', component: Home, name: 'Home' }
    ],
  },
  {
    path: '/catalog/:id',
    component: DefaultLayout,
    children: [
      { path: '', component: () => import('../views/Detail.vue'), name: 'Detail' }
    ],
  },
  {
    path: '/favourites',
    component: DefaultLayout,
    children: [
      { path: '', component: () => import('../views/Favourites.vue'), name: 'Favourites' }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
