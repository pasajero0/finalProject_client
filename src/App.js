import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Homepage from './pages/HomePage/Homepage.js'
import HomepageWomen from './pages/HomepageWomen/HomepageWomen.js';
import HomepageMen from './pages/HomepageMen/HomepageMen.js';
import Account from './pages/Account';

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
                </Switch>
            </>
        );
    }
}

export default App;
