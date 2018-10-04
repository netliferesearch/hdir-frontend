import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const listItemClasses = (anchor, type) =>
  classNames({
    'b-nav-list__item': true,
    'b-nav-list__item--anchor': anchor,
    'b-nav-list__item--blue': type === 'nasjonale-faglige-retningslinjer',
    'b-nav-list__item--green': type === 'pakkeforløp',
    'b-nav-list__item--orange': type === 'rundskriv',
    'b-nav-list__item--yellow': type === 'veileder'
  });

const NavList = props => {
  const { list: list = [] } = props;

  return (
    <nav className="b-nav-list">
      <div className="b-nav-list__heading">{props.heading}</div>
      <ul className="b-nav-list__items">
        {list.map(item => (
          <li className={listItemClasses(props.anchor, item.type)}>
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
  heading: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  type: PropTypes.string
};

NavList.defaultProps = {
  anchor: false,
  type: ''
};

export default NavList;
