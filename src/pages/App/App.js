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
import EventPage from '../Events/EventPage/EventPage';
import NewEvent from '../Events/NewEvent/NewEvent';
import NavBar from '../../components/NavBar/NavBar';
import CreateEventPage from '../../components/CreateEventPage/CreateEventPage';
import tokenService from '../../utils/tokenService';
import GameData from '../GameData/GameData';
import GameSearchPage from '../GameSearchPage/GameSearchPage';
import EventList from '../../components/EventList/EventList'
import eventAPI from '../../utils/eventAPI';

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
              <Route exact path='/events' render={(props) => (
                userService.getUser() ?
                <EventPage {...props} />
                  :
                  <Redirect to='/login' />
              )}/>
              <Route exact path='/games' render={(props) =>
                <GameData games={this.state.games}
                />
              }/>
              <Route exact path='games/search' render={(props) =>
                <GameSearchPage search={this.state.searchResults}
                />
              }/>
              <Route exact path='/events' render={() =>
                  <EventList events={this.state.events} />
              }/>
              <Route exact path='/events/new' render={() =>
                  <NewEvent
                      {...this.props}
                      events={this.state.events}
                  />
              }/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
