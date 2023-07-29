import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import HomeLayout from '../layouts/HomeLayout.vue';
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import Favourites from '../views/Favourites.vue';
import { portraits } from '../data';

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home,
        name: 'Home',
      }
    ],
  },
  {
    path: '/catalog/:id',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Detail,
        name: 'Detail',
        beforeEnter: (to, from, next) => {
          const id = Number(to.params.id);
          const pageExists = portraits.some((item) => item.id === id);

          if (pageExists) {
            next();
          } else {
            next('/');
          }
        },
      }
    ],
  },
  {
    path: '/favourites',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Favourites,
        name: 'Favourites',
      }
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
