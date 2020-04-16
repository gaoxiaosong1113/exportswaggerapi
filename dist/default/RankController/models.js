import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 分身币排行
export async function rankCoin(options) {
    const { dispatch } = store
    const res = await request.rankCoin(options)
    return requstPromise(res, () => {

    })
}


// 积分排行
export async function rankIntegral(options) {
    const { dispatch } = store
    const res = await request.rankIntegral(options)
    return requstPromise(res, () => {

    })
}

    
