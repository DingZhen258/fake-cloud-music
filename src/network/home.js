import { request } from './request'

// 请求轮播图数据
export function getHomeData() {
    return request({
        url: '/banner?type=2'
    })
}
// 请求 发现歌单
export function getpersonalized() {
    return request({
        url: '/personalized?limit=20'
    })
}
// 获取精品歌单
export function getHighquality() {
    return request({
        url: '/top/playlist/highquality?limit=36'
    })
}