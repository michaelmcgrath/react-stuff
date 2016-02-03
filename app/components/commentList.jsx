import React, { Component } from 'react'

import Comment from './comment.jsx'

class CommentList extends Component {

  render () {
    return <div className="commentList">
      <Comment author="Master Chief">I need a weapon</Comment>
    </div>
  }
}

export default CommentList
