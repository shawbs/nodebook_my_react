import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducer from './reducer';

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }
const store = createStore(combineReducers(reducer),applyMiddleware(thunk));

export default store;