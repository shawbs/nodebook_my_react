import React, { Component } from 'react';
import {
	Link,
	IndexLink
} from 'react-router';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  Glyphicon
} from 'react-bootstrap';

export default class GetpwdComponent extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <h1 className="text-center margT30 margB30"><IndexLink to="/" className="logo">BOOK</IndexLink></h1>
          <div className="login">
          <form>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>将发送一份邮件到你注册时填写的邮箱上，请注意查收！
                <Button bsStyle="link">重新发送(60)</Button>
              </ControlLabel>
              <FormControl type="text" placeholder="输入邮箱号" />
            </FormGroup>
            <div className="relative">
              <Button bsStyle="danger" type="submit">
                发送
              </Button>&nbsp;&nbsp;&nbsp;

            </div>
            </form>
          </div>
          
        </div>
      </div>
    );
  }
}

 
