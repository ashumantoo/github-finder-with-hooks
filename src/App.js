import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar'
import UserItem from './components/Users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar icon="fab fa-github" title="Github-finder" />
        <UserItem />
      </div>
    );
  }
}

export default App;
