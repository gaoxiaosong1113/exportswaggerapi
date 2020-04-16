import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 海报详情
export async function billDetail(options) {
    const { dispatch } = store
    const res = await request.billDetail(options)
    return requstPromise(res, () => {

    })
}


// 海报列表
export async function billList(options) {
    const { dispatch } = store
    const res = await request.billList(options)
    return requstPromise(res, () => {

    })
}

    
