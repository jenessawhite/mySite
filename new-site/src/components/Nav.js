import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const Nav = () => {
  return (
    <nav className="navbar column" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item image">
          <img src={logo} alt=""/>
        </NavLink>

        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>


      <div className="navbar-menu menu" id="navMenu">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">Home</NavLink>
          <NavLink className="navbar-item" to="/about">About</NavLink>
          <NavLink className="navbar-item" to="/portfolio">Portfolio</NavLink>
          <NavLink className="navbar-item" to="/contact">Contact</NavLink>
        </div>
      </div>

      <div className="social">
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
        <span class="icon is-medium">
          <i class="ion-ionic logo-twitter"></i>
        </span>
        <span class="icon">
          <i class="ion-ionic ion-eye"></i>
        </span>
      </div>
    </nav>
  );
};

export default Nav;