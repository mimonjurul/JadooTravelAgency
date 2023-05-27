import React from 'react';
import logo from '../../logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <div className='navbar'>
        <div className="nav-left">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="nav-right">
          <div className="nav-menu">
            <ul className='navbar-nav'>
              <li className='nav-items'>
                <a href="/" className='nav-links'>Desitnations</a>
              </li>
              <li className='nav-items'>
                <a href="/" className='nav-links'>Hotels</a>
              </li>
              <li className='nav-items'>
                <a href="/" className='nav-links'>Flights</a>
              </li>
              <li className='nav-items'>
                <a href="/" className='nav-links'>Bookings</a>
              </li>
            </ul>
          </div>
          <div className="nav-btn">
            <button type='button' className='login-btn'>Login</button>
            <button type='button' className='signup-btn'>Sign Up</button>
            <span className='lang-chnager'>EN <i className="fa-solid fa-angle-down"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar