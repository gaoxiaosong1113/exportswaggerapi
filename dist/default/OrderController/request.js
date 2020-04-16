import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 代理订单提交
export function orderAgentSubmit(option) { return api.post("/order/agent/submit", option) }


// 订单取消
export function orderCancel(option) { return api.post("/order/cancel", option) }


// 订单确认
export function orderConfirm(option) { return api.post("/order/confirm", option) }


// 确认收货
export function orderConfirmReceipt(option) { return api.post("/order/confirm/receipt", option) }


// 删除订单
export function orderDel(option) { return api.post("/order/del", option) }


// 订单详情
export function orderDetail(option) { return api.post("/order/detail", option) }


// 我的订单列表
export function orderList(option) { return api.post("/order/list", option) }


// 订单支付结果：true：已支付，false：未支付
export function orderPaymentResult(option) { return api.post("/order/payment/result", option) }


// 订单退款
export function orderRefund(option) { return api.post("/order/refund", option) }


// 订单提交
export function orderSubmit(option) { return api.post("/order/submit", option) }

