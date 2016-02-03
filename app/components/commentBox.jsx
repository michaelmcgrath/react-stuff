import React, { Component } from 'react'

import CommentForm from './commentForm.jsx'
import CommentList from './commentList.jsx'

class CommentBox extends Component {

  render () {
    return <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
    </div>
  }
}

export default CommentBox
