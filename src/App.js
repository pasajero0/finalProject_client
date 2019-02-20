import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import {NavLink, Route, Switch} from 'react-router-dom';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Homepage from './pages/Homepage/Homepage.js'
import HomepageWomen from './pages/HomepageWomen/HomepageWomen.js';
import HomepageMen from './pages/HomepageMen/HomepageMen.js';
import Account from './pages/Account/Account.js';
import Profile from './pages/Profile/Profile.js';
import MyCart from './pages/MyCart/MyCart'

import './App.scss';

class App extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/women" component={HomepageWomen}/>
                    <Route exact path="/men" component={HomepageMen}/>
                    <Route exact path="/login" component={Account}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/cart" component={MyCart}/>
                </Switch>
            </>
        );
    }
}

export default App;
