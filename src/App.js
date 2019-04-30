import React, { Component } from 'react';
import './App.css';
import NavHeader from './modules/NavHeader';
import HomeContainer from './modules/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <HomeContainer />
      </div>
    );
  }
}

export default App;
