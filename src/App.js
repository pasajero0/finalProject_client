import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.js'
import HomepageWomen from './pages/HomepageWomen/HomepageWomen.js';
import HomepageMen from './pages/HomepageMen/HomepageMen.js';
import Account from './pages/Account/Account.js';
import MyBasket from './pages/MyBasket/MyBasket.js';
import ProductSingle from './pages/ProductSingle/ProductSingle.js';

// import MyCart from './pages/MyCart/MyCart.js'

import './App.scss';

class App extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/:department" component={HomepageWomen}/>
                    <Route exact path="/women/:id" component={ProductSingle}/>
                    <Route exact path="/men" component={HomepageMen}/>
                    <Route exact path="/men/:id" component={ProductSingle}/>
                    <Route exact path="/login" component={Account}/>
                    <Route exact path="/basket" component={MyBasket}/>
                </Switch>
            </>
        );
    }
}

export default App;
