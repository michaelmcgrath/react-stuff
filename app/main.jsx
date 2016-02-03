import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import CommentBox from './components/commentBox.jsx'

const main = () => {
  const mountNode = document.createElement('div')

  document.body.appendChild(mountNode)
  ReactDOM.render(<CommentBox />, mountNode)
}

main()
