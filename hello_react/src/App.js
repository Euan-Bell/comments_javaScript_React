import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PiggyBank from './components/PiggyBank.js';

class App extends Component {
  render() {
    return (
      <PiggyBank name="Euan" />
    );
  }
}

export default App;
