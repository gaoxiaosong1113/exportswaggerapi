import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 发布商品评价
export async function goodsAppraise(options) {
    const { dispatch } = store
    const res = await request.goodsAppraise(options)
    return requstPromise(res, () => {

    })
}


// 发布商品评价的评论
export async function goodsAppraiseComment(options) {
    const { dispatch } = store
    const res = await request.goodsAppraiseComment(options)
    return requstPromise(res, () => {

    })
}


// 商品评价评论列表
export async function goodsAppraiseCommentList(options) {
    const { dispatch } = store
    const res = await request.goodsAppraiseCommentList(options)
    return requstPromise(res, () => {

    })
}


// 商品评价详情
export async function goodsAppraiseDetail(options) {
    const { dispatch } = store
    const res = await request.goodsAppraiseDetail(options)
    return requstPromise(res, () => {

    })
}


// 商品评价列表
export async function goodsAppraiseList(options) {
    const { dispatch } = store
    const res = await request.goodsAppraiseList(options)
    return requstPromise(res, () => {

    })
}


// 商品属性/规格
export async function goodsAttribute(options) {
    const { dispatch } = store
    const res = await request.goodsAttribute(options)
    return requstPromise(res, () => {

    })
}


// 商品收藏
export async function goodsCollection(options) {
    const { dispatch } = store
    const res = await request.goodsCollection(options)
    return requstPromise(res, () => {

    })
}


// 商品收藏列表
export async function goodsCollectionList(options) {
    const { dispatch } = store
    const res = await request.goodsCollectionList(options)
    return requstPromise(res, () => {

    })
}


// 商品详情
export async function goodsDetail(options) {
    const { dispatch } = store
    const res = await request.goodsDetail(options)
    return requstPromise(res, () => {

    })
}

    
