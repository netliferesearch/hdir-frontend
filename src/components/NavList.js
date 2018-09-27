import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavList = props => {
  const { list: list = [] } = props;

  return (
    <nav className="b-nav-list">
      <div className="b-nav-list__heading">{props.heading}:</div>
      <ul className="b-nav-list__items">
        {list.map(item => (
          <li
            className={classNames({
              'b-nav-list__item': true,
              'b-nav-list__item--anchor': !props.anchor
            })}
          >
            <a
              href={item.url}
              className={classNames({
                'b-nav-list__link': true,
                'b-nav-list__link--anchor': props.anchor
              })}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavList.propTypes = {
  anchor: PropTypes.bool,
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NavList;
