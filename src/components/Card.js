import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const cardClasses = ({ horizontal, verticalGrow}) =>
  classNames({
    'b-card': true,
    'b-card--horizontal': horizontal,
    'b-card--grow': verticalGrow
  });

const linkClasses = arrow =>
  classNames({
    'b-card__link': true,
    'b-card__link--left-arrow': arrow === 'left',
    'b-card__link--right-arrow': arrow === 'right'
  });

const Card = ({
  horizontal,
  children,
  heading,
  topic,
  text,
  content,
  mainContent,
  verticalGrow,
  arrow
}) => (
  <a href="#a" className={cardClasses({horizontal, verticalGrow})}>
    {children && <div className="b-card__feature">{children}</div>}
    <div className={linkClasses(arrow)}>
      {heading && <h3 className="b-card__heading">{heading}</h3>}
      {topic && <div className="b-card__topic">{topic}</div>}
      {text && <div className="b-card__text">{text}</div>}
      {content && <div>{content}</div>}
      {mainContent}
    </div>
  </a>
);

Card.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  topic: PropTypes.string,
  arrow: PropTypes.oneOf(['', 'left', 'right']),
  horizontal: PropTypes.bool,
  content: PropTypes.object,
  mainContent: PropTypes.object
};

export default Card;
