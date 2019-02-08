import React, {Component, Fragment} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Header from './components/Header/header.js';
import Account from './components/Account/account.js';

import './App.scss'

class App extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Header}/>
                    <Route exact path="/footer" component={Account}/>
                </Switch>
            </>
        );
    }
}

export default App;
