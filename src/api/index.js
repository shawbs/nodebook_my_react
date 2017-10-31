import axios from 'axios';
import config from '../config';

// 设置全局请求url
axios.defaults.baseURL = config.baseURL;
// 开启发送请求时设置cookie
// axios.defaults.withCredentials = true;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const main_url = {
    login_url: '/login',
    register_url:'/register'
}

export const POST_API = (url,paramter) => axios.post(url, paramter);

export const GET_API = (url,param) => axios.get(url, {params: param});

export const LOGIN_API = (paramter) => POST_API(main_url.login_url, paramter);

export const REGISTER_API = (paramter) => POST_API(main_url.register_url, paramter)
