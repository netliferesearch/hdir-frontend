import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkClasses = (arrow, small, button, color, wideButton) =>
  classNames({
    'b-link__link': true,
    'b-link__link--arrow': arrow,
    'b-link__link--small': small,
    'b-link__link--button': button,
    'b-link__link--purple': color === 'purple',
    'b-link__link--button-wide': wideButton
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
        props.button,
        props.color,
        props.wideButton
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
  button: PropTypes.bool,
  color: PropTypes.oneOf(['', 'purple']),
  wideButton: PropTypes.bool
};

export default Link;
