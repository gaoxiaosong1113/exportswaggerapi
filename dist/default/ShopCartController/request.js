import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 加入购物车
export function shopCartAdd(option) { return api.post("/shop/cart/add", option) }


// 删除购物车中一个或多个商品
export function shopCartDel(option) { return api.post("/shop/cart/del", option) }


// 我的购物车商品列表
export function shopCartList(option) { return api.post("/shop/cart/list", option) }


// 修改购物车商品数量或规格
export function shopCartUpdate(option) { return api.post("/shop/cart/update", option) }

