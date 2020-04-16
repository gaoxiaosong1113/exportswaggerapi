import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 订单支付
export function paymentOrder(option) { return api.post("/payment/order", option) }


// 获取支付方式
export function paymentWay(option) { return api.post("/payment/way", option) }

