import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 收藏/取消收藏 帖子
export async function cardCollection(options) {
    const { dispatch } = store
    const res = await request.cardCollection(options)
    return requstPromise(res, () => {

    })
}


// 发表评论
export async function cardComment(options) {
    const { dispatch } = store
    const res = await request.cardComment(options)
    return requstPromise(res, () => {

    })
}


// 删除 评论/回复
export async function cardCommentDel(options) {
    const { dispatch } = store
    const res = await request.cardCommentDel(options)
    return requstPromise(res, () => {

    })
}


// 评论/回复 列表
export async function cardCommentList(options) {
    const { dispatch } = store
    const res = await request.cardCommentList(options)
    return requstPromise(res, () => {

    })
}


// 删除帖子
export async function cardDel(options) {
    const { dispatch } = store
    const res = await request.cardDel(options)
    return requstPromise(res, () => {

    })
}


// 帖子详情
export async function cardDetail(options) {
    const { dispatch } = store
    const res = await request.cardDetail(options)
    return requstPromise(res, () => {

    })
}


// 关注/取消关注 帖子发布人
export async function cardFollowAccount(options) {
    const { dispatch } = store
    const res = await request.cardFollowAccount(options)
    return requstPromise(res, () => {

    })
}


// 商品帖子列表
export async function cardGoodsList(options) {
    const { dispatch } = store
    const res = await request.cardGoodsList(options)
    return requstPromise(res, () => {

    })
}


// 点赞/取消点赞 帖子
export async function cardLike(options) {
    const { dispatch } = store
    const res = await request.cardLike(options)
    return requstPromise(res, () => {

    })
}


// 板块帖子列表
export async function cardList(options) {
    const { dispatch } = store
    const res = await request.cardList(options)
    return requstPromise(res, () => {

    })
}


// 我发布帖子列表
export async function cardMyList(options) {
    const { dispatch } = store
    const res = await request.cardMyList(options)
    return requstPromise(res, () => {

    })
}


// 保存帖子
export async function cardSave(options) {
    const { dispatch } = store
    const res = await request.cardSave(options)
    return requstPromise(res, () => {

    })
}

    
