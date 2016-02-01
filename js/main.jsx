import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let HelloMessage = React.createClass({
  render() {
    return <div>Hello {this.props.name} </div>
  }
})

ReactDOM.render(<HelloMessage name="Michael" />, mountNode)
