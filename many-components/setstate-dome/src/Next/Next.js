import React, { Component } from 'react'
import './next.css'

class Next extends Component {

  increment(){
    this.setState({ count: this.state.count  + 1})
  }
  render() {
    return (
      <div className="next">
      <button onClick ={this.increment}>next</button>
      </div>
    )
  }
}
export default Next
