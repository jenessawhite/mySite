import React from 'react';
import DevToBadge from '../assets/DevToBadge';
const Footer = () => {
  return (
    <footer className="footer is-grey has-text-centered">
      <h5>Connect with me elsewhere on the web!</h5>
      <div className="navbar is-grey" aria-label="footer navigation">
        <div className="navbar-menu">
          <a
            className="navbar-item btn-1"
            href="http://github.com/jenessawhite"
            target="_blank"
            rel="noopener noreferrer">
            Code
            <span className="icon">
              <i className="fab fa-github-alt" />
            </span>
          </a>
          <a
            className="navbar-item btn-1"
            href="http://twitter.com/jnessview"
            target="_blank"
            rel="noopener noreferrer">
            Hot Takes
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a
            className="navbar-item btn-1"
            href="http://linkedin.com/in/jenessawhite"
            target="_blank"
            rel="noopener noreferrer">
            Work
            <span className="icon">
              <i className="fab fa-linkedin" />
            </span>
          </a>
          <a
            className="navbar-item btn-1"
            href="http://instagram.com/thenessview"
            target="_blank"
            rel="noopener noreferrer">
            Photos
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
          <a
            className="navbar-item btn-1"
            href="https://dev.to/jenessawhite"
            target="_blank"
            rel="noopener noreferrer">
            Blog
            <span className="icon">
              <DevToBadge className="devto svg-inline--fa fa-w-20" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
