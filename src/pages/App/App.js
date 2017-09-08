import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import EventPage from '../Events/EventPage/EventPage';
import NewEvent from '../Events/NewEvent/NewEvent';
import EventShowPage from '../Events/EventShowPage/EventShowPage'
import NavBar from '../../components/NavBar/NavBar';
import tokenService from '../../utils/tokenService';
import GameData from '../GameData/GameData';
import GameSearchPage from '../GameSearchPage/GameSearchPage';
import EventList from '../../components/EventList/EventList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      games: [],
      searchResults: [],
      events:[]
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
    this.props.history.push('/games/search')
  }

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    console.log("component is mounted")
    fetch('api/games', { headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken() }) })
      .then(res => res.json())
      .then(data => this.setState({games: data}));
    fetch('api/events', { headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken() }) })
      .then(res => res.json())
      .then(datafile => this.setState({events: datafile}));  
  }

  render() {
    return (
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
                <EventPage 
                  {...props} 
                  events={this.state.events}
                />
                  :
                  <Redirect to='/login' />
              )}/>
              <Route exact path='/games' render={(props) =>
                <GameData games={this.state.games}
                />
              }/>
              <Route exact path='/games/search' render={(props) => {
                  if (this.state.searchResults.length === 0) {
                    return <Redirect to="/" />
                  } else {
                    return <GameSearchPage search={this.state.searchResults} history={props.history} />
                  }
                }
              }/>
              <Route exact path='/events' render={(props) =>
                <EventList events={this.state.events} />
              }/>
              <Route exact path='/events/new' render={(props) =>
                <NewEvent
                      history={props.history}
                      events={this.state.events}
                  />
              }/>
              <Route exact path='/events/:id' render={(props) => {
                var event = this.state.events.find((event)=> {
                  return event._id === props.match.params.id
                });
                return(
                  <EventShowPage
                    {...props}
                    event= {event}
                  />)
              }
              } />
            </Switch>
          </div>
    );
  }
}

export default App;
