import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const linkClasses = arrow =>
  classNames({
    'b-card__link': true,
    'b-card__link--left-arrow': arrow === 'left',
    'b-card__link--right-arrow': arrow === 'right'
  });

const Card = props => (
  <div className="b-card">
    {props.children && <div className="b-card__feature">{props.children}</div>}
    <a href="#a" className={linkClasses(props.arrow)}>
      <h3 className="b-card__heading">{props.heading}</h3>
      {props.text && <div className="b-card__text">{props.text}</div>}
    </a>
  </div>
);

Card.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  arrow: PropTypes.oneOf(['', 'left', 'right'])
};

export default Card;
