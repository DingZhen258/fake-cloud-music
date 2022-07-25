import { createRouter, createWebHashHistory } from 'vue-router'

// 懒加载
const Profile = () =>
  import('@/views/profile/Profile.vue')
const Home = () =>
  import('@/views/home/Home.vue')
const Yuncun = () =>
  import('@/views/yuncun/Yuncun.vue')
const Video = () =>
  import('@/views/video/Video.vue')
const ItemMusicDeatil = () =>
  import('@/views/itemMusicDeatil/ItemMusicDeatil.vue')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { showTabbar: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { showTabbar: true }
  },
  {
    path: '/yuncun',
    name: 'yuncun',
    component: Yuncun,
    meta: { showTabbar: true }
  },
  {
    path: '/video',
    name: 'video',
    component: Video,
    meta: { showTabbar: true }
  },
  {
    path: '/itemMusicDeatil',
    name: 'itemMusicDeatil',
    component: ItemMusicDeatil
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
