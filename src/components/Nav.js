import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../assets/jw_logo_full_white.svg';

const Nav = () => {
  return (
    <nav className="navbar is-sticky-top" aria-label="main navigation">
      <div className="navbar-brand">
        <AnchorLink href="#home" className="navbar-item image">
          <img src={logo} alt="Jenessa White logo" className="logo" />
        </AnchorLink>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
          <AnchorLink className="navbar-item" href="#about" data-hover="About">
            About
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#portfolio" data-hover="Portfolio">
            Portfolio
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#contact" data-hover="Contact">
            Contact
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
