import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 上传文件
export async function upload(options) {
    const { dispatch } = store
    const res = await request.upload(options)
    return requstPromise(res, () => {

    })
}

    
