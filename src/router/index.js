import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index.js'

// 懒加载
const Profile = () =>
  import('@/views/profile/Profile.vue')
const Home = () =>
  import('@/views/home/Home.vue')
const ItemMusicDeatil = () =>
  import('@/views/itemMusicDeatil/ItemMusicDeatil.vue')
const Search = () =>
  import('@/views/search/Search.vue')
const Login = () =>
  import('@/views/login/Login.vue')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { showTabbar: true, keepAlive: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { showTabbar: true }
  },
  {
    path: '/itemMusicDeatil',
    name: 'itemMusicDeatil',
    component: ItemMusicDeatil,
    meta: { keepAlive: false }
  },
  {
    path: '/search',
    name: 'search',
    component: Search

  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局路由守卫
router.beforeEach((to, from) => {
  if (to.path == '/login') {
    store.commit('updateIsShowPlayer', false)
  } else {
    store.commit('updateIsShowPlayer', true)
  }
})

export default router
