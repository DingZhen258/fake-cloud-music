import { request } from './request'

// 获取歌单内容
export function getMusicItem(id) {
    return request({
        url: `/playlist/detail?id=${id}`
    })
}

// 获取歌曲
export function getAllMusic(id) {
    return request({
        url: `/playlist/track/all?id=${id}&limit=20&offset=1`
    })
}
// 获取歌词
export function getLyric(id) {
    return request({
        url: `/lyric?id=${id}`
    })

}