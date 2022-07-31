import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css';
// 引入vant组件库
import getVant from './plugins'
// 引入自定义方法
import { changeCount } from './common/fun'

const app = createApp(App)
getVant(app)
app.use(store).use(router).mount('#app')
app.config.globalProperties.$myFun = { changeCount }