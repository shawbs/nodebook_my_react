import React, { Component } from 'react';
import './style/App.css';
import {
  HeaderBar,
  Loader,
  Toast
} from './component/commonbase';



import store from './store';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading:false,
      content:'123123123123'
    }
  }
  render() {
    console.log(this.props)
    let loadingState = store.getState().loadingState;
    return (
      <div className="App">
        <Loader loading={loadingState} loaderText="please wait..." enableclose={false} />
        <Toast content={this.state.content}/>
        <HeaderBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
