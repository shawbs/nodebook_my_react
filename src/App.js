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
      loading:false
    }
  }
  render() {
    // let  that = this;
    // store.subscribe(function(){
    //   console.log(store.getState())
    //   that.setState({
    //     loading:store.getState().loadingState
    //   })
    // })
    let loadingState = store.getState().loadingState;
    return (
      <div className="App">
        <Loader loading={loadingState} loaderText="please wait..." enableclose={false} />
        <Toast content="hehe"/>
        <HeaderBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
