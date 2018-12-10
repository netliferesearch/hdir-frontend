import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonClasses = (arrow, small, secondary) =>
  classNames({
    'b-button__button': true,
    'b-button__button--secondary': secondary,
    'b-button__button--arrow': arrow,
    'b-button__button--small': small
  });

const Button = props => (
  <div className="b-button">
    <button
      className={buttonClasses(props.arrow, props.small, props.secondary)}
    >
      {props.children}
    </button>
  </div>
);

Button.propTypes = {
  icon: PropTypes.string,
  arrow: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool
};

export default Button;
