import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 商品搜索
export function search(option) { return api.post("/search", option) }


// 用户搜索记录
export function searchLog(option) { return api.post("/search/log", option) }


// 用户搜索记录
export function searchLogDel(option) { return api.post("/search/log/del", option) }


// 热门搜索/推荐搜索词
export function searchRecommend(option) { return api.post("/search/recommend", option) }

