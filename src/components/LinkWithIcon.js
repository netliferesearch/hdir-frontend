import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkClasses = arrow =>
  classNames({ 'b-link-with-icon__link': true, 'b-link-with-icon__arrow': arrow });

const LinkWithIcon = props => (
  <div className="b-link-with-icon">
    <div className="b-link-with-icon__icon" style={{ backgroundImage: `url(${props.icon})` }}></div>
    <a href={props.href} className={linkClasses(props.arrow)}>
      {props.children}
    </a>
  </div>
);

LinkWithIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  arrow: PropTypes.bool
}

export default LinkWithIcon;
