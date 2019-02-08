import React from 'react';
// import axios from 'axios';

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  render () {
    return (
      <div>
        <h3>UserList is working</h3>
      </div>
    )
  }
}

export default UserList;