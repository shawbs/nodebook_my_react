import React, {Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import {browserHistory,hashHistory,Link,IndexLink } from 'react-router';
import {
	Button,
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
	Grid,
	Row,
	Col,
	Carousel,
	Thumbnail,
	FormGroup,
	ControlLabel,
	FormControl,
	Glyphicon,
	InputGroup,
	ListGroup,
	ListGroupItem,
	Media,
	Pagination
} from 'react-bootstrap';


import PubSub from '../../js/PubSub';

//测试数据
import * as data from '../../js/data';

//头部组件
class HeaderBar extends Component{
	constructor(props){
		super(props);
		this.state={
			loginState:false,
			user:{}
		}
		this.handleExit = this.handleExit.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	componentDidMount() {
		let user = localStorage.getItem('userO');
		user = JSON.parse(user);
		if(!!user && typeof user._id != undefined){
			this.setState({
				loginState:true,
				user:user
			})
		}
	}
	handleExit(e){
		e.preventDefault();
		this.setState({loginState:false});
		localStorage.removeItem('userO');
	}
	handleSearch(e){
		//enter触发搜索
		if(e.keyCode === 13){
			console.log('search...');
			let searchValue = e.target.value;
			browserHistory.push(`/searchResult/${searchValue}`);
			//发布搜索事件
			PubSub.publish('search',searchValue);
		}
	}
	render(){
		return(
			<Navbar inverse collapseOnSelect id="header">
				<Navbar.Header>
				<Navbar.Brand>
					<IndexLink  to="/">BOOK</IndexLink >
				</Navbar.Brand>
				<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
				<Nav>
					<li>
						<Link to="/mybookshelf">我的书架</Link>
					</li>
					<li>
						<Link to="/rank">排行榜</Link>
					</li>
				</Nav>
				<Navbar.Form pullLeft>
					<FormGroup className="maR10">
						<InputGroup>
							<InputGroup.Button>
								<Button><Glyphicon glyph="search"/></Button>
							</InputGroup.Button>
							<FormControl type="text" placeholder="书名/作者" onKeyUp={this.handleSearch}/>
						</InputGroup>
					</FormGroup>
				</Navbar.Form>
				{this.state.loginState?(
					<Nav pullRight>
						<NavDropdown eventKey={3} title={this.state.user.username} id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3} onClick={this.handleExit}>退出</MenuItem>
						</NavDropdown>
					</Nav>	
					):(

					<Nav pullRight className="navLogin">
						<Button bsStyle="danger"><Link to="/login">登入</Link></Button>
						<Button bsStyle="link"><Link to="/register">注册</Link></Button>	
					</Nav>
				)}
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

//搜索组件
class SearchSection extends Component{
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		let searchValue = e.target.value;
	}
	render(){
		return(
			<section>
				<div className="container">
					<div className="search">
						<FormControl type="text" placeholder="搜索从这里开始" onChange={this.handleChange} />
					</div>
				</div>
			</section>
		)
	}
}


//banner组件
class BannerBar extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			bookArr:[]
		}
	}
	componentDidMount() {
		this.setState({
			bookArr:data.palyArr,
			loading:false
		})
	}
	render(){		
		return(
			<Carousel>
				{
					this.state.bookArr.map((item,index)=>{
					    return (
					    	<Carousel.Item key={index}>
						      <img width={900} height={500} alt="900x500" src={item.imgUrl}/>
						      <Carousel.Caption>
						        <h3>First slide label</h3>
						        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						      </Carousel.Caption>
						    </Carousel.Item>
					    )
				    })
			    }
			</Carousel>
		)
	}
}

// BannerBar.propTypes = {
// 	imgArr:React.PropTypes.array.isRequired
// }

//独家组件
class ExclusiveBook extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			bookArr:[]
		}
	}
	componentDidMount() {
		this.setState({
			bookArr:data.palyArr,
			loading:false
		})
	}
	render(){
		return (
			<section>
				<div className="container">
					<h3>独家放送</h3>
					<Row>
						{this.state.bookArr.map((item,index)=>{
							if(index<4){
								return (
									<Col sm={6} md={3} key={index}>
										<Thumbnail src={item.imgUrl}>
											<p >{index+1 + ":"+ item.innerTile}</p>
										</Thumbnail>
									</Col>
								)
							}
						})}
					</Row>
				</div>
			</section>
		)
	}
}

//首页头部区域
class HomeTopSection extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			hotPlaylist:[]
		}
	}
	componentDidMount() {
		this.setState({
			hotPlaylist:data.hotPlaylist,
			loading:false
		})
	}
	render(){
		return (
			<section className="head-section">
				<Grid>
					<Row>
						<Col md={8}>
							<h3>热门小说</h3>							
							<BannerBar/>
						</Col>
						<Col md={4}>
							<h3>找书</h3>
							<Row className="hot-playlist">
								{
									this.state.hotPlaylist.map((item,index)=>{
										return (
											<Col sm={6} key={index}>
												<Button block data-keyId={item.keyId} style={{color:item.color}} bsStyle="default">{item.title}</Button>
											</Col>
										)
									})
								}
								
							</Row>
						</Col>
					</Row>
				</Grid>
			</section>
		)
	}
}

//歌单组件
class BookList extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			bookArr:[]
		}
	}
	componentDidMount() {
		this.setState({
			bookArr:data.palyArr,
			loading:false
		})
	}
	render(){
		return(
			<section>
				<div className="container">
					<h3>{this.props.title}</h3>
					<Row className="book-list">
						<Col sm={6} md={3}>
							<Thumbnail src={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503651594673&di=227436fe1dd5da6cf9709be9458f5db3&imgtype=0&src=http%3A%2F%2Fpic75.nipic.com%2Ffile%2F20150820%2F9530510_133307211791_2.jpg'}>
								<p>每日小说推荐</p>
							</Thumbnail>
						</Col>
						{this.state.bookArr.map((item,index)=>{
							return (
								<Col sm={6} md={3} key={index}>
									<Link to="/playlist">
										<Thumbnail src={item.imgUrl}>
											<p>{item.innerTile}</p>
										</Thumbnail>
									</Link>
								</Col>
							)
						})}
					</Row>
				</div>
			</section>
		)
	}
}

class BookListNav extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			hotPlaylist:[]
		}
	}
	componentDidMount() {
		this.setState({
			hotPlaylist:data.hotPlaylist,
			loading:false
		})
	}
	render(){
		return(
			<section>
				<div className="container">
					<h3>全部分类</h3>
					<div className="playlsitNav">
						{
							this.state.hotPlaylist.map((item,index)=>{
								return (

									<Button key={index} data-keyId={item.keyId} style={{color:item.color}} bsStyle="default">{item.title}</Button>

								)
							})
						}
						
					</div>
				</div>
			</section>
		)
	}
}

//rankbar
class RankBar extends Component{
	constructor(props){
		super(props);
		this.state={
			asd:'123'
		}
	}
	componentDidMount() {
	}
	render(){
		return (
			<div className="rank">
				<Media.List>
					<Media.ListItem>
						<Media.Left align="top">
						<img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
						</Media.Left>
						<Media.Body>
						<Media.Heading><Link to={`/bookinfo/${this.state.asd}`}>Top aligned media</Link></Media.Heading>
						<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				
						<p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
						</Media.Body>
					</Media.ListItem>
					<Media.ListItem>
						<Media.Left align="top">
						<img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
						</Media.Left>
						<Media.Body>
						<Media.Heading>Top aligned media</Media.Heading>
						<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				
						<p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
						</Media.Body>
					</Media.ListItem>
					<Media.ListItem>
						<Media.Left align="top">
						<img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
						</Media.Left>
						<Media.Body>
						<Media.Heading>Top aligned media</Media.Heading>
						<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
				
						<p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
						</Media.Body>
					</Media.ListItem>
			    </Media.List>
			</div>
		)
	}
}

//bookshelf
class Bookshelf extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			bookArr:[]
		}
	}
	componentDidMount() {
		setTimeout(()=>{

			this.setState({
				loading:false,
				bookArr:data.palyArr
			})
			
		},3000)
	}
	render(){
		return (
			<Row bsClass="bookshelf">
				{!this.state.loading?(this.state.bookArr.map((item,index)=>{
					return (
						<Col sm={2} key={index}>
							<Link to={`bookinfo/123`}>
								<Thumbnail src={item.imgUrl} bsClass="bookshelf-item">
									<p>{index+1 + ":"+ item.innerTile}</p>
								</Thumbnail>
							</Link>
						</Col>
					)})):(<div>loading...</div>)
				}
			</Row>
		)
	}
}

//comment
class Comment extends Component{
	constructor(props){
		super(props);
		this.state={
			activePage:2
		}
		this.handleSelect=this.handleSelect.bind(this)
	}
	handleSelect(eventKey){
		this.setState({
			activePage:eventKey
		})
	}
	render(){
		return (
			<div className="comment-box">
				<div className="comment-header">
					<from>
					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>评论</ControlLabel>
						<FormControl componentClass="textarea" placeholder="textarea" />
					</FormGroup>
					<Button bsStyle="danger" type="submit">
						发送
					</Button>
					</from>
				</div>
				<Media>
					<Media.Left>
						<img width={50} height={50} src="/assets/thumbnail.png" alt="Image"/>
					</Media.Left>
					<Media.Body>
						<Media.Heading>Media Heading</Media.Heading>
						<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
						<div className="media-bottom text-right">
							<a href="javascript:;" className="margL10"><Glyphicon glyph="thumbs-up" />赞同(123)</a>
							<a href="javascript:;" className="margL10"><Glyphicon glyph="thumbs-down" />反对</a>
							<a href="javascript:;" className="margL10">回复</a>
						</div>
						<Media>
							<Media.Left>
								<img width={50} height={50} src="/assets/thumbnail.png" alt="Image"/>
							</Media.Left>
							<Media.Body>
								<Media.Heading>Nested Media Heading</Media.Heading>
								<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
								<div className="media-bottom text-right">
									<a href="javascript:;" className="margL10"><Glyphicon glyph="thumbs-up" />赞同(123)</a>
									<a href="javascript:;" className="margL10"><Glyphicon glyph="thumbs-down" />反对</a>
									<a href="javascript:;" className="margL10">回复</a>
								</div>
							</Media.Body>
						</Media>
					</Media.Body>
				</Media>
				<Media>
					<Media.Left>
						<img width={50} height={50} src="/assets/thumbnail.png" alt="Image"/>
					</Media.Left>
					<Media.Body>
						<Media.Heading>Nested Media Heading</Media.Heading>
						<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
						<div className="media-bottom text-right">
							<a href="javascript:;" className="margL10"><Glyphicon glyph="thumbs-up" />赞同(123)</a>
							<a href="javascript:;" className="margL10"><Glyphicon glyph="thumbs-down" />反对</a>
							<a href="javascript:;" className="margL10">回复</a>
						</div>
					</Media.Body>
				</Media>

				<div className="text-center">

					<Pagination
						prev
						next
						first
						last
						ellipsis
						boundaryLinks
						items={20}
						maxButtons={5}
						activePage={this.state.activePage}
						onSelect={this.handleSelect} />
				</div>
			</div>
		)
	}
}

export {SearchSection,HeaderBar,HomeTopSection,BookList,ExclusiveBook,BookListNav,RankBar,Bookshelf,Comment}
