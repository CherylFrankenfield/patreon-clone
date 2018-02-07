import React from 'react';
import Nav from './Nav';
import Body from './Body';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Body} />
      </Switch>
    </div>

  );
}

export default App;
