import axios from 'axios'

// 封装axios请求
export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'https://netease-cloud-music-api-five-flame.vercel.app/',
        timeout: 10000
    })
    // 返回的是一个promise
    return instance(config)
}