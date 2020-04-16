import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 海报
export async function touristBill{accountNo}{billId}(options) {
    const { dispatch } = store
    const res = await request.touristBill{accountNo}{billId}(options)
    return requstPromise(res, () => {

    })
}


// 生成商品的分享海报
export async function touristBill{goodsId}(options) {
    const { dispatch } = store
    const res = await request.touristBill{goodsId}(options)
    return requstPromise(res, () => {

    })
}


// 临时提供删除用户
export async function touristDel{phone}(options) {
    const { dispatch } = store
    const res = await request.touristDel{phone}(options)
    return requstPromise(res, () => {

    })
}


// 邀请信息
export async function touristInvitation{accountNo}(options) {
    const { dispatch } = store
    const res = await request.touristInvitation{accountNo}(options)
    return requstPromise(res, () => {

    })
}

    
