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

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
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

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
        <Router>
          <div>
            <header>Boosted eSports</header>
            <NavBar user={this.state.user} handleLogout={this.handleLogout} />
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
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
