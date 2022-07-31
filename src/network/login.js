import { request } from './request'

export function getPhoneLogin() {
    return request({
        // 手机登录接口不行 使用游客登录接口
        url: `/register/anonimous`
    })
}