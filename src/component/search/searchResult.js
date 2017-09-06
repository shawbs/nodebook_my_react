import React, {Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import {Link} from 'react-router';

//组件
import {
	HeaderBar,
	PlayList,
	PlayListNav
} from '../common/commonbase';
import {
	Panel,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';

import PubSub from '../../js/PubSub';

export default class SearchResult extends Component{
	constructor(props) {
		super(props);
		this.state = {
			loading:true,
			error:false,
			data:null
		}
	}
	componentDidMount() {
		this.doSearch(this.props.params.name);
		PubSub.subscribe('search',(query)=>{
			this.doSearch(query);
		});
	}
	doSearch(query){
		this.setState({
			loading:false
		})
	}
	render(){
		let title = `搜索 ${this.props.params.name} 的结果:`;
		return (
			<div className="container">
				{!this.state.loading ?(
				  <Panel collapsible defaultExpanded header={title}>
				  	{this.state.data}
				    <ListGroup fill>
				      <ListGroupItem>Item 1</ListGroupItem>
				      <ListGroupItem>Item 2</ListGroupItem>
				      <ListGroupItem>&hellip;</ListGroupItem>
				    </ListGroup>
				  </Panel>
				  ):(<div>loading...</div>)
			  	}
			</div>
		)
	}
}


