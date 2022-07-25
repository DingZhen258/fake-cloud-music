import { request } from './request'

export function getMusicItem(id) {
    return request({
        url: `/playlist/detail?id=${id}`
    })

}