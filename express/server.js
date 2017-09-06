const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

const _ = require('underscore');

//mongoose
const mongoose = require('mongoose');

const port = process.env.PORT || 8090;

// connect mongoose
mongoose.connect('mongodb://localhost/user');

app.locals.moment = require('moment');

//静态资源请求路径
app.use(express.static(path.join(__dirname, 'public')));

// 添加json解析中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.listen(port,()=>{
	console.log('server runing on http://127.0.0.1:' + port);
});

/**
*     api
*/

const User = require('./public/model/user');

//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

//登录接口
app.post('/login', (req, res) => {

	//用了bodyParser就可以采用这种req.body.movie获取前端页面传过来的值，以json格式包装
	let username = req.body.username;
	let password = req.body.password;
	let _user;

	User.fetchByName(username, (err,user)=>{
		if(err) return console.error(err)
		if(user && user.password === password){
			res.status(200);
			_user = _.pick(user,'_id','username','meta');
			console.log(_user)
			res.json({state:true,message:'登录成功',data:_user});
		}else{
			res.json({state:false,message:'用户密码错误'})
		}
	})
})

//注册接口
app.post('/register', (req,res) =>{
	//用了bodyParser就可以采用这种req.body.movie获取前端页面传过来的值，以json格式包装
	let username = req.body.username;
	let user = req.body;
	console.log(req.body)
	// let _user;
	User.fetchByName(username,(err,data)=>{
		if(err) return console.error(err)
		console.log(data)
		if(!data){
			_user = new User(user);
			_user.save((err,user)=>{
				if(err) return console.error(err)
				res.status(200)
				res.json({state:true,message:'注册成功'})
			})
		}else{
			res.json({state:false,message:'该用户已注册'})
		}
	})
})

//获取用户组
app.get('/getUser',(req,res)=>{
	User.fetch((err,users)=>{
		if(err) return console.error(err)
		res.status(200);
		res.json(users);
	})
})