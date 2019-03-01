import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'
import HomepageGender from './pages/HomepageGender/HomepageGender';
import Account from './pages/Account/Account';
import Profile from './pages/Profile/Profile';
import MyCart from './pages/MyCart/MyCart';
import ResetPassword from './pages/ResetPassword/ResetPassword';

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
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/cart" component={MyCart}/>
                    <Route exact path="/reset-password" component={ResetPassword}/> 
                    <Route exact path="/reset-password/:token" component={ResetPassword}/>
                </Switch>
            </>
        );
    }
}

export default App;

