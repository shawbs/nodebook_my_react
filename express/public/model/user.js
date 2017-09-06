const mongoose = require('mongoose');
//获取模型
const UserSchema = require('./user.schema');
//编译成模型
const User = mongoose.model('User', UserSchema);

//导出
module.exports = User