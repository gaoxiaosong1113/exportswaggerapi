import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 代理商品列表
export async function agentGoodsList(options) {
    const { dispatch } = store
    const res = await request.agentGoodsList(options)
    return requstPromise(res, () => {

    })
}


// 代理产品列表
export async function agentProductList(options) {
    const { dispatch } = store
    const res = await request.agentProductList(options)
    return requstPromise(res, () => {

    })
}

    
