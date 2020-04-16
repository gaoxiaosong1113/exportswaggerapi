import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 海报详情
export function billDetail(option) { return api.post("/bill/detail", option) }


// 海报列表
export function billList(option) { return api.post("/bill/list", option) }

