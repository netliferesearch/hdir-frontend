import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonClasses = (arrow, small) =>
  classNames({
    'b-button__button': true,
    'b-button__button--arrow': arrow,
    'b-button__button--small': small
  });

const Button = props => (
  <div className="b-button">
    <button className={buttonClasses(props.arrow, props.small)}>
      {props.children}
    </button>
  </div>
);

Button.propTypes = {
  icon: PropTypes.string,
  arrow: PropTypes.bool,
  small: PropTypes.bool
};

export default Button;
