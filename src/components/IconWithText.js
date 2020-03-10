import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageClasses = size =>
  classNames({
    'b-icon-with-text__image': true,
    'b-icon-with-text__image--small': size === 'small'
  });

const IconWithText = ({ icon, size, text }) => (
  <div className="b-icon-with-text">
    <img
      src={icon}
      alt=""
      role="presentation"
      className={imageClasses(size)}
      aria-hidden
    />
    <span className="b-icon-with-text__text">{text}</span>
  </div>
);

IconWithText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['medium', 'small'])
};

IconWithText.defaultProps = {
  size: 'medium'
};

export default IconWithText;
