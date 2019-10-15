import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonClasses = (
  arrow,
  download,
  small,
  secondary,
  plain,
  clean,
  secondaryDark
) =>
  classNames({
    'b-button': true,
    'b-button--download': download,
    'b-button--secondary': secondary,
    'b-button--arrow': arrow,
    'b-button--small': small,
    'b-button--plain': plain,
    'b-button--clean': clean,
    'b-button--secondary-dark': secondaryDark
  });

const Button = props => {
  const allClassNames = buttonClasses(
    props.arrow,
    props.download,
    props.small,
    props.secondary,
    props.plain,
    props.clean,
    props.secondaryDark
  );

  return (
    <button className={allClassNames} onClick={props.onClick} {...props}>
      {props.icon && (
        <div
          className="b-link__icon"
          role="presentation"
          style={{ backgroundImage: `url(${props.icon})` }}
        />
      )}
      {props.icon ? 
        (<span className="b-button__underline">{props.children}</span>) 
      : props.children}
    </button>
  );
};

Button.propTypes = {
  arrow: PropTypes.bool,
  icon: PropTypes.string,
  download: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  secondaryDark: PropTypes.bool,
  plain: PropTypes.bool,
  clean: PropTypes.bool
};

export default Button;
