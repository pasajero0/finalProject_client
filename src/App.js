import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import {NavLink, Route, Switch} from 'react-router-dom';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Homepage from './pages/Homepage';
import Account from './pages/Account';

import './App.scss'

class App extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/login" component={Account}/>
                </Switch>
            </>
        );
    }
}

export default App;
