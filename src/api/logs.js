import { request } from '@/utils/request'

// 日志
export function getLogs() {
    let res = request('http://map.geoshare.com.cn:30010/gateway/system/sys_dict/findPage', 'GET')
    return res
}
