import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 订单支付
export async function paymentOrder(options) {
    const { dispatch } = store
    const res = await request.paymentOrder(options)
    return requstPromise(res, () => {

    })
}


// 获取支付方式
export async function paymentWay(options) {
    const { dispatch } = store
    const res = await request.paymentWay(options)
    return requstPromise(res, () => {

    })
}

    
