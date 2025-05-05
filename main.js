import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
 
class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    );
  }
}
 
export default Main;