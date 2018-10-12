import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const listItemClasses = (anchor, columns) =>
  classNames({
    'b-nav-list__item': true,
    'b-nav-list__item--anchor': anchor,
    'b-nav-list__item--column': columns
  });

const listItemsClasses = columns =>
  classNames({
    'b-nav-list__items': true,
    'b-nav-list__items--columns': columns
  });

const NavList = props => {
  const { list: list = [] } = props;

  return (
    <nav className={`b-nav-list ${props.className}`} id={props.id}>
      {props.heading && (
        <div className="b-nav-list__heading">{props.heading}</div>
      )}
      <ul className={listItemsClasses(props.columns)}>
        {list.map(item => (
          <li className={listItemClasses(props.anchor, props.columns)}>
            <a
              href={item.url}
              className={classNames({
                'b-nav-list__link': true,
                'b-nav-list__link--anchor': props.anchor
              })}
            >
              {item.description && (
                <div className="b-nav-list__item-description">
                  {item.description}
                </div>
              )}
              <span className="b-nav-list__item-title">{item.title}</span>
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
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  type: PropTypes.string,
  columns: PropTypes.bool,
  id: PropTypes.string
};

NavList.defaultProps = {
  anchor: false,
  type: '',
  id: ''
};

export default NavList;
