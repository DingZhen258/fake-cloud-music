import { Swipe, SwipeItem, Tabbar, TabbarItem, Popup, Sticky } from 'vant';

const vants = [
    Swipe, SwipeItem, Tabbar, TabbarItem, Popup, Sticky
]

export default function getVant(app) {
    vants.forEach(item => {
        return app.use(item)
    })
}
