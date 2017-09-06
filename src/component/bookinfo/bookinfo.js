import React, { Component } from 'react';
import {
  Link,
  IndexLink
} from 'react-router';
import {
  Button,
  Breadcrumb,
  Media,
  Label
} from 'react-bootstrap';

import './bookinfo.css';

import {
	SearchSection,
	HomeTopSection,
	BookList,
  ExclusiveBook,
  Comment
} from '../common/commonbase';

export default class BookInfoComponent extends Component {
  render() {
    return (
      <div className="bookinfo-page">
        <section>
          <div className="container">
            {/*路径导航*/}
            <Breadcrumb>
              <Breadcrumb.Item active>
                <IndexLink  to="/">首页</IndexLink >
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Link to="/rank">排行榜</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {this.props.params.name}
              </Breadcrumb.Item>
            </Breadcrumb>

            <div className="bookinfo margB30">
              <Media>
                <Media.Left align="top">
                  <img width={150} height={200} src="/assets/thumbnail.png" alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>{this.props.params.name}123 <Label bsStyle="default">梦入神机</Label></Media.Heading>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

                  <p>
                  <Button bsStyle="danger"><Link to="/reading">阅读</Link></Button>&nbsp;
                  <Button bsStyle="default" onClick={()=>{console.log('收藏')}}>收藏</Button>	
                  </p>
                </Media.Body>
              </Media>  
            </div>

            <Comment />

          </div>
        </section>
      </div>
    );
  }
}

 
