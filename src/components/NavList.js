import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';

const listClasses = (small, sticky) =>
  classNames({
    'b-nav-list': true,
    'b-nav-list--small': small,
    'b-nav-list--sticky': sticky
  });

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

const listLinkClasses = (
  anchor,
  noArrow,
  active = false,
  activeChild = false
) =>
  classNames({
    'b-nav-list__link': true,
    'b-nav-list__link--anchor': anchor,
    'b-nav-list__link--no-arrow': noArrow,
    'b-nav-list__link--active': active,
    'b-nav-list__link--active-child': activeChild
  });

const itemMetaClasses = hideMeta =>
  classNames({
    'b-nav-list__item-meta': true,
    'b-nav-list__item-meta--hide': hideMeta
  });

const NavList = props => {
  const { list: list = [] } = props;

  return (
    <nav className={listClasses(props.small, props.sticky)} id={props.id}>
      {props.heading && (
        <div className="b-nav-list__heading">{props.heading}</div>
      )}
      <ul className={listItemsClasses(props.columns)}>
        {list.map(item => (
          <li
            className={listItemClasses(props.anchor, props.columns)}
            key={shortid.generate()}
          >
            <a
              href={item.url}
              className={listLinkClasses(
                props.anchor,
                props.noArrow,
                item.active
              )}
            >
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
            {item.children && (
              <ul className="b-nav-list__child-items">
                {item.children.map(child => (
                  <li key={shortid.generate()} className="b-nav-list__item">
                    <a
                      href={item.url}
                      className={listLinkClasses(
                        false,
                        true,
                        false,
                        child.active
                      )}
                    >
                      {child.meta && (
                        <span className="b-nav-list__child-column">
                          {child.meta}
                        </span>
                      )}
                      <span className="b-nav-list__child-column">
                        {child.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
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
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      active: PropTypes.bool,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string,
          url: PropTypes.string.isRequired,
          active: PropTypes.bool
        })
      )
    })
  ).isRequired,
  columns: PropTypes.bool,
  hideMeta: PropTypes.bool,
  noArrow: PropTypes.bool,
  small: PropTypes.bool,
  sticky: PropTypes.bool
};

export default NavList;
