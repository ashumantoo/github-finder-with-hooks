import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Layout/Navbar'
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import Alert from './components/Layout/Alert';
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  //Promise Based axios calls
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
  //Default Users
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data });
  }

  //Searched Users
  searchUsersHandler = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items });
  }

  onClearSearchedUserHandler = () => {
    this.setState({ users: [], loading: false });
  }

  onAlertHandle = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    //making disappear alert message after 3 sec by setting alert to null
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  }

  render() {
    return (
      <div className="App" >
        <Navbar
          icon="fab fa-github"
          title="Github-Finder"
        />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsersHandler}
            clearSearchedUsers={this.onClearSearchedUserHandler}
            clear={this.state.users.length > 0 ? true : false}
            setAlert={this.onAlertHandle}
          />
          <Users
            loading={this.state.loading}
            users={this.state.users}
          />
        </div>
      </div>
    );
  }
}

export default App;
