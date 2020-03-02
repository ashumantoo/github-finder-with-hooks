import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Layout/Navbar'
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import Alert from './components/Layout/Alert';
import About from './components/About/About';
import User from './components/Users/User';
import './App.css';

const App = () => {
  
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //similar to componentDidMount() display default users
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      })
  }, []);

  //Searched Users
  const searchUsersHandler = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
                &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }

  //get single user
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
                &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  }

  //get single user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
                ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  }

  const onClearSearchedUserHandler = () => {
    setUsers([]);
    setLoading(false);
  }

  const onAlertHandle = (msg, type) => {
    setAlert({ msg: msg, type: type });
    //making disappear alert message after 3 sec by setting alert to null
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <Router>
      <div className="App" >
        <Navbar
          icon="fab fa-github"
          title="Github-Finder"
        />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            {/* if more than one component is there then use route like this */}
            <Route exact path="/" render={(props) => (
              <Fragment>
                <Search
                  searchUsers={searchUsersHandler}
                  clearSearchedUsers={onClearSearchedUserHandler}
                  clear={users.length > 0 ? true : false}
                  setAlert={onAlertHandle}
                />
                <Users
                  loading={loading}
                  users={users}
                />
              </Fragment>
            )
            } />
            {/* route for one component */}
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render={props => (
              <User
                {...props}
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
                loading={loading}
              />
            )} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
