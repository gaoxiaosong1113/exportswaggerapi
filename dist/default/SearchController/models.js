import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 商品搜索
export async function search(options) {
    const { dispatch } = store
    const res = await request.search(options)
    return requstPromise(res, () => {

    })
}


// 用户搜索记录
export async function searchLog(options) {
    const { dispatch } = store
    const res = await request.searchLog(options)
    return requstPromise(res, () => {

    })
}


// 用户搜索记录
export async function searchLogDel(options) {
    const { dispatch } = store
    const res = await request.searchLogDel(options)
    return requstPromise(res, () => {

    })
}


// 热门搜索/推荐搜索词
export async function searchRecommend(options) {
    const { dispatch } = store
    const res = await request.searchRecommend(options)
    return requstPromise(res, () => {

    })
}

    
