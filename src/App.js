import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Homepage from './pages/Homepage';
import Account from './pages/Account';
import MyCart from './pages/MyCart/MyCart'

import './App.scss'

class App extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/login" component={Account}/>
                    <Route exact path="/cart" component={MyCart}/>
                </Switch>
            </>
        );
    }
}

export default App;
