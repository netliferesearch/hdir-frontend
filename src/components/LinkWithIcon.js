import React from 'react';
import PropTypes from 'prop-types';

const LinkWithIcon = props => (
  <div className="b-link-with-icon">
    <div className="b-link-with-icon__icon" style={{ backgroundImage: `url(${props.icon})` }}></div>
    <a href={props.href}>
      {props.children}
    </a>
  </div>
);

LinkWithIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default LinkWithIcon;
