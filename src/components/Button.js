import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonClasses = (
  arrow,
  download,
  small,
  secondary,
  plain,
  secondaryDark,
  optionPrimary,
  optionSecondary,
) =>
  classNames({
    'b-button': true,
    'b-button--download': download,
    'b-button--secondary': secondary,
    'b-button--arrow': arrow,
    'b-button--small': small,
    'b-button--plain': plain,
    'b-button--secondary-dark': secondaryDark,
    'b-button--option-primary': optionPrimary,
    'b-button--option-secondary': optionSecondary,
  });

const Button = props => {
  const allClassNames = buttonClasses(
    props.arrow,
    props.download,
    props.small,
    props.secondary,
    props.plain,
    props.secondaryDark,
    props.optionPrimary,
    props.optionSecondary,
  );
  const allClassNamesExtra = props.classes ? ` ${props.classes}` : '';
  return (
    <button
      className={allClassNames + allClassNamesExtra}
    >
      {props.children}
    </button>
  )
};

Button.propTypes = {
  classes: PropTypes.string,
  arrow: PropTypes.bool,
  download: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  secondaryDark: PropTypes.bool,
  plain: PropTypes.bool,
  optionPrimary: PropTypes.bool,
  optionSecondary: PropTypes.bool,
};

export default Button;
