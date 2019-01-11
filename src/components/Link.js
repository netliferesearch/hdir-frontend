import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkClasses = (
  arrow,
  small,
  secondary,
  button,
  buttonSecondary,
  buttonInherit,
  color,
  wideButton,
  heading
) =>
  classNames({
    'b-link__link': true,
    'b-link__link--arrow': arrow,
    'b-link__link--small': small,
    'b-link__link--secondary': secondary,
    'b-link__link--button': button,
    'b-link__link--button-secondary': buttonSecondary,
    'b-link__link--button-inherit': buttonInherit,
    'b-link__link--purple': color === 'purple',
    'b-link__link--button-wide': wideButton,
    'b-link__link--heading': heading
  });

const Link = props => (
  <div className="b-link">
    {props.icon && (
      <div
        className="b-link__icon"
        style={{ backgroundImage: `url(${props.icon})` }}
      />
    )}
    <a
      href={props.href}
      className={linkClasses(
        props.arrow,
        props.small,
        props.secondary,
        props.button,
        props.buttonSecondary,
        props.buttonInherit,
        props.color,
        props.wideButton,
        props.heading
      )}
    >
      {props.children}
    </a>
  </div>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  arrow: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  button: PropTypes.bool,
  buttonSecondary: PropTypes.bool,
  buttonInherit: PropTypes.bool,
  color: PropTypes.oneOf(['', 'purple']),
  wideButton: PropTypes.bool,
  heading: PropTypes.bool
};

export default Link;
