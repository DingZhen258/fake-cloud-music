import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
const app = createApp(App)
app.use(store).use(router).use(Swipe).use(SwipeItem).mount('#app')