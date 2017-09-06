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
} from '../common/commonbase';

export default class RankComponent extends Component{
    render(){
        return (
            <div className="rank-page">
                <BookListNav />
                <section>
                    <div className="container">
                        <RankBar />
                    </div>
                </section>
            </div>
        )
    }
}