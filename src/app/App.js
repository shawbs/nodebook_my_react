import React, { Component } from 'react';
import './App.css';
import {
	HeaderBar
} from '../component/common/commonbase';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
