import { request } from '@/utils/request'

// 列表
export function getList() {
    let res = request('/api/film/list', 'GET')
    return res
}