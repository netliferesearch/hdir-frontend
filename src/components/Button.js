import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonClasses = (arrow, download, small, secondary, plain) =>
  classNames({
    'b-button': true,
    'b-button--download': download,
    'b-button--secondary': secondary,
    'b-button--arrow': arrow,
    'b-button--small': small,
    'b-button--plain': plain
  });

const Button = ({
  arrow,
  download,
  small,
  secondary,
  plain,
  children,
  ...other
}) => (
  <button
    className={buttonClasses(arrow, download, small, secondary, plain)}
    {...other}
  >
    {children}
  </button>
);

Button.propTypes = {
  arrow: PropTypes.bool,
  download: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  plain: PropTypes.bool
};

export default Button;
