import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';

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

const listLinkClasses = anchor =>
  classNames({
    'b-nav-list__link': true,
    'b-nav-list__link--anchor': anchor
  });

const itemMetaClasses = hide =>
  classNames({
    'b-nav-list__item-meta': true,
    'b-nav-list__item-meta--hide': hide
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
          <li
            className={listItemClasses(props.anchor, props.columns)}
            key={shortid.generate()}
          >
            <a href={item.url} className={listLinkClasses(props.anchor)}>
              {item.description && (
                <div className="b-nav-list__item-description">
                  {item.description}
                </div>
              )}
              <div className="b-nav-list__item-title">
                {item.title}
                {item.meta && (
                  <div className={itemMetaClasses(props.hideMeta)}>
                    {item.meta}
                  </div>
                )}
              </div>
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
  meta: PropTypes.string,
  columns: PropTypes.bool,
  id: PropTypes.string,
  hideMeta: PropTypes.bool
};

NavList.defaultProps = {
  anchor: false,
  meta: '',
  id: ''
};

export default NavList;
