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

const NavList = ({
  id,
  small,
  heading,
  columns,
  noArrow,
  ordered,
  list: list = []
}) => (
  <nav
    className={listClasses(small)}
    id={id}
    aria-label="unique-text-explaining-this"
  >
    {heading && (
      <h2 className="b-nav-list__heading">{heading}</h2>
    )}
    <ul className={listItemsClasses(columns)}>
      {list.map(item => (
        <li
          className={listItemClasses(columns)}
          key={shortid.generate()}
        >
          <a
            href={item.url}
            className={listLinkClasses(
              noArrow,
              item.active,
              ordered,
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
              {/* Is is possible to use a array of meta texts or just a string */}
              {item.meta && Array.isArray(item.meta) ? (
                <div className="b-nav-list__item-meta">
                  {item.meta.map((x, i) => {
                    if (i === 0) return item.meta[0];
                    return <div key={`meta_${i}`} className="t--tab-left">{x}</div>;
                  })}
                </div>
              ) : (
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

NavList.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      description: PropTypes.string,
      url: PropTypes.string,
      active: PropTypes.bool,
      file: PropTypes.bool,
      infoText: PropTypes.string,
      topic: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    })
  ).isRequired,
  columns: PropTypes.bool,
  noArrow: PropTypes.bool,
  small: PropTypes.bool,
  ordered: PropTypes.bool,
  ariaLabel: PropTypes.string
};

export default NavList;
