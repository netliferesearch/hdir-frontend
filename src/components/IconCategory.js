import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const IconCategory = props => (
  <div className="b-icon--category">
    <img
      src={props.icon}
      alt=""
      role="presentation"
      className="b-icon--category__icon"
      aria-hidden
    />
    {props.url ? (
      <a href={props.url} id={shortid.generate()}>
        <span className="b-icon--category__heading">{props.heading}</span>
      </a>
    ) : (
      <span id={shortid.generate()} className="b-icon--category__heading">
        {props.heading}
      </span>
    )}
  </div>
);

IconCategory.propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default IconCategory;
