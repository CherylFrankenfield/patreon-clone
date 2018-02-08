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
      <style jsx global>{`
          .brand {
            border-right: 1px solid black;
            text-decoration: none;
            padding-right: 5%;
          }
          .searchbar {
            height:80%;
          }
          a {
            text-decoration: none;
          }
        }`}</style>
      <h1 className="brand"><Link to="/">Matreon</Link></h1>
      <div style={navRight}>
        <input className="searchbar" defaultValue="Search" />
        <a>Start My Page </a>
        <Link to="/creators">Explore Creators</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Nav;
