import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 板块详情
export async function plateDetail(options) {
    const { dispatch } = store
    const res = await request.plateDetail(options)
    return requstPromise(res, () => {

    })
}


// 关注/取消 板块
export async function plateFollow(options) {
    const { dispatch } = store
    const res = await request.plateFollow(options)
    return requstPromise(res, () => {

    })
}


// 热门板块列表
export async function plateHotList(options) {
    const { dispatch } = store
    const res = await request.plateHotList(options)
    return requstPromise(res, () => {

    })
}


// 板块列表
export async function plateList(options) {
    const { dispatch } = store
    const res = await request.plateList(options)
    return requstPromise(res, () => {

    })
}

    
