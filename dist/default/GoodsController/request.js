import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 发布商品评价
export function goodsAppraise(option) { return api.post("/goods/appraise", option) }


// 发布商品评价的评论
export function goodsAppraiseComment(option) { return api.post("/goods/appraise/comment", option) }


// 商品评价评论列表
export function goodsAppraiseCommentList(option) { return api.post("/goods/appraise/comment/list", option) }


// 商品评价详情
export function goodsAppraiseDetail(option) { return api.post("/goods/appraise/detail", option) }


// 商品评价列表
export function goodsAppraiseList(option) { return api.post("/goods/appraise/list", option) }


// 商品属性/规格
export function goodsAttribute(option) { return api.post("/goods/attribute", option) }


// 商品收藏
export function goodsCollection(option) { return api.post("/goods/collection", option) }


// 商品收藏列表
export function goodsCollectionList(option) { return api.post("/goods/collection/list", option) }


// 商品详情
export function goodsDetail(option) { return api.post("/goods/detail", option) }

