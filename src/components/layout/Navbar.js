import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <Link to='/'>
          <h1>
            <i className='fa fa-trophy' />
            E-Sport UBO
          </h1>
        </Link>
        <ul>
          <li>
            <div class='dropdown'>
              <p class='dropbtn'>ALL GAMES</p>
              <div class='dropdown-content'>
                <Link to='#' whereAmI=''>
                  CS-GO
                </Link>
                <Link to=''>Call Of Duty</Link>
                <Link to='#'>Dota 2</Link>
                <Link to='#'>League Of Legends</Link>
                <Link to='#'>PUBG</Link>
                <Link to='#'>Overwatch</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to='/teams'>TEAMS</Link>
          </li>
          <li>
            <Link to='/leagues'>LEAGUES</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
