import React, { Component } from 'react'
import './onclick.css'

class Onclick extends Component {
  say (){
    alert('禁止点击此处')
  }

  render() {
    return (
      <div className="onclick" >
      <h1 onClick={this.say}> Click Me</h1>

      </div>
    )
  }
}

export default Onclick;
