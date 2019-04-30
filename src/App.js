import React, { Component } from 'react';
import './App.css';
import NavHeader from './modules/NavHeader';
import HomeContainer from './modules/HomeContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

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
