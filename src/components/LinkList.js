import React from 'react';
import PropTypes from 'prop-types';

const LinkList = props => (
  <nav className="b-link-list">
    {props.list.map(item =>
      item.active ? (
        <div className="b-link-list__item b-link-list__item--active">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="b-link-list__image"
          />
          <span className="b-link-list__text">{item.text}</span>
        </div>
      ) : (
        <a href={item.href} className="b-link-list__item">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="b-link-list__image"
          />
          <span className="b-link-list__text">{item.text}</span>
        </a>
      )
    )}
  </nav>
);

LinkList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
      imageAlt: PropTypes.string,
      active: PropTypes.bool
    })
  )
};

export default LinkList;
