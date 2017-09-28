import React, { Component } from 'react';
import {browserHistory,hashHistory,Link,IndexLink } from 'react-router';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  Glyphicon
} from 'react-bootstrap';

import {LOGIN_API} from '../../api';
import {FormExp} from '../../script/formExp';

import {
  setLoadingState,
  setMessage
}from '../../store/action'
import {connect } from 'react-redux';

class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      disabled:true,
      formState:{
        usernameState:undefined,
        passwordState:undefined,
        agreementState:undefined
      }
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){

  }
  handleChange(e){
    FormExp.watchChange(this,e.target,this.state.formState)
  }
  handleLogin(){
    
    let paramter = {
      username: this.loginForm.username.value,
      password: this.loginForm.password.value
    } 
    //如果表单控件状态都为'success'
    if(FormExp.checkForm(this.state.formState)){
      console.log(this.props)
      this.props.dispatch(setLoadingState(true));
      // this.props.showLoader();
      LOGIN_API(paramter)
        .then(data=>{
        
          this.props.dispatch(setLoadingState(false));
          // this.props.hideLoader();

          if(data.state){
            localStorage.setItem('userO',JSON.stringify(data.data)); 
            browserHistory.push('/');
          }else{
            this.setState({
              message:data.message
            })
          }
      })
      .catch(err=>{
          console.error(err)
          this.props.dispatch(setLoadingState(false));
          this.props.dispatch(setMessage('hehe, 登录失败'));
          setTimeout(()=>{
            this.props.dispatch(setMessage(''));
          },3000)
      })

    }
  }
  
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <h1 className="text-center margT30 margB30"><IndexLink to="/" className="logo">ABOOK</IndexLink></h1>
          <div className="login">
          <form ref={el=>this.loginForm=el}>
            <FormGroup controlId="formControlsTextarea" validationState={this.state.formState.usernameState}>
              <ControlLabel>用户名</ControlLabel>
              <FormControl type="text" placeholder="输入邮箱" name="username" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="formControlsTextarea" validationState={this.state.formState.passwordState}>
              <ControlLabel>用户密码</ControlLabel>
              <FormControl type="password" placeholder="输入密码" name="password" onChange={this.handleChange}/>
            </FormGroup>
            <Checkbox name="agreement" onChange={this.handleChange} validationState={this.state.formState.agreementState}>
              同意用户协议
            </Checkbox>
            <div className="relative">
              <Button bsStyle="danger" type="button" disabled={this.state.disabled} onClick={this.handleLogin}>
                登录
              </Button>&nbsp;&nbsp;&nbsp;
              <Button type="button">
                <Link to="/user/register">注册</Link>
              </Button>
              <Link className="btn-getpwd" to="/user/getpwd">忘记密码&nbsp;<Glyphicon glyph="question-sign" /></Link>
            </div>
            </form>
          </div>
          
        </div>
      </div>
    );
  }
}





export default connect()(LoginComponent)
 
