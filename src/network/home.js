import { request } from './request'

export function getHomeData() {
    return request({
        url: '/banner?type=2'
    })
}

export function getpersonalized() {
    return request({
        url: '/personalized?limit=20'
    })
}