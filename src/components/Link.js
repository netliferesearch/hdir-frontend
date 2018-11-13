import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkClasses = (arrow, small) =>
  classNames({
    'b-link__link': true,
    'b-link__arrow': arrow,
    'b-link__small': small
  });

const Link = props => (
  <div className="b-link">
    {props.icon && (
      <div
        className="b-link__icon"
        style={{ backgroundImage: `url(${props.icon})` }}
      />
    )}
    <a href={props.href} className={linkClasses(props.arrow, props.small)}>
      {props.children}
    </a>
  </div>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  arrow: PropTypes.bool,
  small: PropTypes.bool
};

export default Link;
