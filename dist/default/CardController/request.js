import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 收藏/取消收藏 帖子
export function cardCollection(option) { return api.post("/card/collection", option) }


// 发表评论
export function cardComment(option) { return api.post("/card/comment", option) }


// 删除 评论/回复
export function cardCommentDel(option) { return api.post("/card/comment/del", option) }


// 评论/回复 列表
export function cardCommentList(option) { return api.post("/card/comment/list", option) }


// 删除帖子
export function cardDel(option) { return api.post("/card/del", option) }


// 帖子详情
export function cardDetail(option) { return api.post("/card/detail", option) }


// 关注/取消关注 帖子发布人
export function cardFollowAccount(option) { return api.post("/card/follow/account", option) }


// 商品帖子列表
export function cardGoodsList(option) { return api.post("/card/goods/list", option) }


// 点赞/取消点赞 帖子
export function cardLike(option) { return api.post("/card/like", option) }


// 板块帖子列表
export function cardList(option) { return api.post("/card/list", option) }


// 我发布帖子列表
export function cardMyList(option) { return api.post("/card/my/list", option) }


// 保存帖子
export function cardSave(option) { return api.post("/card/save", option) }

