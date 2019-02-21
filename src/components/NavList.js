import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';

const listClasses = small =>
  classNames({
    'b-nav-list': true,
    'b-nav-list--small': small
  });

const itemInfoClasses = file =>
  classNames({
    'b-nav-list__item-info': true,
    'b-nav-list__item-info--file': file
  });

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

const listLinkClasses = (noArrow, active, ordered, file, url) =>
  classNames({
    'b-nav-list__link': true,
    'b-nav-list__link--arrow': url,
    'b-nav-list__link--no-arrow': noArrow || file,
    'b-nav-list__link--active': active,
    'b-nav-list__link--ordered': ordered
  });

const NavList = props => {
  const { list: list = [] } = props;

  return (
    <nav className={listClasses(props.small)} id={props.id}>
      {props.heading && (
        <div className="b-nav-list__heading">{props.heading}</div>
      )}
      <ul className={listItemsClasses(props.columns)}>
        {list.map(item => (
          <li
            className={listItemClasses(props.columns)}
            key={shortid.generate()}
          >
            <a
              href={item.url}
              className={listLinkClasses(
                props.noArrow,
                item.active,
                props.ordered,
                item.file,
                item.url
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavList.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string,
      active: PropTypes.bool,
      file: PropTypes.bool,
      infoText: PropTypes.string,
      topic: PropTypes.string
    })
  ).isRequired,
  columns: PropTypes.bool,
  noArrow: PropTypes.bool,
  small: PropTypes.bool,
  ordered: PropTypes.bool
};

export default NavList;
