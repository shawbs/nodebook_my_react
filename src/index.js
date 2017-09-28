import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //bs3 css
import 'font-awesome/css/font-awesome.min.css'; //font-awesome css
import './style/index.css'; //全局样式
import routes from './router'; //路由配置
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
    {routes}
    </Provider>, document.getElementById('root'));
registerServiceWorker();