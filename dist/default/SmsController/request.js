import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// 发送验证码
export function smsSend(option) { return api.post("/sms/send", option) }

