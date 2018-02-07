import React from 'react';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <h1>It works! Booya</h1>
      <Nav />
      <Switch>

      </Switch>
    </div>

  );
}

export default App;

// <Switch> //
//<Route exact path='/' component={ } />
//</Switch>
