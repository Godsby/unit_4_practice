import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostList from './components/PostList';
import AlbumList from './components/AlbumList';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          <Switch>
            <Route exact path='/' render={() => {return <h1>Welcome to My Website</h1>}}/>
            <Route path='/posts' component={PostList} />
            <Route path='/albums' component={AlbumList} />
            <Route path='/todos' component={TodoList} />
            <Route path='/users' component={UserList} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;