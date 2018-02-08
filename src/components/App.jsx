import React from 'react';
import Nav from './Nav';
import Body from './Body';
import UserForm from './UserForm';
import Footer from './Footer';
import CreatorsList from './CreatorsList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/signin' component={UserForm}/>
        <Route path='/login' component={UserForm}/>
        <Route path='/creators' component={CreatorsList}/>
      </Switch>
      <Footer />


    </div>

  );
}

export default App;
