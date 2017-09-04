import React, { Component } from 'react'
import './onclick.css'

class Onclick extends Component {
  state ={
    count: 0
  }

  increment = () => {
    this.setState({
      count:this.state.count +1
    })
  }
  outcrement = () =>{
    this.setState({count:this.state.count -1})
    
  }
  render() {
    return (
      <div className="onclick" >
      <a href='#' onClick={this.increment}> 加</a>
      <p>数量:{this.state.count}</p>
      <a href='#' onClick={this.outcrement}> 减</a>
      </div>
    )
  }
}

export default Onclick;
