



// 设置 login状态
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';

export function setLoginState(state){
    return {type:SET_LOGIN_STATE, state: state}
}

//设置 loading状态
export const SET_LOADING_STATE = 'SET_LOADING_STATE';

export function setLoadingState(state){
    return {type:SET_LOADING_STATE, state: state}
}

// 设置 message 提示信息
export const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(text){
    return {type:SET_MESSAGE, message: text}
}
