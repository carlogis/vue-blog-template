import { request } from '@/utils/request'

// 上传图片
export function uploadImage(form) {
    let res = request('http://localhost:9999/gateway/kbs/kbs-file/test','POST',form,true);
    return res
}
