import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Price from './Price.js;

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Price
        priceClass='productItemPrice'
        num={8900}
      />
    
      </div>
    );
  }
}

export default App;
