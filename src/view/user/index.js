import React, { Component } from 'react';
import {
  Loader,
  Toast
} from '../../component/commonbase';



import store from '../../store';
// import {setLoadingState} from '../../store/action';
import {connect } from 'react-redux';

class User extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props.message)
    return (
      <div>
        <Loader loading={this.props.loading} loaderText="please wait..." enableclose={false} />
        <Toast message={this.props.message}/>
        {this.props.children}
      </div>
    );
  }
}

/**
 * 从 redux 的state中获取state  
 * redux ---> 组件
 * @param {*} state 
 */
function mapStateToProps(state){
  // state 对应store.getState()
  console.log(state)
  return {
    loading:state.loadingState,
    message:state.message
  }
}

/**
 *  组件中发射action 映射到redux的action和reducer
 */
// function mapDispatchToProps(dispatch){
//     return {
//        showLoader: ()=> dispatch(setLoadingState(true)),
//        hideLoader: ()=> dispatch(setLoadingState(false))     
//     }
// }

export default connect(mapStateToProps)(User)