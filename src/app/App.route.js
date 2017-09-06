import React, {Component} from 'react';
import {
	Router,
	Route,
	IndexRoute,
    browserHistory,
    hashHistory
} from 'react-router';

//导入组件
import App from './App';
import HomeComponent from '../component/home/home';
import LoginComponent from '../component/login/login';
import RegisterComponent from '../component/login/register';
import GetpwdComponent from '../component/login/getpwd';
import NotFoundComponent from '../component/notfound/notfound';
import SearchResult from '../component/search/searchResult';
import RankComponent from '../component/rank/rank';
import BookInfoComponent from '../component/bookinfo/bookinfo';
import MyBookShelfComponent from '../component/mybookshelf/mybookshelf';
import ReadingComponent from '../component/reading/reading';


//配置路由
const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}> 
			<IndexRoute component={HomeComponent} /> 
			<Route path="searchResult(/:name)" component={SearchResult} />
			<Route path="bookinfo(/:name)" component={BookInfoComponent} />
			<Route path="rank" component={RankComponent} />
			<Route path="mybookshelf" component={MyBookShelfComponent} />
			<Route path="reading" component={ReadingComponent} />
		</Route>
		<Route path="login" component={LoginComponent}/>
		<Route path="register" component={RegisterComponent}/>
		<Route path="getpwd" component={GetpwdComponent}/>
		<Route path="**" component={NotFoundComponent} />
	</Router>
)

export default routes;