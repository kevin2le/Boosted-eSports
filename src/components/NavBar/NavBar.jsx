import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import tokenService from '../../utils/tokenService';
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
    fetch(`api/games/search?search=${this.state.search}`, { headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken() }) })
      .then(res => res.json())
      .then(results => this.props.handleSearch(results))
  }


  render() {
    let nav = this.props.user ?
      <li>
        <Link to="" className="blue-text text-darken-2" onClick={this.props.handleLogout} >LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span>WELCOME, {this.props.user.name}</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </li> :
      <li>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/login">LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup">SIGN UP</Link>
      </li>;

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <header className="brand-logo left"> Boosted Esports </header>
            <div className="blue-text text-darken-2">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <Link to="/events" className="blue-text text-darken-2">Events</Link>
                <Link to="/games" className="blue-text text-darken-2" > Games</Link>
                <div>
                  <input type="text" value={this.state.search} onChange={this.changeSearch} />
                  <button className="blue-text text-darken-2" onClick={this.onClick}><Link to="/search"> Search</Link> </button>
                </div>
                {nav}
              </ul>
            </div>
          </div>  
        </nav>
      </div>
    );
  }
};

export default NavBar;