import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonClasses = (arrow, small, secondary, plain) =>
  classNames({
    'b-button__button': true,
    'b-button__button--secondary': secondary,
    'b-button__button--arrow': arrow,
    'b-button__button--small': small,
    'b-button__button--plain': plain
  });

const Button = props => (
  <div className="b-button">
    <button
      className={buttonClasses(
        props.arrow,
        props.small,
        props.secondary,
        props.plain
      )}
    >
      {props.children}
    </button>
  </div>
);

Button.propTypes = {
  arrow: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  plain: PropTypes.plain
};

export default Button;
