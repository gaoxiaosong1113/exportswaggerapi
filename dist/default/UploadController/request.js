import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 上传文件
export function upload(option) { return api.post("/upload", option) }

