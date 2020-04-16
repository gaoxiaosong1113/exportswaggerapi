import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 轮播图列表
export function rotationChart(option) { return api.post("/rotation/chart", option) }

