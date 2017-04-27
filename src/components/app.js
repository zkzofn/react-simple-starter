import React, { Component } from 'react';
import Logo from './logo';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Logo />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}