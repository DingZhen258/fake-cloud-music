import { request } from './request'

export function getSearchRes(keywords) {
    return request({
        url: `/cloudsearch?keywords=${keywords}&limit=20`
    })
}