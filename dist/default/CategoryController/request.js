import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 分类分页查询
export function categoryList(option) { return api.post("/category/list", option) }

