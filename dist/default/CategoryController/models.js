import store from '../store/store.js';
import * as ActionTypes from '../constants/constants.js';
import { isUser, isWxUser, path, saveData, loadData, removeData, requstPromise } from '../util/utils.js';
import request from '../api/request.js';

// antd 按需加载
import { Toast } from '@ant-design/react-native';



// 分类分页查询
export async function categoryList(options) {
    const { dispatch } = store
    const res = await request.categoryList(options)
    return requstPromise(res, () => {

    })
}

    
