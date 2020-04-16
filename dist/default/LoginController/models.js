import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 已注册用户绑定微信
export async function bindLogin(options) {
    const { dispatch } = store
    const res = await request.bindLogin(options)
    return requstPromise(res, () => {

    })
}


// 校验是否绑定了微信
export async function checkBindWechat(options) {
    const { dispatch } = store
    const res = await request.checkBindWechat(options)
    return requstPromise(res, () => {

    })
}


// 邀请登录
export async function invitationLogin(options) {
    const { dispatch } = store
    const res = await request.invitationLogin(options)
    return requstPromise(res, () => {

    })
}


// 密码登录
export async function login(options) {
    const { dispatch } = store
    const res = await request.login(options)
    return requstPromise(res, () => {

    })
}


// 刷新Token
export async function refreshToken(options) {
    const { dispatch } = store
    const res = await request.refreshToken(options)
    return requstPromise(res, () => {

    })
}


// 设置登录密码
export async function settingPassword(options) {
    const { dispatch } = store
    const res = await request.settingPassword(options)
    return requstPromise(res, () => {

    })
}


// 短信登录
export async function smsLogin(options) {
    const { dispatch } = store
    const res = await request.smsLogin(options)
    return requstPromise(res, () => {

    })
}


// 微信登录
export async function wechatLogin(options) {
    const { dispatch } = store
    const res = await request.wechatLogin(options)
    return requstPromise(res, () => {

    })
}

    
