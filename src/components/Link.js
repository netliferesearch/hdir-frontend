import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkClasses = (
  arrow,
  arrowLeft,
  small,
  secondary,
  button,
  buttonSecondary,
  buttonInherit,
  color,
  wideButton,
  heading,
  noUnderline
) =>
  classNames({
    'b-link__link': true,
    'b-link__link--arrow': arrow,
    'b-link__link--arrow-left': arrowLeft,
    'b-link__link--small': small,
    'b-link__link--secondary': secondary,
    'b-link__link--button': button,
    'b-link__link--button-secondary': buttonSecondary,
    'b-link__link--button-inherit': buttonInherit,
    'b-link__link--purple': color === 'purple',
    'b-link__link--white': color === 'white',
    'b-link__link--shadow': color === 'shadow',
    'b-link__link--button-wide': wideButton,
    'b-link__link--heading': heading,
    'b-link__link--no-underline': noUnderline
  });

const Link = props => (
  <div className="b-link">
    {props.icon && (
      <div
        className="b-link__icon"
        role="presentation"
        style={{ backgroundImage: `url(${props.icon})` }}
      />
    )}
    <a
      href={props.href}
      className={linkClasses(
        props.arrow,
        props.arrowLeft,
        props.small,
        props.secondary,
        props.button,
        props.buttonSecondary,
        props.buttonInherit,
        props.color,
        props.wideButton,
        props.heading,
        props.noUnderline
      )}
    >
      {props.children}
    </a>
  </div>
);

Link.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  arrow: PropTypes.bool,
  arrowLeft: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  button: PropTypes.bool,
  buttonSecondary: PropTypes.bool,
  buttonInherit: PropTypes.bool,
  color: PropTypes.oneOf(['', 'purple', 'white', 'shadow']),
  wideButton: PropTypes.bool,
  heading: PropTypes.bool,
  noUnderline: PropTypes.bool
};

export default Link;
