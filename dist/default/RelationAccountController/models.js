import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 账号关联请求审核
export async function relationAccountExamine(options) {
    const { dispatch } = store
    const res = await request.relationAccountExamine(options)
    return requstPromise(res, () => {

    })
}


// 我的关联账号列表
export async function relationAccountList(options) {
    const { dispatch } = store
    const res = await request.relationAccountList(options)
    return requstPromise(res, () => {

    })
}


// 账号关联请求
export async function relationRequest(options) {
    const { dispatch } = store
    const res = await request.relationRequest(options)
    return requstPromise(res, () => {

    })
}


// 我的账号关联请求列表
export async function relationRequestList(options) {
    const { dispatch } = store
    const res = await request.relationRequestList(options)
    return requstPromise(res, () => {

    })
}

    
