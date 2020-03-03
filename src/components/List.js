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

const List = ({ id, heading, columns, list }) => {
  return (
    <nav
      className="b-nav-list"
      id={id}
      aria-label="unique-text-explaining-this"
    >
      {heading && (
        <h3 className="b-nav-list__heading h4">{heading}</h3>
      )}
      <ul className={listItemsClasses(columns)}>
        {list.map(item => (
          <li
            className={listItemClasses(columns)}
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
