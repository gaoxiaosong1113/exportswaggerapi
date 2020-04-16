import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 账号关联请求审核
export function relationAccountExamine(option) { return api.post("/relation/account/examine", option) }


// 我的关联账号列表
export function relationAccountList(option) { return api.post("/relation/account/list", option) }


// 账号关联请求
export function relationRequest(option) { return api.post("/relation/request", option) }


// 我的账号关联请求列表
export function relationRequestList(option) { return api.post("/relation/request/list", option) }

