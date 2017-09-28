import React, { Component } from 'react';

import {
	Link
} from 'react-router';
import {
	Button
} from 'react-bootstrap';

import {
    BookListNav,
	RankBar
} from '../../component/commonbase';

import $ from 'jquery';

export default class ReadingComponent extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        $('#header').hide();
    }
    componentWillUnmount(){
        $('#header').show();
    }
    render(){
        return (
            <div className="reading-page">
                <div className="container">
                    reading...
                </div>
            </div>
        )
    }
}