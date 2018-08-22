import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import IncrementCount from '../actions/IncrementAction';
import DecrementCount from '../actions/DecrementAction';



class App extends Component {
  render() {
    return (
      <div className='conteiner'>
          <h1>{this.props.count}</h1>
          <div className="buttons">
            <button onClick={this.props.IncrementCount} className="increment">Increment</button>
            <button onClick={this.props.DecrementCount} className="decrement">Decrement</button>
          </div>
         
          
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  count : state.count
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    IncrementCount: () => {
      dispatch( IncrementCount(1));
    },
    DecrementCount: () => {
       dispatch( DecrementCount(1)); 
    }
  }
}


export default connect( mapStateToProps , mapDispatchtoProps )(App);
