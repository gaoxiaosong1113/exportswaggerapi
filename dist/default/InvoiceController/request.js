import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 添加发票
export function invoiceAdd(option) { return api.post("/invoice/add", option) }


// 获取默认发票
export function invoiceDefault(option) { return api.post("/invoice/default", option) }


// 删除发票
export function invoiceDel(option) { return api.post("/invoice/del", option) }


// 编辑发票
export function invoiceEdit(option) { return api.post("/invoice/edit", option) }


// 获取发票
export function invoiceGet(option) { return api.post("/invoice/get", option) }


// 发票列表
export function invoiceList(option) { return api.post("/invoice/list", option) }

