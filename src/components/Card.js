import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="b-card">
    {props.children && <div className="b-card__feature">{props.children}</div>}
    <a href="#" className="b-card__link">
      <h3 className="b-card__heading">{props.heading}</h3>
      <div className="b-card__text">{props.text}</div>
    </a>
  </div>
);

Card.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string
};

export default Card;
