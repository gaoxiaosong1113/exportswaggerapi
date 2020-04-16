import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 分身币排行
export function rankCoin(option) { return api.post("/rank/coin", option) }


// 积分排行
export function rankIntegral(option) { return api.post("/rank/integral", option) }

