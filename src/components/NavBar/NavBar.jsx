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
          <Link to="" className="" onClick={this.props.handleLogout} >LOG OUT</Link>
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
      <div className="NavBar">
      <NavMaterialize brand='Boosted eSports' href="/" left className="blue-grey">
          <NavItem><input type="text" placeholder="Search Games" className="white black-text"value={this.state.search} onChange={this.changeSearch} /></NavItem>
          <NavItem><Button waves='light'className="black" onClick={this.onClick}>Search</Button></NavItem>
          <NavItem><Link to="/events" className="">Events</Link></NavItem>
          <NavItem><Link to="/games" className="" > Games</Link></NavItem>
          {nav}
      </NavMaterialize>
      </div>
    );
  }
};

export default NavBar;