import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 板块详情
export function plateDetail(option) { return api.post("/plate/detail", option) }


// 关注/取消 板块
export function plateFollow(option) { return api.post("/plate/follow", option) }


// 热门板块列表
export function plateHotList(option) { return api.post("/plate/hot/list", option) }


// 板块列表
export function plateList(option) { return api.post("/plate/list", option) }

