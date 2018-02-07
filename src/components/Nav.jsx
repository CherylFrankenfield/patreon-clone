import React from 'react';

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'lightgrey',
  height: 70
}
const navRight = {
  display: 'flex',
  justifyContent: 'space-around'
}

function Nav() {
  return(
    <div style={nav}>
        <h1>Matreon </h1>
        <div style={navRight}>
        <input defaultValue="Search"></input>
        <a>Start My Page </a>
        <a>Explore Creators </a>
        <a>Sign Up </a>
        <a>Log In</a>
      </div>
    </div>
  );
}

export default Nav;
