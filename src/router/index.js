import { createRouter, createWebHashHistory } from 'vue-router'

// 懒加载
const Home = () =>
  import('@/views/home/Home.vue')
const Find = () =>
  import('@/views/find/Find.vue')
const Yuncun = () =>
  import('@/views/yuncun/Yuncun.vue')
const Video = () =>
  import('@/views/video/Video.vue')

const routes = [
  {
    path: '',
    redirect: '/find'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/yuncun',
    name: 'yuncun',
    component: Yuncun
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
