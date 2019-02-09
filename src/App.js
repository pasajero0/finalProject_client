import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Account from './components/Account';
import HomePage from './pages/HomePage';

import './App.scss'

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/login" component={Account}/>
                </Switch>
            </>
        );
    }
}

export default App;