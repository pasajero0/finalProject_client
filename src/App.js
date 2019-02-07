import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Dashboard from './components/Dashboard'

import './App.scss';

class App extends Component {
  render() {
    const linkStyle = {
      display: 'inline-block',
      padding: '0 10px'
    };
    const navStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '20px',
      zIndex: 2,
      padding: 0,
      margin: 0,
      textAlign: 'center'
    };
    return (
        <>
          <ul style={navStyle}>
            <NavLink style={linkStyle} to="/">Home</NavLink>
            <NavLink style={linkStyle} to="/contacts">Contacts</NavLink>
            <NavLink style={linkStyle} to="/products">Products</NavLink>
            <NavLink style={linkStyle} to="/products/146">Product</NavLink>
          </ul>
          <Route
              path="/"
              render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={300}
                    >
                      <Switch location={location}>
                        <Route
                            path="/products/:id"
                            render={() => <DummyElement color="grey" title="PRODUCT" />}
                        />
                        <Route
                            path="/products"
                            render={() => <DummyElement color="lightblue" title="PRODUCTS" />}
                        />
                        <Route
                            path="/contacts"
                            render={() => <DummyElement color="green" title="CONTACTS" />}
                        />
                        <Route
                            path="/"
                            component={Dashboard}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
              )}
          />
        </>
    );
  }
}

const DummyElement = (props) => {
  const { color, title } = props;
  const style = {
    backgroundColor: color,
    position: 'fixed',
    left: 0,
    top: 40,
    right: 0,
    bottom: 0,
    zIndex: 1,
    textAlign: 'center'
  };
  return (<h1 style={style}>{title}</h1>);
};

export default App;