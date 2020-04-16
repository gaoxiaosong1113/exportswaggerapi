import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 已注册用户绑定微信
export function bindLogin(option) { return api.post("/bind/login", option) }


// 校验是否绑定了微信
export function checkBindWechat(option) { return api.post("/check/bind/wechat", option) }


// 邀请登录
export function invitationLogin(option) { return api.post("/invitation/login", option) }


// 密码登录
export function login(option) { return api.post("/login", option) }


// 刷新Token
export function refreshToken(option) { return api.post("/refresh/token", option) }


// 设置登录密码
export function settingPassword(option) { return api.post("/setting/password", option) }


// 短信登录
export function smsLogin(option) { return api.post("/sms/login", option) }


// 微信登录
export function wechatLogin(option) { return api.post("/wechat/login", option) }

