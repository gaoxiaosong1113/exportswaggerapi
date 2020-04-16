import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 保存心率信息
export async function deviceHeartRate(options) {
    const { dispatch } = store
    const res = await request.deviceHeartRate(options)
    return requstPromise(res, () => {

    })
}


// 心率信息列表
export async function deviceHeartRateDetail(options) {
    const { dispatch } = store
    const res = await request.deviceHeartRateDetail(options)
    return requstPromise(res, () => {

    })
}


// 心率信息列表
export async function deviceHeartRateList(options) {
    const { dispatch } = store
    const res = await request.deviceHeartRateList(options)
    return requstPromise(res, () => {

    })
}

    
