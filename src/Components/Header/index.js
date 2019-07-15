import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import logo from './logo.png'

class Header extends React.Component {

  render() {
    return(
      <div className='header'>
          <ul>
            <li>
              <Link to='/'><img src={logo} className="logo" alt="Pokemon logo"></img></Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/pokedex'>Pokedex</Link>
            </li>
          </ul>
      </div>
    )
  }
}

export default Header;
