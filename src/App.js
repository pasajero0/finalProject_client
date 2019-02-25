import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Homepage from './pages/Homepage/Homepage.js'
import HomepageWomen from './pages/HomepageWomen/HomepageWomen.js';
import HomepageMen from './pages/HomepageMen/HomepageMen.js';
import Account from './pages/Account/Account.js';
import MyBasket from './pages/MyBasket/MyBasket.js';
import Products from './pages/Products/Products.js';
import ProductSingle from './pages/ProductSingle/ProductSingle.js';

// import MyCart from './pages/MyCart/MyCart.js'

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
                    <Route exact path="/basket" component={MyBasket}/>
                    <Route exact path="/products" component={Products} />
                    <Route path="/products/:id" component={ProductSingle} />
                </Switch>
            </>
        );
    }
}

export default App;
