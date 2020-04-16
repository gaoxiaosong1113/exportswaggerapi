import api from './api';

const requstPromise = res => new Promise((resolve, reject) => { res ? resolve(res) : reject(res) });



// region
export function region(option) { return api.post("/region", option) }

