import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonClasses = (
  arrow,
  download,
  small,
  secondary,
  plain,
  secondaryDark
) =>
  classNames({
    'b-button': true,
    'b-button--download': download,
    'b-button--secondary': secondary,
    'b-button--arrow': arrow,
    'b-button--small': small,
    'b-button--plain': plain,
    'b-button--secondary-dark': secondaryDark
  });

const Button = ({
  arrow,
  download,
  small,
  secondary,
  plain,
  children,
  secondaryDark,
  ...other
}) => (
  <button
    className={buttonClasses(
      arrow,
      download,
      small,
      secondary,
      plain,
      secondaryDark
    )}
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
  secondaryDark: PropTypes.bool,
  plain: PropTypes.bool
};

export default Button;
