import React from 'react';
import axios from 'axios';

class PostList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      comments: [],
      users: []
    }
  }

  componentDidMount () {
    this.fetchPostData('posts');
    this.fetchPostData('comments');
    this.fetchPostData('users');
  }

  fetchPostData = async (route) => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/' + route)
    this.setState({
      [route]: res.data.slice(0,50)
    })
  }

  render () {
    // console.log(this.state)
    const { posts, comments, users } = this.state;
    if (!posts.length || !comments.length || !users.length) {
      return null;
    }
    //loop through the posts array to find out posts and their corresponding comments and user ids.
    let postList = posts.map(post => {

      let userList = users.find(user => user.id === post.userId);
      //loop through the comments array to find out the comments for each specific post.
      let commentsList = comments.map(comment => {
        
        if (comment.postId === post.id) {
          // imbed the comments into render with JSX
          return <li key={comment.id}>{comment.body}</li>
        } else {
          return null;
        }
      })
      //return the posts with their comments as well as user ids
      return (
        <div className="post card" key={post.id}>
          <h5>Post Id: {post.id}</h5>
          <span>Title: {post.title}</span>
          <p>{post.body}</p>
          <ol>
            <p>UserId: {userList.name}</p>
            {commentsList}
          </ol>
        </div>
      )
    })
    // return the whole function inside a container div.
    return (
      <div className="container center">
        { postList }
      </div>
    )
  }
}

export default PostList;