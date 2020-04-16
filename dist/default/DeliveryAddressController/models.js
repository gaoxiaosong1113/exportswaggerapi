import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 获取默认收货地址
export async function deliveryAddressDefault(options) {
    const { dispatch } = store
    const res = await request.deliveryAddressDefault(options)
    return requstPromise(res, () => {

    })
}


// 通过ID删除收货地址
export async function deliveryAddressDel(options) {
    const { dispatch } = store
    const res = await request.deliveryAddressDel(options)
    return requstPromise(res, () => {

    })
}


// 通过id获取收货地址
export async function deliveryAddressGet(options) {
    const { dispatch } = store
    const res = await request.deliveryAddressGet(options)
    return requstPromise(res, () => {

    })
}


// 新增收货地址
export async function deliveryAddressInsert(options) {
    const { dispatch } = store
    const res = await request.deliveryAddressInsert(options)
    return requstPromise(res, () => {

    })
}


// 收货地址列表
export async function deliveryAddressList(options) {
    const { dispatch } = store
    const res = await request.deliveryAddressList(options)
    return requstPromise(res, () => {

    })
}


// 修改收货地址
export async function deliveryAddressUpdate(options) {
    const { dispatch } = store
    const res = await request.deliveryAddressUpdate(options)
    return requstPromise(res, () => {

    })
}

    
