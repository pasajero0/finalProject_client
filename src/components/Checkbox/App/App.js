import React, { Component } from 'react';

import Checkbox from '../Checkbox';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Checkbox label='Name' selected={false}/>
      </div>
    );
  }
}

export default App;
