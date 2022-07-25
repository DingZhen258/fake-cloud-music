import { Swipe, SwipeItem, Tabbar, TabbarItem } from 'vant';

const vants = [
    Swipe, SwipeItem, Tabbar, TabbarItem
]

export default function getVant(app) {
    vants.forEach(item => {
        return app.use(item)
    })
}
