import { Swipe, SwipeItem, Tabbar, TabbarItem, Popup, Sticky, Loading } from 'vant';

const vants = [
    Swipe, SwipeItem, Tabbar, TabbarItem, Popup, Sticky, Loading 
]

export default function getVant(app) {
    vants.forEach(item => {
        return app.use(item)
    })
}
