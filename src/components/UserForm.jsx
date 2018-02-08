import React from 'react';
import SignIn from './SignIn';
import LogIn from './LogIn';
import { Switch, Route } from 'react-router-dom';

const outerDiv = {
  backgroundColor: '#f9e6e6',
  padding: '5% 25%'
};

const innerDiv = {
  backgroundColor: 'white',
  padding: 20,
  height: '60vh',
  width: '50vw'
};

const center = {
  textAlign: 'center',
}

function UserForm() {
  if (window.location.href.indexOf('signin') > -1){
    return(
      <div style={outerDiv}>
        <h1 style={center}>Sign Up</h1>
        <div style={innerDiv}>
          <SignIn/>
        </div>
      </div>
    );
  } else if (window.location.href.indexOf('login') > -1){
    return(
      <div style={outerDiv}>
        <h1 style={center}>Log In</h1>
        <div style={innerDiv}>
          <LogIn

          />
        </div>
      </div>
    );
  }
}

export default UserForm;

// <Route path='/childtwo' component={UserForm}/>




// <Switch>
//   <Route path='/userform/signin' component={SignIn} />
// </Switch>
