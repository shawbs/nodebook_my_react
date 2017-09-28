import React, { Component } from 'react';


import {
	Bookshelf
} from '../../component/commonbase';
export default class MyBookShelfComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            loginstate:false
        }
    }
    componentDidMount() {
		this.setState({
            // loginstate:localStorage.loginState
            loginstate:true
        });
        document.body.style.backgroundColor='gray';
    }
    componentWillUnmount(){
        document.body.style.backgroundColor='white';
    }
    render(){
        return (
            <div className="mybookshelf-page">
                <div className="container">
                    { this.state.loginstate?<Bookshelf/>:<p>你没有登录！</p>}
                </div>
            </div>
        )
    }
}