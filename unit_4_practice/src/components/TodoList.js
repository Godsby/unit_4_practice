import React from 'react';
// import axios from 'axios';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  render () {
    return (
      <div>
        <h3>TodoList is working</h3>
      </div>
    )
  }
}

export default TodoList;