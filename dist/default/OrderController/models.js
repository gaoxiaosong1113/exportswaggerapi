import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 代理订单提交
export async function orderAgentSubmit(options) {
    const { dispatch } = store
    const res = await request.orderAgentSubmit(options)
    return requstPromise(res, () => {

    })
}


// 订单取消
export async function orderCancel(options) {
    const { dispatch } = store
    const res = await request.orderCancel(options)
    return requstPromise(res, () => {

    })
}


// 订单确认
export async function orderConfirm(options) {
    const { dispatch } = store
    const res = await request.orderConfirm(options)
    return requstPromise(res, () => {

    })
}


// 确认收货
export async function orderConfirmReceipt(options) {
    const { dispatch } = store
    const res = await request.orderConfirmReceipt(options)
    return requstPromise(res, () => {

    })
}


// 删除订单
export async function orderDel(options) {
    const { dispatch } = store
    const res = await request.orderDel(options)
    return requstPromise(res, () => {

    })
}


// 订单详情
export async function orderDetail(options) {
    const { dispatch } = store
    const res = await request.orderDetail(options)
    return requstPromise(res, () => {

    })
}


// 我的订单列表
export async function orderList(options) {
    const { dispatch } = store
    const res = await request.orderList(options)
    return requstPromise(res, () => {

    })
}


// 订单支付结果：true：已支付，false：未支付
export async function orderPaymentResult(options) {
    const { dispatch } = store
    const res = await request.orderPaymentResult(options)
    return requstPromise(res, () => {

    })
}


// 订单退款
export async function orderRefund(options) {
    const { dispatch } = store
    const res = await request.orderRefund(options)
    return requstPromise(res, () => {

    })
}


// 订单提交
export async function orderSubmit(options) {
    const { dispatch } = store
    const res = await request.orderSubmit(options)
    return requstPromise(res, () => {

    })
}

    
