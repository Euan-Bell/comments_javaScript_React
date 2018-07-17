import React from 'react';
import CommentList from '../components/CommentList.js';

class CommentBox extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      data: [{

        author: "Beth",
        text: "I love cats!"
      },

      { author: "Dave",
      text: "I love cats!"
      },

      { author: "Ben",
      text: "I love cats!"
      }
    ]
}
}

render() {
  return (
    <div>
      <h2>Comments</h2>
      <CommentList data = {this.state.data}/>
    </div>
  )
}

}

export default CommentBox;
