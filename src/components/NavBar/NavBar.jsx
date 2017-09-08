import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import tokenService from '../../utils/tokenService';
import {
  Button,
  Navbar as NavMaterialize,
  NavItem
} from 'react-materialize';
import './NavBar.css';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  changeSearch = (e) => {
    this.setState({search: e.target.value});
  }


  onClick = () => {
    console.log('im calling the search right now')
    fetch(`api/games/search?search=${this.state.search}`, { headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken() }) })
      .then(res => {
        return res.json()
      })
      .then(results =>{
        console.log('search results =', results);
        return this.props.handleSearch(results)
      })
  }


  render() {
    let nav = this.props.user ?
      <div>
        <NavItem> 
          <Link to="" className="blue-text text-darken-2" onClick={this.props.handleLogout} >LOG OUT</Link>
        </NavItem> 
        <NavItem>
          <span>WELCOME, {this.props.user.name}</span>  
        </NavItem> 
      </div>
      :
      <div>
        <NavItem>
          <Link to="/login">LOG IN</Link>
        </NavItem>
        <NavItem>
          <Link to="/signup">SIGN UP</Link>
        </NavItem>
      </div>
    return (
      <div>
      <NavMaterialize brand='Boosted eSports' href="/" left>
          <NavItem><Link to="/events" className="blue-text text-darken-2">Events</Link></NavItem>
          <NavItem><Link to="/games" className="blue-text text-darken-2" > Games</Link></NavItem>
          <NavItem><input type="text" value={this.state.search} onChange={this.changeSearch} /></NavItem>
          <NavItem><Button onClick={this.onClick}>Search</Button></NavItem>
          {nav}
      </NavMaterialize>
      </div>
    );
  }
};

export default NavBar;