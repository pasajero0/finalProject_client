import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Department from './pages/Department/Department';
import Product from './pages/ProductSingle/ProductSingle';
import Account from './pages/Account/Account';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import OrdersHistory from './pages/OrdersHistory/OrdersHistory';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Checkout from './pages/Checkout/Checkout';
import ThankYou from './pages/ThankYou/ThankYou';
import AboutUs from './pages/AboutUs/AboutUs';
import Careers from './pages/Careers/Careers';
import Returns from './pages/Returns/Returns';
import Delivery from './pages/Delivery/Delivery';
import Search from './pages/Search/Search';
import SetCurrentDepartment from './components/SetCurrentDepartment/SetCurrentDepartment';


/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const Layout = () => (
  <Switch>

    <Route exact path="/" component={Homepage}/>
    <Route exact path="/login" component={Account}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/reset-password" component={ResetPassword}/>
    <Route exact path="/reset-password/:token" component={ResetPassword}/>
    <Route exact path="/checkout" component={Checkout}/>
    <Route exact path="/thank-you" component={ThankYou}/>
    <Route exact path="/orders-history" component={OrdersHistory}/>
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/careers" component={Careers} />
    <Route exact path="/returns" component={Returns} />
    <Route exact path="/delivery" component={Delivery}/>
    <Route exact path="/product/:product" component={Product}/>
    <Route
      path="/search"
      render={routeProps => (
        <SetCurrentDepartment
          {...routeProps}
          render={() => (
            <Switch>
              <Route exact path="/search" component={Search}/>
              <Route exact path="/search/product/:product" component={Product}/>
              <Route exact path="/search/page/:page/product/:product" component={Product}/>
            </Switch>
          )}
        />
      )}
    />
    <Route
      path="/:department"
      render={routeProps => (
        <SetCurrentDepartment
          {...routeProps}
          render={() => (
            <Switch>
              <Route exact path="/:department" component={Department}/>
              <Route exact path="/:department/page/:page" component={Department}/>
              <Route exact path="/:department/filter/:filter" component={Department}/>
              <Route exact path="/:department/filter/:filter/page/:page" component={Department}/>
              <Route exact path="/:department/product/:product" component={Product}/>
              <Route exact path="/:department/page/:page/product/:product" component={Product}/>
              <Route exact path="/:department/filter/:filter/product/:product" component={Product}/>
              <Route exact path="/:department/filter/:filter/page/:page/product/:product" component={Product}/>
            </Switch>
          )}
        />
      )}
    />


  </Switch>
);


export default Layout;