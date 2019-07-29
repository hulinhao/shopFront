/*
 * ajax 方法简单封装，底层调用的是 vue 官方推荐库 axios
 */
import axios from 'axios';
import qs from 'qs';
import _ from 'lodash';

// 初始化axios
let instance = axios.create({
  timeout: 60000
});

let $post = function ({url, data, method}) {
  return instance({
    method: 'post',
    url: url,
    data: qs.stringify(_.merge({}, data))
  }).then(data => {
    // 当账号在其他处登录的时候需要删除token/uid等基本信息
     return data;
  }, (error) => {

  })
};
//
export const $get = function ({url, data}) {
  return instance({
    url,
    method: 'get',
    params: _.merge({}, data),
  }).then(data => {
    return data;
  }, (error) => {
    // toast(null, '网络不给力，请重新尝试')
  })
};

export default $post;
