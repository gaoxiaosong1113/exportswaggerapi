import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 账号设置
export async function accountSetting(options) {
    const { dispatch } = store
    const res = await request.accountSetting(options)
    return requstPromise(res, () => {

    })
}


// 校验手机号码是否注册了账号
export async function checkPhone(options) {
    const { dispatch } = store
    const res = await request.checkPhone(options)
    return requstPromise(res, () => {

    })
}


// 意见反馈
export async function feedback(options) {
    const { dispatch } = store
    const res = await request.feedback(options)
    return requstPromise(res, () => {

    })
}


// 邀请接口
export async function invitation{accountNo}(options) {
    const { dispatch } = store
    const res = await request.invitation{accountNo}(options)
    return requstPromise(res, () => {

    })
}


// 我的信息
export async function my(options) {
    const { dispatch } = store
    const res = await request.my(options)
    return requstPromise(res, () => {

    })
}


// 我的帖子列表
export async function myCard(options) {
    const { dispatch } = store
    const res = await request.myCard(options)
    return requstPromise(res, () => {

    })
}


// 我的分身币
export async function myCoin(options) {
    const { dispatch } = store
    const res = await request.myCoin(options)
    return requstPromise(res, () => {

    })
}


// 我的分身币明细
export async function myCoinLog(options) {
    const { dispatch } = store
    const res = await request.myCoinLog(options)
    return requstPromise(res, () => {

    })
}


// 我收藏的帖子
export async function myCollectionCard(options) {
    const { dispatch } = store
    const res = await request.myCollectionCard(options)
    return requstPromise(res, () => {

    })
}


// 我的CV
export async function myCv(options) {
    const { dispatch } = store
    const res = await request.myCv(options)
    return requstPromise(res, () => {

    })
}


// 我的CV明细
export async function myCvLog(options) {
    const { dispatch } = store
    const res = await request.myCvLog(options)
    return requstPromise(res, () => {

    })
}


// 我的粉丝
export async function myFans(options) {
    const { dispatch } = store
    const res = await request.myFans(options)
    return requstPromise(res, () => {

    })
}


// 我关注的人
export async function myFollowAccount(options) {
    const { dispatch } = store
    const res = await request.myFollowAccount(options)
    return requstPromise(res, () => {

    })
}


// 我关注的板块
export async function myFollowPlate(options) {
    const { dispatch } = store
    const res = await request.myFollowPlate(options)
    return requstPromise(res, () => {

    })
}


// 我的收益
export async function myIncome(options) {
    const { dispatch } = store
    const res = await request.myIncome(options)
    return requstPromise(res, () => {

    })
}


// 我的信息-帖子相关
export async function myInfo(options) {
    const { dispatch } = store
    const res = await request.myInfo(options)
    return requstPromise(res, () => {

    })
}


// 我的积分
export async function myIntegral(options) {
    const { dispatch } = store
    const res = await request.myIntegral(options)
    return requstPromise(res, () => {

    })
}


// 我的积分明细
export async function myIntegralLog(options) {
    const { dispatch } = store
    const res = await request.myIntegralLog(options)
    return requstPromise(res, () => {

    })
}


// 我点赞的帖子
export async function myLikeCard(options) {
    const { dispatch } = store
    const res = await request.myLikeCard(options)
    return requstPromise(res, () => {

    })
}


// 我的团队
export async function myTeam(options) {
    const { dispatch } = store
    const res = await request.myTeam(options)
    return requstPromise(res, () => {

    })
}


// 二维码
export async function qrcode{accountNo}(options) {
    const { dispatch } = store
    const res = await request.qrcode{accountNo}(options)
    return requstPromise(res, () => {

    })
}


// 修改密码
export async function updatePassword(options) {
    const { dispatch } = store
    const res = await request.updatePassword(options)
    return requstPromise(res, () => {

    })
}


// 修改手机号码
export async function updatePhone(options) {
    const { dispatch } = store
    const res = await request.updatePhone(options)
    return requstPromise(res, () => {

    })
}

    
