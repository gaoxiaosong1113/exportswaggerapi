import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 海报
export function touristBill{accountNo}{billId}(option) { return api.patch("/tourist/bill/{accountNo}/{billId}", option) }


// 生成商品的分享海报
export function touristBill{goodsId}(option) { return api.patch("/tourist/bill/{goodsId}", option) }


// 临时提供删除用户
export function touristDel{phone}(option) { return api.patch("/tourist/del/{phone}", option) }


// 邀请信息
export function touristInvitation{accountNo}(option) { return api.patch("/tourist/invitation/{accountNo}", option) }

