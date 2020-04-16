import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 保存心率信息
export function deviceHeartRate(option) { return api.post("/device/heart/rate", option) }


// 心率信息列表
export function deviceHeartRateDetail(option) { return api.post("/device/heart/rate/detail", option) }


// 心率信息列表
export function deviceHeartRateList(option) { return api.post("/device/heart/rate/list", option) }

