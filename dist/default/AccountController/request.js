import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 账号设置
export function accountSetting(option) { return api.post("/account/setting", option) }


// 校验手机号码是否注册了账号
export function checkPhone(option) { return api.post("/check/phone", option) }


// 意见反馈
export function feedback(option) { return api.post("/feedback", option) }


// 邀请接口
export function invitation{accountNo}(option) { return api.post("/invitation/{accountNo}", option) }


// 我的信息
export function my(option) { return api.post("/my", option) }


// 我的帖子列表
export function myCard(option) { return api.post("/my/card", option) }


// 我的分身币
export function myCoin(option) { return api.post("/my/coin", option) }


// 我的分身币明细
export function myCoinLog(option) { return api.post("/my/coin/log", option) }


// 我收藏的帖子
export function myCollectionCard(option) { return api.post("/my/collection/card", option) }


// 我的CV
export function myCv(option) { return api.post("/my/cv", option) }


// 我的CV明细
export function myCvLog(option) { return api.post("/my/cv/log", option) }


// 我的粉丝
export function myFans(option) { return api.post("/my/fans", option) }


// 我关注的人
export function myFollowAccount(option) { return api.post("/my/follow/account", option) }


// 我关注的板块
export function myFollowPlate(option) { return api.post("/my/follow/plate", option) }


// 我的收益
export function myIncome(option) { return api.post("/my/income", option) }


// 我的信息-帖子相关
export function myInfo(option) { return api.post("/my/info", option) }


// 我的积分
export function myIntegral(option) { return api.post("/my/integral", option) }


// 我的积分明细
export function myIntegralLog(option) { return api.post("/my/integral/log", option) }


// 我点赞的帖子
export function myLikeCard(option) { return api.post("/my/like/card", option) }


// 我的团队
export function myTeam(option) { return api.post("/my/team", option) }


// 二维码
export function qrcode{accountNo}(option) { return api.patch("/qrcode/{accountNo}", option) }


// 修改密码
export function updatePassword(option) { return api.post("/update/password", option) }


// 修改手机号码
export function updatePhone(option) { return api.post("/update/phone", option) }

