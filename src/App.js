import React, { Component, Fragment } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header/header.js';
import Account from './components/Account/Login/login';

import './App.scss'


class App extends Component {

  render() {
    return (
      <Fragment>
            <Switch>
                <Route exact path="/" component={Header} />
                <Route exact path="/login" component={Account} /> 
            </Switch>
        </Fragment>
    );
  }
}

export default App;
