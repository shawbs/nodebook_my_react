import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';  //bs3 css
import './index.css'; //全局样式
import routes from './app/App.route';	//路由配置
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
