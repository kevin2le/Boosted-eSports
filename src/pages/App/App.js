import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import EventPage from '../EventPage/EventPage';
import NavBar from '../../components/NavBar/NavBar';
import CreateEventPage from '../CreateEventPage/CreateEventPage';
import tokenService from '../../utils/tokenService';
import GameData from '../GameData/GameData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      games: [],
      searchResults: []
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleSearch = (results) => {
    console.log(results);
    this.setState({searchResults: results});
  }

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    console.log("component is mounted")
    fetch('api/games', { headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken() }) })
      .then(res => res.json())
      .then(data => this.setState({games: data}))
  
  }

  render() {
    return (
        <Router>
          <div>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout}
              handleSearch={this.handleSearch}
            />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/signup' render={(props) =>
                <SignupPage
                  {...props}
                  handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path='/login' render={(props) =>
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
              <Route exact path='/events' component={EventPage} />
              <Route exact path='/create-event' component={CreateEventPage} />
              <Route exact path='/games' render={(props) =>
                <GameData games={this.state.games}
                />
              }/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
