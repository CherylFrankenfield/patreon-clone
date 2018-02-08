import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  borderBottom: '1px solid black',
  height: 70,
  padding: '0 5%'
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
        <input className="searchbar" defaultValue="Search" />
          <style jsx>{`
            .searchbar {
              height:80%;
            }
          `}</style>
        <a>Start My Page </a>
        <a>Explore Creators </a>
        <Link to="/signin">Sign In</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Nav;
