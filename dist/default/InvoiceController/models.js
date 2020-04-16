import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 添加发票
export async function invoiceAdd(options) {
    const { dispatch } = store
    const res = await request.invoiceAdd(options)
    return requstPromise(res, () => {

    })
}


// 获取默认发票
export async function invoiceDefault(options) {
    const { dispatch } = store
    const res = await request.invoiceDefault(options)
    return requstPromise(res, () => {

    })
}


// 删除发票
export async function invoiceDel(options) {
    const { dispatch } = store
    const res = await request.invoiceDel(options)
    return requstPromise(res, () => {

    })
}


// 编辑发票
export async function invoiceEdit(options) {
    const { dispatch } = store
    const res = await request.invoiceEdit(options)
    return requstPromise(res, () => {

    })
}


// 获取发票
export async function invoiceGet(options) {
    const { dispatch } = store
    const res = await request.invoiceGet(options)
    return requstPromise(res, () => {

    })
}


// 发票列表
export async function invoiceList(options) {
    const { dispatch } = store
    const res = await request.invoiceList(options)
    return requstPromise(res, () => {

    })
}

    
