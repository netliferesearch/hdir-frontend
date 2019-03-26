import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import ListItemType from './ListItemType';

const listItemClasses = columns =>
  classNames({
    'b-nav-list__item': true,
    'b-nav-list__item--column': columns
  });

const listItemsClasses = columns =>
  classNames({
    'b-nav-list__items': true,
    'b-nav-list__items--columns': columns
  });

const List = props => {
  return (
    <nav
      className="b-nav-list"
      id={props.id}
      aria-label="unique-text-explaining-this"
    >
      {props.heading && (
        <div className="b-nav-list__heading">{props.heading}</div>
      )}
      <ul className={listItemsClasses(props.columns)}>
        {props.list.map(item => (
          <li
            className={listItemClasses(props.columns)}
            key={shortid.generate()}
          >
            {item.url ? (
              <a href={item.url} className="b-nav-list__link">
                <ListItemType itemType={item} />
              </a>
            ) : (
              <div className="b-nav-list__link b-nav-list__link--no-pointer">
                <ListItemType itemType={item} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

List.propTypes = {
  heading: PropTypes.string,
  columns: PropTypes.bool,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      href: PropTypes.string,
      fields: PropTypes.object
    })
  ),
  ariaLabel: PropTypes.string
};

export default List;
