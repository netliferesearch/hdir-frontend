import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const LinkList = ({ list }) => (
  <nav className="b-link-list">
    {list.map(item =>
      item.active ? (
        <div
          className="b-link-list__item b-link-list__item--active"
          key={shortid.generate()}
        >
          <img
            src={item.image}
            alt=""
            className="b-link-list__image"
            role="presentation"
          />
          <span className="b-link-list__text">{item.text}</span>
        </div>
      ) : (
        <a
          href={item.href}
          className="b-link-list__item"
          key={shortid.generate()}
        >
          <img
            src={item.image}
            alt=""
            className="b-link-list__image"
            role="presentation"
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
