import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 加入购物车
export async function shopCartAdd(options) {
    const { dispatch } = store
    const res = await request.shopCartAdd(options)
    return requstPromise(res, () => {

    })
}


// 删除购物车中一个或多个商品
export async function shopCartDel(options) {
    const { dispatch } = store
    const res = await request.shopCartDel(options)
    return requstPromise(res, () => {

    })
}


// 我的购物车商品列表
export async function shopCartList(options) {
    const { dispatch } = store
    const res = await request.shopCartList(options)
    return requstPromise(res, () => {

    })
}


// 修改购物车商品数量或规格
export async function shopCartUpdate(options) {
    const { dispatch } = store
    const res = await request.shopCartUpdate(options)
    return requstPromise(res, () => {

    })
}

    
