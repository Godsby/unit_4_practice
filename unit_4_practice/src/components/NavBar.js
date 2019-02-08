import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a href='/' className="brand-logo center left">Unit_4_Practice</a>
        <ul className="right">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/albums'>Albums</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;