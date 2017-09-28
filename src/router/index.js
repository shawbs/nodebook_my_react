import React, {Component} from 'react';
import {
	Router,
	Route,
	IndexRoute,
    browserHistory,
    hashHistory
} from 'react-router';

//导入组件
import App from '../App';
import User from '../view/user';
import HomeComponent from '../view/home/home';
import LoginComponent from '../view/user/login';
import RegisterComponent from '../view/user/register';
import GetpwdComponent from '../view/user/getpwd';
import NotFoundComponent from '../view/notfound/notfound';
import SearchResult from '../view/search/searchResult';
import RankComponent from '../view/rank/rank';
import BookInfoComponent from '../view/bookinfo/bookinfo';
import MyBookShelfComponent from '../view/mybookshelf/mybookshelf';
import ReadingComponent from '../view/reading/reading';


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
			<Route path="user" component={User}>
				<Route path="login" component={LoginComponent}/>
				<Route path="register" component={RegisterComponent}/>
				<Route path="getpwd" component={GetpwdComponent}/>
			</Route>
			<Route path="**" component={NotFoundComponent} />
		</Router>
)

export default routes;