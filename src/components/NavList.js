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

const itemInfoClasses = file =>
  classNames({
    'b-nav-list__item-info': true,
    'b-nav-list__item-info--file': file
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

const listLinkClasses = (anchor, noArrow, active, activeChild, ordered, file) =>
  classNames({
    'b-nav-list__link': true,
    'b-nav-list__link--anchor': anchor,
    'b-nav-list__link--no-arrow': noArrow || file,
    'b-nav-list__link--active': active,
    'b-nav-list__link--active-child': activeChild,
    'b-nav-list__link--ordered': ordered
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
                item.active,
                item.activeChild,
                props.ordered,
                item.file
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
                  <div className="b-nav-list__item-meta">{item.meta}</div>
                )}
              </div>
              {item.infoText && (
                <div className={itemInfoClasses(item.file)}>
                  {item.infoText}
                </div>
              )}
              {item.topic && (
                <div className="b-nav-list__item-info b-nav-list__item-info--highlight">
                  {item.topic}
                </div>
              )}
            </a>
            {item.children && (
              <ul className="b-nav-list__child-items">
                {item.children.map(child => (
                  <li key={shortid.generate()} className="b-nav-list__item">
                    <a
                      href={child.url}
                      className={listLinkClasses(
                        false,
                        true,
                        false,
                        child.active,
                        child.file
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
      file: PropTypes.bool,
      infoText: PropTypes.string,
      topic: PropTypes.string,
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
  noArrow: PropTypes.bool,
  small: PropTypes.bool,
  sticky: PropTypes.bool,
  ordered: PropTypes.bool
};

export default NavList;
