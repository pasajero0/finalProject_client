import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Header from './components/Header';
import Account from './components/Account';
import Footer from './components/Footer';

import './App.scss'

class App extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Header}/>
                    <Route exact path="/login" component={Account}/>
                    <Route exact path="/footer" component={Footer}/>
                </Switch>
            </>
        );
    }
}

export default App;
