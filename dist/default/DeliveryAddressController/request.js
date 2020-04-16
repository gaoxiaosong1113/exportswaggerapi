import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 获取默认收货地址
export function deliveryAddressDefault(option) { return api.post("/delivery/address/default", option) }


// 通过ID删除收货地址
export function deliveryAddressDel(option) { return api.post("/delivery/address/del", option) }


// 通过id获取收货地址
export function deliveryAddressGet(option) { return api.post("/delivery/address/get", option) }


// 新增收货地址
export function deliveryAddressInsert(option) { return api.post("/delivery/address/insert", option) }


// 收货地址列表
export function deliveryAddressList(option) { return api.post("/delivery/address/list", option) }


// 修改收货地址
export function deliveryAddressUpdate(option) { return api.post("/delivery/address/update", option) }

