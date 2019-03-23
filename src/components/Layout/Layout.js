import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/Homepage/Homepage';
import Department from '../../pages/HomepageGender/HomepageGender';
import Product from '../../pages/ProductSingle/ProductSingle';
import Account from '../../pages/Account/Account';
import Profile from '../../pages/Profile/Profile';
import MyCart from '../../pages/MyCart/MyCart';
import OrdersHistory from '../../pages/OrdersHistory/OrdersHistory';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Checkout from '../../pages/Checkout/Checkout';
import ThankYou from '../../pages/ThankYou/ThankYou';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Careers from '../../pages/Careers/Careers';
import Returns from '../../pages/Returns/Returns';
import Delivery from '../../pages/Delivery/Delivery';

import './Layout.scss';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Layout = () => (
  <Switch>

    <Route exact path="/" component={Homepage} />
    <Route exact path="/login" component={Account} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/cart" component={MyCart} />
    <Route exact path="/reset-password" component={ResetPassword} />
    <Route exact path="/reset-password/:token" component={ResetPassword} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/thank-you" component={ThankYou} />
    <Route exact path="/orders-history" component={OrdersHistory} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/careers" component={Careers} />
    <Route exact path="/returns" component={Returns} />
    <Route exact path="/delivery" component={Delivery}/>
    
    <Route exact path="/:department" component={Department}/>


    <Route exact path="/:department/page/:page" component={Department}/>
    <Route exact path="/:department/filter/:filter" component={Department}/>
    <Route exact path="/:department/filter/:filter/page/:page" component={Department}/>
    <Route exact path="/:department/search/:search" component={Department}/>
    <Route exact path="/:department/search/:search/page/:page" component={Department}/>

    <Route exact path="/:department/product/:product" component={Product}/>
    <Route exact path="/:department/page/:page/product/:product" component={Product}/>
    <Route exact path="/:department/filter/:filter/product/:product" component={Product}/>
    <Route exact path="/:department/filter/:filter/page/:page/product/:product" component={Product}/>
    <Route exact path="/:department/search/:search/product/:product" component={Product}/>
    <Route exact path="/:department/search/:search/page/:page/product/:product" component={Product}/>

  </Switch>
);


export default Layout;