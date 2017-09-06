import React, { Component } from 'react';
import {
	Link,
  IndexLink,
  hashHistory
} from 'react-router';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  Glyphicon
} from 'react-bootstrap';

import $ from 'jquery';

import {API} from '../common/service';
import {FormExp} from '../common/formExp';

export default class RegisterComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      formState:{
        usernameState:undefined,
        passwordState:undefined,
        pwdTState:undefined,
        agreementState:undefined

      },
      disabled:true
    }
    this.handleRegister = this.handleRegister.bind(this);
  }
  componentDidMount(){
    console.log(API)
    this.FormControl = $('.form-control');
    this.FormControl.on('change',e=>{
      this.handleChange(e);
    });
  }
  componentWillUnmount(){
    this.FormControl.off('change');
  }
  handleChange(e){
    FormExp.watchChange(this,e.target,this.state.formState)
  }

  handleRegister(){
     
    let paramter = {
      username: this.regForm.username.value,
      password: this.regForm.password.value
    } 
    //如果表单控件状态都为'success'
    if(FormExp.checkForm(this.state.formState)){

      API.httpPost('/register',paramter).then(data=>{
        console.log(data);
      })
      //hashHistory.push('/');
    }

  }
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <h1 className="text-center margT30 margB30"><IndexLink to="/" className="logo">BOOK</IndexLink></h1>
          <div className="login">
          <form ref={el=>this.regForm = el}>
            <FormGroup controlId="formControlsTextarea" validationState={this.state.formState.usernameState}>
              <ControlLabel>用户名</ControlLabel>
              <FormControl type="text" placeholder="输入邮箱" name="username"/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea" validationState={this.state.formState.passwordState}>
              <ControlLabel>用户密码</ControlLabel>
              <FormControl type="password" placeholder="输入密码、不能少于6位" name="password"/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea" validationState={this.state.formState.pwdTState}>
              <ControlLabel>确定密码</ControlLabel>
              <FormControl type="password" placeholder="再次输入密码" name="pwdT"/>
              <FormControl.Feedback />
            </FormGroup>
            <Checkbox name="agreement" validationState={this.state.formState.agreementState} onChange={this.handleChange.bind(this)}>
              同意用户协议
            </Checkbox>
            <div className="relative">
              <Button bsStyle="danger" type="button" onClick={this.handleRegister} disabled={this.state.disabled}>
                注册
              </Button>&nbsp;&nbsp;&nbsp;
              <Button type="submit">
                <Link to="/login">已有帐户</Link>
              </Button>
    
            </div>
            </form>
          </div>
          
        </div>
      </div>
    );
  }
}

 
