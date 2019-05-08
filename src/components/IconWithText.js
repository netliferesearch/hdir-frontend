import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageClasses = size =>
  classNames({
    'b-icon-with-text__image': true,
    'b-icon-with-text__image--small': size === 'small'
  });

const IconWithText = props => (
  <div className="b-icon-with-text">
    <img
      src={props.icon}
      alt=""
      role="presentation"
      className={imageClasses(props.size)}
      aria-hidden
    />
    <span className="b-icon-with-text__text">{props.text}</span>
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
