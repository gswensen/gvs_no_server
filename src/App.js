import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainGrid from './components/MainGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainGrid/>
      </div>
    );
  }
}

export default App;
