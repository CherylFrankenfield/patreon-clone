import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'lightgrey',
  height: 70
};
const navRight = {
  display: 'flex',
  justifyContent: 'space-around'
};

function Nav() {
  return(
    <div style={nav}>
      <h1><Link to="/">Matreon</Link></h1>
      <div style={navRight}>
        <input defaultValue="Search"></input>
        <a>Start My Page </a>
        <a>Explore Creators </a>
        <Link to="/signin">Sign In</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Nav;
