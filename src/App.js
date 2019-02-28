import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.js'
import HomepageGender from './pages/HomepageGender/HomepageGender.js';
import Account from './pages/Account/Account.js';
import ProductSingle from './pages/ProductSingle/ProductSingle.js';
import MyCart from './pages/MyCart/MyCart.js'

import './App.scss';

class App extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/:department" component={HomepageGender}/>
                    <Route exact path="/:department/:id" component={ProductSingle}/>
                    <Route exact path="/login" component={Account}/>
                    <Route exact path="/basket" component={MyCart}/>
                </Switch>
            </>
        );
    }
}

export default App;
