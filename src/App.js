import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Layout/Navbar'
import Users from './components/Users/Users';
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  //Promise Based axios calls
  //
  // componentDidMount() {
  //   this.setState({ loading: true });
  //   axios
  //     .get('https://api.github.com/users')
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({ users: res.data });
  //       this.setState({ loading: false });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  //Async await type axios call
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ loading: false, users: res.data });
  }

  render() {
    return (
      <div className="App" >
        <Navbar icon="fab fa-github" title="Github-finder" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
