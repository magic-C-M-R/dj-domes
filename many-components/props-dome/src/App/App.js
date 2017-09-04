import React, { Component } from 'react'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
      <Signup />
      <Login />
      </div>
    )
  }
}

export default App;
