import React from 'react';
import PropTypes from 'prop-types';

const IconWithText = props => (
  <div className="b-icon--with-text">
    <img
      src={props.icon}
      alt={props.text}
      role="presentation"
      className="b-icon--with-text__image"
      aria-hidden
    />
    <span
      className="b-icon--with-text__text"
    >
      {props.text}
    </span>
  </div>
);

IconWithText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default IconWithText;
