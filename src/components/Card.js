import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const cardClasses = horizontal =>
  classNames({
    'b-card': true,
    'b-card--horizontal': horizontal
  });

const linkClasses = arrow =>
  classNames({
    'b-card__link': true,
    'b-card__link--left-arrow': arrow === 'left',
    'b-card__link--right-arrow': arrow === 'right'
  });

const Card = props => (
  <a href="#a" className={cardClasses(props.horizontal)}>
    {props.children && <div className="b-card__feature">{props.children}</div>}
    <div className={linkClasses(props.arrow)}>
      {props.heading && <h3 className="b-card__heading">{props.heading}</h3>}
      {props.topic && <div className="b-card__topic">{props.topic}</div>}
      {props.text && <div className="b-card__text">{props.text}</div>}
      {props.content && <div>{props.content}</div>}
      {props.mainContent}
    </div>
  </a>
);

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  topic: PropTypes.string,
  arrow: PropTypes.oneOf(['', 'left', 'right']),
  horizontal: PropTypes.bool,
  content: PropTypes.object,
  mainContent: PropTypes.object
};

export default Card;
