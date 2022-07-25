import axios from 'axios'

// 封装axios请求
export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 5000
    })
    // 返回的是一个promise
    return instance(config)
}