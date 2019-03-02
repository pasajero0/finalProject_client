import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import HomepageGender from './pages/HomepageGender/HomepageGender';
import Account from './pages/Account/Account';
import Profile from './pages/Profile/Profile';
import MyCart from './pages/MyCart/MyCart';
import ResetPassword from './pages/ResetPassword/ResetPassword';

import './App.scss';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Account} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/cart" component={MyCart} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/reset-password/:token" component={ResetPassword} />
      <Route exact path="/:department" component={HomepageGender} />
      <Route exact path="/:department/page/:page" component={HomepageGender} />
    </Switch>
  </>
);

export default App;
