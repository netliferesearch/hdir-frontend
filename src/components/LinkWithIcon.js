import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkClasses = (arrow, small) =>
  classNames({
    'b-link-with-icon__link': true,
    'b-link-with-icon__arrow': arrow,
    'b-link-with-icon__small': small
  });

const LinkWithIcon = props => (
  <div className="b-link-with-icon">
    {props.icon && (
      <div
        className="b-link-with-icon__icon"
        style={{ backgroundImage: `url(${props.icon})` }}
      />
    )}
    <a href={props.href} className={linkClasses(props.arrow, props.small)}>
      {props.children}
    </a>
  </div>
);

LinkWithIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  arrow: PropTypes.bool,
  small: PropTypes.bool
};

export default LinkWithIcon;
