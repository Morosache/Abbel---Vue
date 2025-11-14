import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import MobileMenu from '@/components/MobileMenu.vue';


const routes = [
  { path: '/', component: MainPage },
  { path: '/mobile-menu', component: MobileMenu}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
