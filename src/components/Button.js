import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { color, inverted, outlined, text, to } = this.props
    return (
      <Link
        className={
          "button " + (color ? ("is-" + color ) : "") + (inverted ? " is-inverted" : "") + (outlined ? " is-outlined" : "")
        }
        to={to}>
        {text}
      </Link>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string,
  inverted: PropTypes.bool,
  outlined: PropTypes.bool,
  text: PropTypes.string,
  to: PropTypes.string
};

export default Button;