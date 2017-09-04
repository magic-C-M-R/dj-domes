import React, { Component } from 'react';
import './app.css';
import Next from '../Next/Next'
import Previous from '../Previous/Previous'

class App extends Component {

  getInitialState() {
    return{
      count: 0
    }
  }
  render() {
    return (
      <div className="app">
        <Previous />
        <h1>数量：{this.getInitialState.count}</h1>
        <Next />
      </div>
    );
  }
}

export default App;
