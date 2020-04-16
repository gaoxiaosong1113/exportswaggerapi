import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 代理商品列表
export function agentGoodsList(option) { return api.post("/agent/goods/list", option) }


// 代理产品列表
export function agentProductList(option) { return api.post("/agent/product/list", option) }

