import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar'
import Users from './components/Users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar icon="fab fa-github" title="Github-finder" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
